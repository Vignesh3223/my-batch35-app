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
import { ProductComponent } from './product/product.component';
import { ImageModule } from 'primeng/image';
import { DataViewModule } from 'primeng/dataview';
import { TaskComponent } from './task/task.component';
import { TabViewModule } from 'primeng/tabview';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProducttableComponent } from './producttable/producttable.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { Products2Component } from './products2/products2.component';
import { MenComponent } from './products2/men/men.component';
import { MenFootwearComponent } from './products2/men/men-footwear/men-footwear.component';
import { MenClothingComponent } from './products2/men/men-clothing/men-clothing.component';
import { WomenComponent } from './products2/women/women.component';
import { WomenClothingComponent } from './products2/women/women-clothing/women-clothing.component';
import { WomenFootwearComponent } from './products2/women/women-footwear/women-footwear.component';
import { KidsComponent } from './products2/kids/kids.component';
import { KidsFootwearComponent } from './products2/kids/kids-footwear/kids-footwear.component';
import { KidsClothingComponent } from './products2/kids/kids-clothing/kids-clothing.component';
import { Products1Component } from './products1/products1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MenuComponent,
    TaskComponent,
    ProductComponent,
    ProductlistComponent,
    ProducttableComponent,
    SignupComponent,
    SigninComponent,
    Products2Component,
    MenFootwearComponent,
    MenClothingComponent,
    WomenClothingComponent,
    WomenFootwearComponent,
    KidsFootwearComponent,
    KidsClothingComponent,
    Products1Component,
    MenComponent,
    WomenComponent,
    KidsComponent


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
