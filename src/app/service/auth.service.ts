import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token:any='';
  constructor(private afAuth:AngularFireAuth,private router:Router) {
    this.afAuth.authState.subscribe(data=>{console.log(data)
    this.token = data
    localStorage.setItem('token', this.token.a.l)
  })
  
   }
  login(){
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    this.router.navigate(['/'])
  }
  logout(){
    this.afAuth.signOut()
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }
}
