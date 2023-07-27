import { Component } from '@angular/core';

@Component({
  selector: 'app-home-career',
  templateUrl: './home-career.component.html',
  styleUrls: ['./home-career.component.scss'],
})
export class HomeCareerComponent {
  _mProfSkills = [
    {
      title: 'PROTOCOLS',
      skills:
        'HTTP, SMTP,\
      SNMP, Restful APIs, ICAP, SSL,\
      TLS, TCP/IP, UDP.',
    },
    {
      title: 'MANAGEMENT',
      skills:
        'Team player,\
      backlog management, holistic\
      approaches, results driven.',
    },
    {
      title: 'RESEARCH',
      skills:
        'Log analysis and\
      feature research, Customer\
      Advisories, Engineering\
      collaboration, Lab simulations\
      and experimentation.',
    },
    {
      title: 'TROUBLESHOOTING',
      skills:
        'Isilon\
      Administration, InsightIQ,\
      upgrades frameworks,\
      enterprise level networking,\
      Wireshark, Ktrace, Truss, iperf,\
      Linux troubleshooting/\
      administration.',
    },
  ];
  _mExperience = [
    {
      title: 'Technical Support Engineer I',
      company_logo: 'assets/img/Dell_EMC_logo.png',
      years: '2016-2018',
      points: [
        {
          text: 'Assisting customers with high severity cases like data unavailability and access issues.',
        },
        {
          text: 'working with Field engineers remotely during on-site troubleshooting',
        },
        {
          text: 'Cluster networking, setting up DNS records and Isilon SmartConnect configurations, Microsoft Active Directory Management.',
        },
      ],
    },
    {
      title: 'Senior Technical Support Engineer',
      company_logo: 'assets/img/Dell_EMC_logo.png',
      years: '2018-2021',
      points: [
        {
          text: 'Level 2 engineer for the EMEA region for the administration related skills (Upgrades, HTTP, ICAP, SMTP, SNMP, Restful APIs, InsightIQ) with my secondary skill being Networking',
        },
        {
          text: 'Working on escalations from L1 TSE and opening Jira Tickets with In-Market Engineering.',
        },
        {
          text: 'Writing KB articles based on new bugs/issues found in the field (currently published 11 KB articles on the Dell Support site.)',
        },
        {
          text: 'Providing inter departmental training programs to Legacy Dell Employees, along with new hires to the team.',
        },
        {
          text: 'Lead a mentorship program to rapidly develop skills of new hires and global team mates.',
        },
      ],
    },
    {
      title: 'Solutions Engineer',
      company_logo: 'assets/img/google_logo.png',
      years: '2021-Present',
      points: [
        {
          text: 'Level 2 engineer for the EMEA region for the administration related skills (Upgrades, HTTP, ICAP, SMTP, SNMP, Restful APIs, InsightIQ) with my secondary skill being Networking',
        },
        {
          text: 'Working on escalations from L1 TSE and opening Jira Tickets with In-Market Engineering.',
        },
        {
          text: 'Writing KB articles based on new bugs/issues found in the field (currently published 11 KB articles on the Dell Support site.)',
        },
        {
          text: 'Providing inter departmental training programs to Legacy Dell Employees, along with new hires to the team.',
        },
        {
          text: 'Lead a mentorship program to rapidly develop skills of new hires and global team mates.',
        },
      ],
    },
  ];
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
