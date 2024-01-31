import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const projectsSection: ProjectsSectionType = {
  title: 'my projects',
  projects: [
    {
      id: getId(),
      name: 'Feasta',
      url: 'https://www.feasta.co.uk/home',
      repo: '',
      img: 'https://user-images.githubusercontent.com/68834718/265277125-da2a6e07-7cf6-411c-b55f-94e372aa6dc8.png',
      year: 2023,
      tags: ['CSS Animations', 'Sass'],
    },
  ],
};
