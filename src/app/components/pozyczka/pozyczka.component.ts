import { Component } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {getDatabase, ref, set, push} from "@angular/fire/database";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: 'app-pozyczka',
  templateUrl: './pozyczka.component.html',
  styleUrls: ['./pozyczka.component.scss']
})
export class PozyczkaComponent {
  uid;
  user;
  kwota;
  closeResult = '';
  raty;
  howManyLoans;
  showModal:boolean;
  constructor(private dataBase:AngularFireDatabase, private auth:AngularFireAuth,private modalService: NgbModal){

  }
  ngOnInit(){
    this.auth.user.subscribe(res=>{
      this.uid=res.uid;
      this.dataBase.list('/Account').valueChanges().subscribe(res=>{

      })

    })
    this.showModal=false;
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  confirmation(){
    this.showModal=true;
  }
  getLoan()
  {
    const db = getDatabase();
    var rateCost=this.kwota/this.raty;
    const key =push(ref(db, '/Account/'+this.uid+'/loans/')).key;
    for(let i=0;i<this.raty;i++)
    {
      push(ref(db, '/Account/'+this.uid+'/loans/'+key), {
        kwota:rateCost,
        paid:false
      })
    }

  }

}
