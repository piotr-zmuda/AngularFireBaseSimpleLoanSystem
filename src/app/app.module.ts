import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from "@angular/fire/compat";
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RejestracjaComponent } from './components/rejestracja/rejestracja.component';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { initializeApp } from "firebase/app";
import {AngularFireDatabase, AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {enviroment} from './env';
import { PozyczkaComponent } from './components/pozyczka/pozyczka.component';
import { ModalBasicComponent } from './components/modal-basic/modal-basic.component';
import { SplataComponent } from './components/splata/splata.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    RejestracjaComponent,
    PozyczkaComponent,
    ModalBasicComponent,
    SplataComponent
  ],
  imports: [
    AngularFireModule.initializeApp(enviroment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
