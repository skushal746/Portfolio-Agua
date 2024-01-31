import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'Kushal Sharma.',
  tagline: 'I create visually pleasing interfaces & backend for the web.',
  description:
    '🌟 Software Engineer with 5+ years of Experience | Java | Laravel | Full Stack Developer | Docker | AWS',
  specialText: 'Currently available for a job & freelance',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
