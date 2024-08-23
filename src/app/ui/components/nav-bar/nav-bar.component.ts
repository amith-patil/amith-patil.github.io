import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      state("true", style({ })),
      state("false", style({ opacity: 0, margin: 0, width: 0})),
      transition("* => *", animate("300ms ease-in-out"))
    ]),
  ]
})
export class NavBarComponent {
  constructor(private el: ElementRef) { }
  el1 = this.el.nativeElement.getElementsByClassName('icon');
  offsetFlag = true;

  @HostListener('window:scroll', ['$event']) getScrollHeight(event: any) {
    if (window.scrollY > 200) {
      this.offsetFlag = false;
    } else this.offsetFlag = true;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.offsetFlag = true;
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    if (window.scrollY > 200) {
      this.offsetFlag = false;
    }
  }
  onClick() {
    if (document.documentElement.classList.contains('dark')) {
      this.el1[0].classList.remove('fa-sun');
      this.el1[0].classList.add('fa-moon');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      this.el1[0].classList.remove('fa-moon');
      this.el1[0].classList.add('fa-sun');
    }
  }
}
