import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[bmZoom]'
})
export class ZoomDirective {

  @HostBinding('class.small') isZoomed: boolean;
  @HostListener('mouseenter') onmouseenter() {
    this.isZoomed = true;
  }
  @HostListener('mouseleave') onmouseleave() {
    this.isZoomed = false;
  }

}
