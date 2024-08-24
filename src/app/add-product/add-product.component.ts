import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Product} from "../entitie/Product";
import {Router} from "@angular/router";
import {ProductionService} from "../production.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  proc: FormGroup;
  tl: Product[] =[];

  constructor(
    private form: FormBuilder,
    private service: ProductionService,
    private router: Router
  ) {
    this.proc = this.form.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      category: ['', Validators.required],
      stock: ['', Validators.required]
    });
  }

  ajouterproduit() {
    if(this.proc.valid){
      const valu:Product = this.proc.value;
      valu.id = this.tl.length +1;
      this.service.addprodut(valu);
      this.proc.reset();
      this.router.navigate(['/tp'])

    }
  }

}
