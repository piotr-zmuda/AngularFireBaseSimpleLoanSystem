import { Component } from '@angular/core';
import {AppRoutingModule, routingComponents} from "../../app-routing.module";
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AuthService} from "../../services/auth.service";
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {getAuth} from 'firebase/auth'
import {onAuthStateChanged} from "@angular/fire/auth";

@Component({
  selector: 'app-strona-glowna',
  templateUrl: './strona-glowna.component.html',
  styleUrls: ['./strona-glowna.component.scss']
})
export class StronaGlownaComponent {
  isSignedIn:false;
  login:string;
  password:string;
  constructor(private route:Router, public agAuth:AngularFireAuth, private authService:AuthService){

  }

  ngOnInit(){
  }
  getUser(){
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        return user;
      } else {
       return null;
      }
    });
  }
  async onSignIn(){
    await this.authService.loginUser(this.login,this.password)
    this.agAuth.signInWithEmailAndPassword(this.login,this.password)
  }
  signOut(){
    const auth = getAuth();
    auth.signOut().then(function() {
      console.log("Logout successful");

    }, function(error) {
      console.log(error);

    });
  }
  navigate(navName:any){
    this.route.navigateByUrl('/'+navName)
  }
}
