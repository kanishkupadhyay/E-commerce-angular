import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DesignService } from '../../service/design.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  items: any = []
  nothing: boolean = true
  totalPrice: number = 0;
  quantity: any = 1
  dialog: boolean = false;
  spinner: boolean = true
  summary: boolean = false
  cartItems: boolean = false
  gst: number = 0
  oldValue: number = 0
  discount: number = 10
  totalPriceBefore: number = 0
  constructor(private design: DesignService, private _snackBar: MatSnackBar) {
    this.design.cartItem().subscribe(data => {
      this.items = data
      this.spinner = false
      // Calculating Total price
      this.items.forEach((curVal: any, index: number) => {
        this.totalPrice += curVal.price
        this.totalPriceBefore += curVal.price
        this.oldValue += curVal.price
        this.gst = (this.totalPrice * 10) / 100

        this.totalPrice -= this.gst
        if (this.totalPrice > 1000) {
          this.gst = this.totalPriceBefore + (1000 * (18 / 100))
          let dis = (this.totalPriceBefore * 10) / 100

          this.gst = this.gst - dis
        }
        else {
          this.gst = this.totalPrice
        }
      })

      if (this.items.length > 0) {
        this.nothing = false
      }
    })
  }

  ngOnInit(): void {

  }


  deleteItem(id: any) {
    this.design.deleteItem(id).subscribe(data => {
      this.design.cartItem().subscribe(data => {
        this.items = data
      })
    })
  }
  p: any = []
  sum: any = 0
  updateTotalPrice: any = 0
  prices: any = 0
  increaseQuantity(id: any, event: any, q: any, price: any) {
    console.log(q.innerText++)

    this.design.getSingleProduct(id).subscribe(data => {
      this.design.pp(id).subscribe(data => {
        this.prices = data
        this.sum = this.prices.price
        this.p.push(this.prices.price)
        console.log(this.p)

        this.p.map((curVal: any) => {
          this.sum += curVal
        })
        if(this.sum!=0 &&this.sum>0){
          q.innerText+1
        price.innerText ='₹'+ this.sum
        }
        console.log(this.sum)
        let final=this.totalPriceBefore+(this.sum/2)

        this.totalPriceBefore=final
        console.log(this.totalPriceBefore+this.sum)
      })

    })
  }
  decreaseQuantity(id: any, $event: any, q: any, price: any) {
    // let pricess: any = 0
    // this.design.pp(id).subscribe(data => {
    //   pricess = data
    //   console.log(this.sum - pricess.price)
    //   if(q.innerText>1){
    //   q.innerText--
    //   }

    //   this.p.pop()
    //   let newVal=this.sum - pricess.price
    //   this.sum = newVal
    //   //  console.log(this.p)
    // })
    // //  console.log(this.sum)
    // if(this.sum!=0 &&this.sum>0){
    // price.innerText ='₹'+this.sum
    // // this.quantity--
    // }
  }
  openDialog() {
    this.dialog = true
    this.cartItems = true
  }
  fname: any = ''
  lname: any = ''
  mobile: any = ''
  email: any = ''
  address: any = ''
  onSubmit(myForm: NgForm) {
    this.fname = myForm.form.controls.fname.value;
    this.lname = myForm.form.controls.lname.value;
    this.mobile = myForm.form.controls.mobile.value;
    this.email = myForm.form.controls.email.value
    this.address = myForm.form.controls.address.value
    this.summary = true
    this.dialog = false

  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  printFunc() {
    window.print()
  }

}
