import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectGuard } from './guard/protect.guard';
import { AllProductComponent } from './products/all-product/all-product.component';
import { CartComponent } from './products/cart/cart.component';
import { ProductCategoryComponent } from './products/product-category/product-category.component';
import { ViewItemComponent } from './products/view-item/view-item.component';
import { HomeComponent } from './site-layout/home/home.component';
import{LoginComponent}from './site-layout/login/login.component'

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'all-product',component:AllProductComponent,canActivate:[ProtectGuard]},
  {path:'cart',component:CartComponent,canActivate:[ProtectGuard]},
  {path:'view-item/:id',component:ViewItemComponent,canActivate:[ProtectGuard]},
  {path:'view-item-category/:id',component:ProductCategoryComponent,canActivate:[ProtectGuard]},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
