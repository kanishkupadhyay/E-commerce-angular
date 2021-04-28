import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MaterialModule}from '../material/material.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component'
import {RouterModule}from '@angular/router'

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    HomeComponent,
  FooterComponent
  ]
})
export class SiteLayoutModule { }
