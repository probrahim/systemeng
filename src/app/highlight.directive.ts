import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight: number = 0; // Reçoit la valeur du stock

  constructor(private el: ElementRef) {
    this.updateBackgroundColor(); // Appelle la méthode pour mettre à jour la couleur de fond lors de la création
  }

  private updateBackgroundColor() {
    // Change la couleur de fond en fonction de la valeur du stock
    this.el.nativeElement.style.backgroundColor = this.appHighlight > 0 ? '' : '';
  }

}
