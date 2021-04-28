import { Component } from '@angular/core';
import { DesignService } from './service/design.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'my-dream-app';
  value:any=[]
  constructor(private design:DesignService){
    this.design.cartItem().subscribe(data=>{
      this.value=data
     this.design.totalItem.next(this.value.length)
    })
  }
}
