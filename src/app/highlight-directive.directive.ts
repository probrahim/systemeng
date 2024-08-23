import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})
export class HighlightDirectiveDirective implements OnInit {

  @Input() tsf: number = 0;
  constructor(private ts: ElementRef) {}
  ngOnInit() {
    this.colorchange();
  }
  private  colorchange(){
    if ( this.tsf > 30){
      this.ts.nativeElement.style.backgroundColor = 'green';
    }
    else {
      this.ts.nativeElement.style.backgroundColor = 'red';
    }
  }

}
