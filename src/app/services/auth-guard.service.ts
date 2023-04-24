import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
// @ts-ignore
import {Observable} from "rxjs/dist/types";
import {resolve} from "@angular/compiler-cli";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private afAuth:AngularFireAuth, private router:Router){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean>{
    return new Promise((resolve,reject) =>{
      this.afAuth.onAuthStateChanged((user)=>{
        if(user){
          resolve(true)
        }else{
          console.log('Auth Guard: user is not logged in');
          this.router.navigateByUrl('/')
          resolve(false);
        }
      })
    })
  }

}
