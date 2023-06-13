import { Component } from '@angular/core';

@Component({
  selector: '[app-home]',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name: string = "Jack"
  designation = "Developer"

  getdes(): string {
    return this.designation
  }
  color = "navy"
  back = "aliceblue"

  imageurl = "https://nareshit.com/wp-content/uploads/2018/08/angular-JS-online-training-nareshit.jpg"
  isDisabled = true;

  count = 0
  click(){
    this.count++;
  }

  mul(a:number,b:number):number{
    return a * b
  }

  min(a:number,b:number):number{
    return Math.min(a,b)
  }
}

