import {Component, Input, SimpleChanges} from '@angular/core';
import {Router} from "@angular/router";
import {getDatabase, ref, set} from "@angular/fire/database";
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-rejestracja',
  templateUrl: './rejestracja.component.html',
  styleUrls: ['./rejestracja.component.scss']
})
export class RejestracjaComponent {
    accList: any[];
    form:{name: '',
      lastName:'',
      email:'',
      confEmail:'',
      password:'',
      confPassword:'',
      contact:0};
    asd:boolean;
    constructor(
      private route: Router,
      private db : AngularFireDatabase,
      private agAuth:AngularFireAuth
    ){
      db.list('/Account').valueChanges().subscribe(res=>{
        this.accList=res;
      })
    }
    ngOnInit(): void{
      this.form = {
        name: '',
        lastName:'',
        email:'',
        confEmail:'',
        password:'',
        confPassword:'',
        contact:0
      };
      this.asd=false;
    }
   writeUserData() {

    const db = getDatabase();
     this.agAuth.createUserWithEmailAndPassword(this.form.email,this.form.password).then((result)=>{
       set(ref(db, '/Account/'+ result.user.uid), {
         imie: this.form.name,
         nazwisko: this.form.lastName,
         email : this.form.email,
         haslo : this.form.password,
         kontakt : this.form.contact,
         loans: {}
       });
     }).catch(error => {
       console.log("nie powiodła się rejestracja")
     })


  }


  navigate(navName:any){
    this.route.navigateByUrl('/'+navName)
  }
}
