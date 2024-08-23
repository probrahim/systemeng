import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "./entitie/Product";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[], findtext: string){
    if (!products || !findtext) {
      return products; // Si aucun produit ou texte n'est fourni, renvoie tous les produits
    }

    return products.filter(product =>
      product.name.toLowerCase().includes(findtext.toLowerCase()));
  }
}
