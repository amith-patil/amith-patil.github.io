import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  constructor(private el: ElementRef) {}
  el1 = this.el.nativeElement.getElementsByClassName('icon');

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
