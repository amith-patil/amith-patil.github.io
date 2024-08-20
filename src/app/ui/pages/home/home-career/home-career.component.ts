import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import {
  Component,
  ElementRef,
  OnInit,
  HostListener,
  HostBinding,
  SimpleChanges,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-home-career',
  templateUrl: './home-career.component.html',
  styleUrls: ['./home-career.component.scss'],
})
export class HomeCareerComponent {
  isExpanded: boolean[] = [];

  expand(i: number) {
    this.isExpanded[i] = !this.isExpanded[i];
  }

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
      title: 'Solutions Engineer',
      company_logo: 'assets/img/google_logo.png',
      years: '2021-Present',
      points: [
        {
          text: 'Hired as a Level 3 engineer for the APAC/EMEA region for Google Chronicle. Worked primarily with Cybersecurity Clients with their Onboarding, Feature bugs and troubleshooting SIEM related issues.',
        },
        {
          text: 'Built internal tools to automate customer case analysis, Chat bots for notification of incoming and escalated cases as well as code fixes.Developed skills in writing Code in Go, Typescript,and Python. Upgraded my code readability in Java, Go, HTML,CSS Typescript and Protobufs.',
        },
        {
          text: 'Promoted to Level 4 Engineer in 2023, my role expanded to create tools to improve Engineer efficiency. This included automations and bots to improve Case Resolution time, assist Engineers in developing and creating playbooks for common issues.',
        },
        {
          text: 'Manage a team of frontline Engineers, work predominantly on handling escalations, reducing response time and resolution time for cases, meeting with leadership teams from Engineering and Support to improve core engineering workloads for bugfixes.',
        },
        {
          text: 'work with multiple Engineering teams on new feature launches, specifically on Designing supportability and Documentation of new features for a improved customer experience. Managed preview features feedbacks from Customers, Partner Engineering and Customer Engineering teams and help Product Management with their PRDs and GA feature launches.'
          
        }
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
      link: 'https://angular.io/',
    },
    {
      logo: 'assets/img/css_logo.png',
      name: 'CSS',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      logo: 'assets/img/html_logo.png',
      name: 'HTML',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      logo: 'assets/img/figma_logo.png',
      name: 'Figma',
      link: 'https://www.figma.com/',
    },
    {
      logo: 'assets/img/tailwind_logo.png',
      name: 'Tailwind',
      link: 'https://www.tailwindcss.com/',
    },
    {
      logo: 'assets/img/Bash_logo.png',
      name: 'Bash',
      link: 'https://www.gnu.org/',
    },
    {
      logo: 'assets/img/python_logo.png',
      name: 'Python',
      link: 'https://www.python.org/',
    },
    {
      logo: 'assets/img/go_logo.png',
      name: 'Go',
      link: 'https://go.dev/',
    },
    {
      logo: 'assets/img/google_cloud_logo.png',
      name: 'Google Cloud',
      link: 'https://cloud.google.com/',
    },
    {
      logo: 'assets/img/chronicle_logo.png',
      name: 'Chronicle',
      link: 'https://chronicle.security',
    },
  ];
}
