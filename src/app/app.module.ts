import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TACHEComponent } from './tache/tache.component';
import { InventaireComponent } from './inventaire/inventaire.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FilterPipe } from './filter.pipe';
import { AddProductComponent } from './add-product/add-product.component';
import { HighlightDirective } from './highlight.directive';
import { FULLComponent } from './full/full.component';

@NgModule({
  declarations: [
    AppComponent,
    InventaireComponent,
    FilterPipe,
    AddProductComponent,
    HighlightDirective,
    FULLComponent,

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
