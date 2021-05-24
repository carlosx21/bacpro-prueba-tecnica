import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyCustomD]'
})
export class MyCustomDDirective {

  constructor(private elementRef: ElementRef ,
              private renderer: Renderer2) {
                     
   }

   setBgColor(color: string) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      'backgroundColor',
      color
    )
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBgColor('red')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBgColor('purple')
  }
}
