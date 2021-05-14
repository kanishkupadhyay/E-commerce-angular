import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../service/auth.service';
import { DesignService } from '../../service/design.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
value:number=0
username:any=''
  constructor(private design:DesignService,private authService:AuthService,private afAuth:AngularFireAuth) { 
    this.design.totalItem.subscribe(val=>{
      this.value=val
    })
    this.afAuth.authState.subscribe(data=>{
      this.username=data
    })
  }

  login(){
this.authService.login()

  }
  logout(){
this.authService.logout()
  }

}
