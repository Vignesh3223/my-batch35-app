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

  selectedProduct(quantity: number) {
    debugger;
    if (quantity >= 100) {
      Swal.fire({
        icon: 'error',
        title: 'Limit',
        text: 'Quantity cannot be more than 100',
      });
    }
    if (quantity <= 1) {
      Swal.fire({
        icon: 'error',
        title: 'Limit',
        text: 'Quantity cannot be less than 1',
      });
    }
  }
  constructor() { }

  ngOnInit(): void { }
}

