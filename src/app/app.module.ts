import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule}from '@angular/forms';
import {HttpClientModule}from '@angular/common/http';
import {MaterialModule}from './material/material.module';
import {SiteLayoutModule}from './site-layout/site-layout.module';
import {ProductsModule}from './products/products.module'
import {RouterModule}from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    SiteLayoutModule,
    ProductsModule,
    RouterModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
