import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StronaGlownaComponent} from './components/strona-glowna/strona-glowna.component';
import {ProfilComponent} from './components/profil/profil.component';
import {RejestracjaComponent} from './components/rejestracja/rejestracja.component';
import {PozyczkaComponent} from "./components/pozyczka/pozyczka.component";
import {SplataComponent} from "./components/splata/splata.component";
const routes: Routes = [
  {path:  '', component:StronaGlownaComponent},
  {path: 'profil', component:ProfilComponent},
  {path: 'rejestracja', component:RejestracjaComponent},
  {path: 'profil/pozyczka', component:PozyczkaComponent},
  {path: 'profil/pozyczka/splata', component:SplataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [StronaGlownaComponent,ProfilComponent]
