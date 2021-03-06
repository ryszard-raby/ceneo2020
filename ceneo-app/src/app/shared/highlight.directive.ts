import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[ceHighlight]',
  exportAs: 'ceHighlight'
})
export class HighlightDirective {
  @Input() ceHighlight;
  @Input() ceHighlightSetBorder: boolean
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click') handleClick() {
    this.setHighlight()
  }

  setHighlight() {
    this.renderer.addClass(this.el.nativeElement, this.ceHighlight  || 'highlight' );
  }

}
