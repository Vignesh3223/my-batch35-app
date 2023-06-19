import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-producttable',
  templateUrl: './producttable.component.html',
  styleUrls: ['./producttable.component.css']
})
export class ProducttableComponent implements OnInit {
  @Input()
  productList: Products[] = [];

  @Output()
  QuantitySelectedEventEmitter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  increase(prod: any) {
    if (prod.quantity < 100) {
      prod.quantity++;
      this.QuantitySelectedEventEmitter.emit(prod.quantity);
    }
  }

  decrease(prod: any) {
    if (prod.quantity > 0) {
      prod.quantity--;
      this.QuantitySelectedEventEmitter.emit(prod.quantity);
    }
  }
}

interface Products {
  id: number,
  proname: string,
  price: number,
  quantity: number,
  image: string
}
