import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ProductComponent } from './product/product.component';
import { TaskComponent } from './task/task.component';
import { Products1Component } from './products1/products1.component';
import { Products2Component } from './products2/products2.component';
import { MenComponent } from './products2/men/men.component';
import { MenFootwearComponent } from './products2/men/men-footwear/men-footwear.component';
import { MenClothingComponent } from './products2/men/men-clothing/men-clothing.component';
import { WomenComponent } from './products2/women/women.component';
import { WomenClothingComponent } from './products2/women/women-clothing/women-clothing.component';
import { WomenFootwearComponent } from './products2/women/women-footwear/women-footwear.component';
import { KidsComponent } from './products2/kids/kids.component';
import { KidsClothingComponent } from './products2/kids/kids-clothing/kids-clothing.component';
import { KidsFootwearComponent } from './products2/kids/kids-footwear/kids-footwear.component';
const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'menu', component: MenuComponent
  },
  {
    path: 'product', component: ProductComponent
  },
  {
    path: 'task', component: TaskComponent
  },
  {
    path: 'products1/:id', component: Products1Component
  },
  {
    path: 'products2', component: Products2Component,
    children: [{
      path: 'men', component: MenComponent, children: [
        {
          path: 'men-clothing', component: MenClothingComponent
        },
        {
          path: 'men-footwear', component: MenFootwearComponent
        }
      ]
    },
    {
      path: 'women', component: WomenComponent, children: [
        {
          path: 'women-clothing', component: WomenClothingComponent
        },
        {
          path: 'women-footwear', component: WomenFootwearComponent
        }
      ]
    },
    {
      path: 'kids', component: KidsComponent, children: [
        {
          path: 'kids-clothing', component: KidsClothingComponent
        },
        {
          path: 'kids-footwear', component: KidsFootwearComponent
        }
      ]
    },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
