import { Component } from '@angular/core';
import {Product} from "../entitie/Product";
import {ProductionService} from "../production.service";
import {Form, FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-inventaire',
  templateUrl: './inventaire.component.html',
  styleUrls: ['./inventaire.component.css']
})
export class InventaireComponent {
  td: Product[] = [];
  findtext: string = "";

  constructor(private service: ProductionService) {

  }

  ngOnInit() {
    this.td = this.service.affihceproduct();
  }






}

