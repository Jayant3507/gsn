import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from "../models/product";

@Component({
  selector: 'app-productsummary',
  templateUrl: './productsummary.component.html',
  styleUrls: ['./productsummary.component.css']
})

export class ProductsummaryComponent implements OnInit {
  public products: Product[] = [
    new Product(1, "Product 001", "abc","ghgh","lorem ipsum"),
    new Product(2, "Product 002", "gfgg","fdf","lsldd skjdsd"),
    new Product(3, "Product 003", "jttt","sdsd","smdsnd snds"),
    new Product(4, "Product 004", "jyyg","dsd","sdsn sdsd"),
  ];

  product: Product = this.products[0];
  dtOptions: DataTables.Settings = {};
   constructor(private route: ActivatedRoute) { 
   }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };

    
    this.route.params.subscribe((params) => {
      this.products.forEach((p: Product) => {
        if (p.code == params.code) {
          this.product = p;
        }
      });
    });
  }

  }


