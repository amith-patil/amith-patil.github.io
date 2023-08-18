import { Component, OnInit, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home-about',
  templateUrl: './home-about.component.html',
  styleUrls: ['./home-about.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),
      transition('void => *', [
        style({ opacity: 0, transform: 'translateX(-10%)' }),
        animate(400),
      ]),
      transition('* => void', [
        animate(400, style({ opacity: 0, transform: 'translateX(10%)' })),
      ]),
    ]),
  ],
})
export class HomeAboutComponent implements OnInit {
  title = false;
  image = false;

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event']) getScrollHeight(event: any) {
    if (window.scrollY > 400) {
      this.title = true;
    } else this.title = false;
    if (window.scrollY > 600) {
      this.image = true;
    } else this.image = false;
  }
}
