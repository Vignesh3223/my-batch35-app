import { Component } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  showSidebar: boolean = false;

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
  events: any[];

  constructor() {
      this.events = [
        { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#ffff',bgcolor:'#9C27B0', image: 'game-controller.jpg' },
        { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#ffff',bgcolor:'#673AB7', },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#ffff',bgcolor:'#FF9800', },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#ffff',bgcolor:'#607D8B', }
      ];
  }
}

