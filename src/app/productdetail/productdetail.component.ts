import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from "../models/product";

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})

export class ProductdetailComponent implements OnInit {
  public products: Product[] = [
    new Product(1, "Product 001", "abc","ghgh","lorem ipsum"),
    new Product(2, "Product 002", "gfgg","fdf","lsldd skjdsd"),
    new Product(3, "Product 003", "jttt","sdsd","smdsnd snds"),
    new Product(4, "Product 004", "jyyg","dsd","sdsn sdsd"),
  ];

  title = 'angulardatatables';
  dtOptions: DataTables.Settings = {};
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

//    var table = $('#example').DataTable();

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    
    }    

}
