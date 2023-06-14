import { Component,OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

  ngOnInit() {
      this.items = [
          { label: 'Home', icon: 'pi pi-fw pi-home', routerLink:'home' },
          { label: 'Leadership', icon: 'pi pi-fw pi-users', routerLink:'menu'},
          { label: 'Products', icon: 'pi pi-fw pi-shopping-cart', routerLink:'product' }
      ];

      this.activeItem = this.items[0];
  }

}
