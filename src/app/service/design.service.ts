import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignService {
  BASEURL="http://localhost:3000/products";
  cartItemUrl="http://localhost:3000/cartItem";
  totalItem=new BehaviorSubject(0)
  constructor(private http:HttpClient) { }
  getAllData(){
    return this.http.get(this.BASEURL)
  }
  getSingleProduct(id:any){
    return this.http.get(`${this.BASEURL}/${id}`)
  }
  creatingCartItem(data:any){
     return this.http.post(this.cartItemUrl,data)
  }
  cartItem(){
    return this.http.get(this.cartItemUrl)
  }
  deleteItem(id:any){
return this.http.delete(`${this.cartItemUrl}/${id}`)
  }
  getSingleItem(id:any){
    return this.http.get(`${this.BASEURL}/${id}`)
  }
  createComments(id:any){
    return this.http.get(`http://localhost:3000/products/${id}`)
  }
  category(){
return this.http.get('http://localhost:3000/category')
  }
  categoryItem(categoryId:any){
    return this.http.get(`http://localhost:3000/products?categoryId=${categoryId}`)
  }
quantity(id:number){
 return this.http.get(`http://localhost:3000/products/${id}`)

}
pp(id:any){
return this.http.get(`http://localhost:3000/cartItem/${id}`)
}
}
