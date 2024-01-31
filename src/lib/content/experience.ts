import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'Remora',
      companyUrl: 'https://remora.com/',
      role: 'Back End Engineer',
      started: 'July 2023',
      upto: 'present',
      tasks: [
        'Developed and maintained scalable Dockerized solutions in Php, Laravel, and React',
        'Developed and maintained design systems that separates service logic, requests',
      ],
    },
    {
      company: 'Broadridge',
      companyUrl: 'https://www.broadridge.com/',
      role: 'Implementation Engineer',
      started: 'February 2023',
      upto: 'May 2023',
      tasks: [
        'Automating the process of Certifyng trading algorithms',
      ],
    },
    {
      company: 'Sonos',
      companyUrl: 'https://www.sonos.com/en-us/home',
      role: 'SDE Intern',
      started: 'June 2022',
      upto: 'August 2022',
      tasks: [
        'Designed, implemented an efficient solution using Rest API, Asynchronous programming, Scheduler in Java, Spring MVC,Spring JPA, Spring Boot, ReactJS along with test cases using Junit, Mockito to accumulate and visualize user data leading to 35 percent increase in efficiency.',
      ],
    },
  ],
};
