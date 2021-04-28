import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { DesignService } from '../../service/design.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
category:any=[]
item:any=[]
products:any=[]
  constructor(private design:DesignService,private _snackBar: MatSnackBar,private route:ActivatedRoute) {
    this.design.category().subscribe(data=>{
      this.category=data
    })
    this.design.categoryItem(this.route.snapshot.params.id).subscribe(data=>{
      this.products=data
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
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  getCategoryData(){
    // this.design.categoryItem(this.route.snapshot.params.id).subscribe(data=>{
    //   this.products=data
    //   console.log(this.route.snapshot.params)
    // })
  }
}
