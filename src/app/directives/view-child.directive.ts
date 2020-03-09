import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appViewChild]'
})
export class ViewChildDirective {

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
  }

  onMouseOver(className) {
    this.renderer.addClass(this.elementRef.nativeElement, className);
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', '2px dashed olive');
  }

  onMouseLeave(className) {
    this.renderer.removeClass(this.elementRef.nativeElement, className);
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', 'none');
  }
}
