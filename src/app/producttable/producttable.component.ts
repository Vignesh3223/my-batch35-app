import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-producttable',
  templateUrl: './producttable.component.html',
  styleUrls: ['./producttable.component.css']
})
export class ProducttableComponent implements OnInit {
  @Input()
  productList: Products2[] = [];

  @Output()
  QuantitySelectedEventEmitter = new EventEmitter();

  productSelected(Quantity: number) {
    this.QuantitySelectedEventEmitter.emit(Quantity);
  }
  constructor() { }

  ngOnInit(): void {
  }
  increase(prod: any) {
    if (prod.quantity < 100) {
      prod.quantity++;
    }
  }
  decrease(prod: any) {
    if (prod.quantity > 0) {
      prod.quantity--;
    }
  }

}
interface Products2 {
  id: number,
  proname: string,
  price: number,
  quantity: number,
  image: string
}
