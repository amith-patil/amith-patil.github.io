import { Component, OnInit, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('300ms ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  Pages = pages;
  offsetFlag = false;

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event']) getScrollHeight(event: any) {
    if (window.scrollY > 200) {
      this.offsetFlag = true;
    } else this.offsetFlag = false;
  }
}

export interface Page {
  section_name: string;
}

export const pages = [
  {
    section_name: 'home',
  },
  {
    section_name: 'about',
  },
  {
    section_name: 'career',
  },
  {
    section_name: 'contact',
  },
];
