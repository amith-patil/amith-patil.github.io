import { Component } from '@angular/core';

@Component({
  selector: 'app-home-career',
  templateUrl: './home-career.component.html',
  styleUrls: ['./home-career.component.scss'],
})
export class HomeCareerComponent {
  // TODO: Update links
  _mWorks = [
    {
      logo: 'assets/img/Dell_EMC_logo.png',
      name: 'Dell EMC',
      link: 'https://www.dell.com',
    },
    {
      logo: 'assets/img/google_logo.png',
      name: 'Google',
      link: 'https://www.dell.com',
    },
    {
      logo: 'assets/img/google_cloud_logo.png',
      name: 'Google Cloud',
      link: 'https://www.dell.com',
    },
    {
      logo: 'assets/img/chronicle_logo.png',
      name: 'Chronicle Security',
      link: 'https://www.dell.com',
    },
  ];

  _mSkills = [
    {
      logo: 'assets/img/typescript_logo.png',
      name: 'TypeScript',
      link: 'https://www.typescriptlang.org/',
    },
    {
      logo: 'assets/img/angular_logo.png',
      name: 'Angular',
      link: 'https://www.typescriptlang.org/',
    },
    {
      logo: 'assets/img/css_logo.png',
      name: 'CSS',
      link: 'https://www.typescriptlang.org/',
    },
    {
      logo: 'assets/img/html_logo.png',
      name: 'HTML',
      link: 'https://www.typescriptlang.org/',
    },
    {
      logo: 'assets/img/figma_logo.png',
      name: 'Figma',
      link: 'https://www.typescriptlang.org/',
    },
    {
      logo: 'assets/img/tailwind_logo.png',
      name: 'Tailwind',
      link: 'https://www.typescriptlang.org/',
    },
    {
      logo: 'assets/img/Bash_logo.png',
      name: 'Bash',
      link: 'https://www.typescriptlang.org/',
    },
    {
      logo: 'assets/img/python_logo.png',
      name: 'Python',
      link: 'https://www.typescriptlang.org/',
    },
    {
      logo: 'assets/img/go_logo.png',
      name: 'Go',
      link: 'https://www.typescriptlang.org/',
    },
    {
      logo: 'assets/img/google_cloud_logo.png',
      name: 'Google Cloud',
      link: 'https://www.typescriptlang.org/',
    },
  ];
}
