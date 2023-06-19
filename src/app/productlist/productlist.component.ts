import { Component, OnInit } from '@angular/core';
import * as productsdata from 'src/json/products2.json'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  myfavproducts: any = (productsdata as any).default

  constructor() { }

  selectedProduct(quantity: number) {
    if (quantity > 100) {
      Swal.fire({
        icon: 'error',
        title: 'Limit',
        text: 'Quantity cannot be more than 100',
      });
      quantity = 100;
    }
    else if (quantity < 1) {
      Swal.fire({
        icon: 'error',
        title: 'Limit',
        text: 'Quantity cannot be 0',
      });
      quantity = 1;
    }
  }
  ngOnInit(): void { }
}

