import { Component, OnInit } from '@angular/core';
import * as productdata from 'src/json/product.json';
import * as traineesdata from 'src/json/trainees.json';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  browserName = '';
  browserVersion = '';

  ngOnInit() {
    this.browserName = this.detectBrowserName();
    this.browserVersion = this.detectBrowserVersion();
  }

  detectBrowserName() {
    const agent = window.navigator.userAgent.toLowerCase()
    switch (true) {
      case agent.indexOf('edg') > -1:
        return 'edge';
      case agent.indexOf('opr') > -1 && !!(<any>window).opr:
        return 'opera';
      case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
        return 'chrome';
      case agent.indexOf('trident') > -1:
        return 'ie';
      case agent.indexOf('firefox') > -1:
        return 'firefox';
      case agent.indexOf('safari') > -1:
        return 'safari';
      default:
        return 'other';
    }
  }

  detectBrowserVersion() {
    var userAgent = navigator.userAgent, tem,
      matchTest = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

    if (/trident/i.test(matchTest[1])) {
      tem = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
      return 'IE ' + (tem[1] || '');
    }
    if (matchTest[1] === 'Chrome') {
      tem = userAgent.match(/\b(OPR|Edg)\/(\d+)/);
      if (tem != null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    matchTest = matchTest[2] ? [matchTest[1], matchTest[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = userAgent.match(/version\/(\d+)/i)) != null) matchTest.splice(1, 1, tem[1]);
    return matchTest.join(' ');
  }

  name = ""
  age = ""
  department = ""
  salary = ""

  count = 0;
  click() {
    this.count++;
  }

  count1 = 0;
  dblclick() {
    this.count1 += 2;
  }

  count2 = 1;
  mouseover() {
    this.count2 += 3;
  }

  count3 = 1;
  mouseenter() {
    this.count3++;
  }
  count4 = 0;
  mouseleave() {
    this.count4++;
  }

  count5 = 0;
  mouseup() {
    this.count5 = this.count5 + 4;
  }

  count6 = 0;
  mousedown() {
    this.count6 = this.count6 + 5;
  }

  count7 = 0;
  select() {
    this.count7++;
  }

  count8 = 0;
  dragdrop() {
    this.count8++;
  }

  products: any = (productdata as any).default

  trainees: any = (traineesdata as any).default

  toggle(trainee: any) {
    trainee.hide = !trainee.hide;
  }


  employees: Employee[] = [
    {
      EmployeeID: 1,
      EmployeeName: 'Arun',
      Department: 'Developer',
      Salary: 20000
    },
    {
      EmployeeID: 2,
      EmployeeName: 'Darshan',
      Department: 'Developer',
      Salary: 20000
    },
    {
      EmployeeID: 3,
      EmployeeName: 'Harshan',
      Department: 'Designer',
      Salary: 20000
    },
    {
      EmployeeID: 4,
      EmployeeName: 'Hemanth',
      Department: 'Developer',
      Salary: 20000
    },
    {
      EmployeeID: 5,
      EmployeeName: 'Haritha',
      Department: 'Developer',
      Salary: 20000
    },
    {
      EmployeeID: 6,
      EmployeeName: 'Sharon',
      Department: 'Developer',
      Salary: 20000
    },
    {
      EmployeeID: 7,
      EmployeeName: 'Karthikeyan',
      Department: 'Developer',
      Salary: 20000
    },
    {
      EmployeeID: 8,
      EmployeeName: 'Harishmitha',
      Department: 'Developer',
      Salary: 20000
    },
    {
      EmployeeID: 9,
      EmployeeName: 'Sivabharath',
      Department: 'Developer',
      Salary: 20000
    },
    {
      EmployeeID: 10,
      EmployeeName: 'Srikanth',
      Department: 'Developer',
      Salary: 20000
    },
    {
      EmployeeID: 11,
      EmployeeName: 'Vignesh',
      Department: 'Developer',
      Salary: 20000
    },
    {
      EmployeeID: 12,
      EmployeeName: 'Yamini',
      Department: 'Developer',
      Salary: 20000
    }
  ]

}
class Employee {
  EmployeeID: number | undefined;
  EmployeeName: string | undefined;
  Department: string | undefined;
  Salary: number | undefined;

}

interface Product {
  id: number,
  productname: string,
  price: number,
  imageUrl: string
}

interface Trainees {
  id: number,
  name: string,
  gender: string,
  domain: string,
  imageUrl: string
}
