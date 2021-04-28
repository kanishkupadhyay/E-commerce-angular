import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{AllProductComponent}from './all-product/all-product.component'
import {MaterialModule}from '../material/material.module';
import { CartComponent } from './cart/cart.component';
import {RouterModule}from '@angular/router';
import {FormsModule}from '@angular/forms';
import { ViewItemComponent } from './view-item/view-item.component';
import { ProductCategoryComponent } from './product-category/product-category.component';


@NgModule({
  declarations: [AllProductComponent, CartComponent, ViewItemComponent, ProductCategoryComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
  ],
  exports:[AllProductComponent,CartComponent,ViewItemComponent,ProductCategoryComponent]
})
export class ProductsModule { }
