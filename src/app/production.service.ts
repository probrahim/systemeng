import { Injectable } from '@angular/core';
import {Product} from "./entitie/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductionService {
  ld:Array<Product>;

  constructor() {
    this.ld = new Array<Product>(
      {id:1,name:"hiba",category:"type-A",price:120,stock:30},
      {id:2,name:"ibrahim",category:"type-B",price:350,stock:100},
      {id:3,name:"hassan",category:"type-c",price:565,stock:300},
    );
  }

  affihceproduct(){
    return this.ld;
  }
  addprodut(product: Product):void{
    this.ld.push(product);
  }
}
