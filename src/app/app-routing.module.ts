import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {TACHEComponent} from "./tache/tache.component";
import {InventaireComponent} from "./inventaire/inventaire.component";

const routes: Routes = [
  {path : "", component : AppComponent, children:[
     {path: "tp", component :InventaireComponent },
      {path:"tp1" ,component: TACHEComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
