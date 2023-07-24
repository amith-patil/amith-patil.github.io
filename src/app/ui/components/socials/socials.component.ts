import { Component } from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent {
  _mSocials = [
    {
      logo: 'fab fa-twitter',
      link: 'https://www.twitter.com',
      delay: '100',
    },
    {
      logo: 'fab fa-github',
      link: 'https://www.github.com',
      delay: '300',
    },
    {
      logo: 'fa-brands fa-medium',
      link: 'https://www.medium.com',
      delay: '500',
    },
    {
      logo: 'fa-brands fa-dribbble',
      link: 'https://www.dribbble.com',
      delay: '700',
    },
    {
      logo: 'fab fa-linkedin',
      link: 'https://www.linkedin.com',
      delay: '1000',
    },
  ];
}
