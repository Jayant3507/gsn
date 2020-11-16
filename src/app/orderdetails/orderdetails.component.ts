import { Component, OnInit } from '@angular/core';
import { Order } from "../models/order";
import * as $ from 'jquery';
@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  public orders: Order[] = [
    new Order(111, "15/08/2019", "abc","12/09/2020","20/05/2019","Delievered","Thanks"),
    new Order(211, "16/07/2019", "gfgg","12/03/2019","22/05/2019","Pending","Thanks"),
    new Order(311, "17/08/2019", "jttt","11/02/2015","23/05/2019","Pending","Thanks"),
    new Order(411, "18/09/2019", "jyyg","10/06/2020","24/05/2019","Pending","Thanks")
  ];

  dtOptions: any = {};

  constructor() { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 3,
      processing: true,
      dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'print'
        ]
    };

  }

}
