import { Component, OnInit, ViewChild, PipeTransform } from '@angular/core';
import { Table } from 'primeng/table';
import { CustomerService } from '../services/shared/customer.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})

export class DatatableComponent implements OnInit {
  value: Date;
  value1: Date;
  customers: any = [];
  representatives: any = [];
  statuses: any[];
  loading: boolean = true;
  @ViewChild('dt') table: Table;

  // product:any = [
  //   {id:1, code:1010, fname:"rajesh",lname:"meena", category:"developement", quantity:1},
  //   {id:2,code:1012, fname:"jeet",lname:"singh", category:"testing", quantity:5},
  //   {id:3, code:1013, fname:"akshay",lname:"raskar", category:"developement", quantity:2},
  //   {id:4, code:1014, fname:"jayant",lname:"badhe", category:"developement", quantity:4}
  // ]

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomersLarge().then(customers => {
      this.customers = customers;
      this.loading = false;
    })
    this.representatives = [
      { name: "Amy Elsner", image: 'amyelsner.png' },
      { name: "Anna Fali", image: 'annafali.png' },
      { name: "Asiya Javayant", image: 'asiyajavayant.png' },
      { name: "Bernardo Dominic", image: 'bernardodominic.png' },
      { name: "Elwin Sharvill", image: 'elwinsharvill.png' },
      { name: "Ioni Bowcher", image: 'ionibowcher.png' },
      { name: "Ivan Magalhaes", image: 'ivanmagalhaes.png' },
      { name: "Onyama Limba", image: 'onyamalimba.png' },
      { name: "Stephen Shaw", image: 'stephenshaw.png' },
      { name: "XuXue Feng", image: 'xuxuefeng.png' }
    ];
    
    this.statuses = [
      { label: 'Unqualified', value: 'unqualified' },
      { label: 'Qualified', value: 'qualified' },
      { label: 'New', value: 'new' },
      { label: 'Negotiation', value: 'negotiation' },
      { label: 'Renewal', value: 'renewal' },
      { label: 'Proposal', value: 'proposal' }
    ]
  }

  onActivityChange(event) {
    const value = event.target.value;
    if (value && value.trim().length) {
      const activity = parseInt(value);
      if (!isNaN(activity)) {
        this.table.filter(activity, 'activity', 'gte');
      } 
    }
  }

  onDateSelect(value) {
    this.table.filter(this.formatDate(value), 'date', 'equals')
  }

  formatDate(date) {
    let month = date.getMonth() + 1;
    let day = date.getDate();
    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }
    return date.getFullYear() + '-' + month + '-' + day;
  }


  onRepresentativeChange(event) {
    this.table.filter(event.value, 'representative', 'in')
  }

  rowData(rowDataa: any){
    debugger
    return (rowDataa.isSelected) ? "rowSelected" : "rowUnselected";
  }
  
}
