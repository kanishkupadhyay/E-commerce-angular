import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DesignService } from '../../service/design.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
id:any='';
data:any={}
size:any=[]
item:any=[]
value={
  comment:''
}
  constructor(private design:DesignService,private route:ActivatedRoute,private http:HttpClient) {
    this.id= route.snapshot.params.id
    this.design.getSingleProduct(this.id).subscribe(data=>{
      this.data=data
      this.size=this.data
    })
   }

  ngOnInit(): void {
  }
  addItem(id:any){
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
       arr:any=[]
        com:any=[]
       submitComment(inpVal:any){
          this.value={
           comment:inpVal
         }
         this.design.createComments(this.id).subscribe(data=>{
           this.arr=data
          //  this.com.comments.push(this.value)
          // this.arr.comments=this.com
          // this.com.push({
          //   comment:inpVal
          // })
          let news:any=''
           this.http.post(this.arr.comments,{c:inpVal}).subscribe(data=>{
             news=data
           })
          // this.arr.comments.
          console.log(news)
         })
        
       
       }
  }
