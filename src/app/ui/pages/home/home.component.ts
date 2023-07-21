import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  Pages = pages;
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
