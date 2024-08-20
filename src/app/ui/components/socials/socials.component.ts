import { Component } from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent {
  _mSocials = [
    {
      logo: 'fab fa-github',
      link: 'https://www.github.com/amith-patil',
    },
    {
      logo: 'fab fa-linkedin',
      link: 'https://www.linkedin.com/in/amithpatil/',
    },
  ];
}
