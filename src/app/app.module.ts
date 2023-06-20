import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MenuComponent } from './menu/menu.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { TabMenuModule } from 'primeng/tabmenu';
import { ImageModule } from 'primeng/image';
import { ProductComponent } from './product/product.component';
import { DataViewModule } from 'primeng/dataview';
import { TaskComponent } from './task/task.component';
import { TabViewModule } from 'primeng/tabview';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProducttableComponent } from './producttable/producttable.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MenuComponent,
    ProductComponent,
    TaskComponent,
    ProductlistComponent,
    ProducttableComponent,
    SignupComponent,
    SigninComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule,
    ButtonModule,
    TimelineModule,
    CardModule,
    TabMenuModule,
    ImageModule,
    DataViewModule,
    TabViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
