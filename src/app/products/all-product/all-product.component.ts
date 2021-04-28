import { Component, OnInit } from '@angular/core';
import { DesignService } from '../../service/design.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
products:any=[]
item:any=[]
viewTxt:boolean=false
spinner:boolean=true
category:any=[]
  constructor(private design:DesignService,private _snackBar: MatSnackBar) { 
    this.design.getAllData().subscribe((data:any)=>{
      this.products=data
      this.spinner=false
    })
    this.design.category().subscribe(data=>{
      this.category=data
    })
  
  }

  ngOnInit(): void {
  }
  addItem(id:any,e:any){
    e.preventDefault()
this.design.getSingleProduct(id).subscribe(data=>{
 this.item=data


 let arr={
  productName:this.item.productName,
  price:this.item.price,
  proImg:this.item.proImg,
  categoryId:this.item.categoryId,
  description:this.item.description,
  rating:this.item.rating,
  quantity:this.item.quantity
 }
 this.design.creatingCartItem(arr).subscribe(data=>{
 })
})

  }
  imgMouseEnter(){
    this.viewTxt=true
  }
  imgMouseLeave(){
this.viewTxt=false
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
