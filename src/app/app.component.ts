import { Component } from '@angular/core';
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
import {faUser, faHouse} from "@fortawesome/free-solid-svg-icons"
import {AngularFireDatabase} from "@angular/fire/compat/database";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inzynierka';
  account:any[];
  fontAwesomeIcons = {
    profileIcon : faUser,
    houseIcon : faHouse
  }
  ;
  constructor(
    private route: Router,
    private db : AngularFireDatabase
  ){
    db.list('/Account').valueChanges().subscribe(res=>{
        this.account=res;
    })
  }
  navigate(navName:any){
    this.route.navigateByUrl('/'+navName)
  }
}
