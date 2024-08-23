import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TACHEComponent } from './tache/tache.component';
import { InventaireComponent } from './inventaire/inventaire.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FilterPipe } from './filter.pipe';
import { HighlightDirectiveDirective } from './highlight-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    InventaireComponent,
    FilterPipe,
    HighlightDirectiveDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    TACHEComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
