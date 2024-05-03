import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCapitalize]',
  standalone:true
})
export class CapitalizeDirective implements OnInit {
  constructor(private el: ElementRef) {
  }
  ngOnInit() {
    const nativeElement = this.el.nativeElement;
    if (nativeElement.innerText) {
      nativeElement.innerText = nativeElement.innerText.charAt(0).toUpperCase() + nativeElement.innerText.slice(1);
    }
  }
}
