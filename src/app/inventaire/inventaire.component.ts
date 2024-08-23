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
  proc:FormGroup;

  constructor(private service: ProductionService, private form: FormBuilder) {
    this.proc = this.form.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      stock: ['', Validators.required]
    });
  }
  ajouterproduit(){
    if(this.proc.valid){
      const valu:Product = this.proc.value;
      valu.id = this.td.length +1;
      this.service.addprodut(valu);
      this.proc.reset();

    }
  }

  ngOnInit() {
    this.td = this.service.affihceproduct();
  }




}

