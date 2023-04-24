import { Component } from '@angular/core';
import {AppRoutingModule, routingComponents} from "../../app-routing.module";
import {Router} from "@angular/router";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {getAuth} from 'firebase/auth'
import {onAuthStateChanged} from "@angular/fire/auth";
import {AngularFireDatabase} from "@angular/fire/compat/database";
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent {
  name: string;
  lastName:string;
  email:string;
  password:string;
  contact:0;
  loans=[];
  loanNb;
  numberOfLoans;
  constructor(private route:Router, public agAuth:AngularFireAuth,  private db : AngularFireDatabase){

  }
  ngOnInit(){
    this.getUser();
  }

  getUser(){
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        this.db.list('/Account').valueChanges().subscribe(res=>{
            res.forEach(acc=>{
              if(acc['email']==acc['email']){
                this.name=acc['imie'];
                this.lastName=acc['nazwisko'];
                this.password=acc['haslo'];
                this.contact=acc['kontakt'];
                Object.values(acc['loans']).filter(loans => {
                  if(loans!=1)
                  {
                    this.loanNb=loans;
                    Object.values(loans).filter(loan => {
                      this.loans.push(loan)
                    })
                  }
                })
              }
            })
        })
        this.email=user.email;
        return user;
      } else {
        console.log('didntWork')
        return null;
      }
    });
  }
  navigate(dest){
    this.route.navigateByUrl('profil/'+dest)
  }
}
