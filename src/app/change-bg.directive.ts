import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBg]'
})
export class ChangeBgDirective {
  @Input() isCorrent: boolean = false;
  constructor(private el: ElementRef, private render: Renderer2) { }
  @HostListener('click') answer() {
    if (this.isCorrent) {
      this.render.setStyle(this.el.nativeElement, 'background', 'green');
      this.render.setStyle(this.el.nativeElement, 'color', '#fff');
      this.render.setStyle(this.el.nativeElement, 'border', '2px solid gray')
    } else {
      this.render.setStyle(this.el.nativeElement, 'background', 'red');
      this.render.setStyle(this.el.nativeElement, 'color', '#fff');
      this.render.setStyle(this.el.nativeElement, 'border', '2px solid black');
    }

  }
}
