import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductComponent } from './products/all-product/all-product.component';
import { CartComponent } from './products/cart/cart.component';
import { ProductCategoryComponent } from './products/product-category/product-category.component';
import { ViewItemComponent } from './products/view-item/view-item.component';
import { HomeComponent } from './site-layout/home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'all-product',component:AllProductComponent},
  {path:'cart',component:CartComponent},
  {path:'view-item/:id',component:ViewItemComponent},
  {path:'view-item-category/:id',component:ProductCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
