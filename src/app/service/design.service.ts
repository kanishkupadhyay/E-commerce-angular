import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignService {
  BASEURL="https://e-commerce-angular-database.herokuapp.com/products";
  cartItemUrl="https://e-commerce-angular-database.herokuapp.com/cartItem";
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
    return this.http.get(`https://e-commerce-angular-database.herokuapp.com/products/${id}`)
  }
  category(){
return this.http.get('https://e-commerce-angular-database.herokuapp.com/category')
  }
  categoryItem(categoryId:any){
    return this.http.get(`https://e-commerce-angular-database.herokuapp.com/products?categoryId=${categoryId}`)
  }
quantity(id:number){
 return this.http.get(`https://e-commerce-angular-database.herokuapp.com//products/${id}`)

}
pp(id:any){
return this.http.get(`https://e-commerce-angular-database.herokuapp.com//cartItem/${id}`)
}
}
