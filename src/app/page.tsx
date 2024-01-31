import {
  About,
  Contact,
  Experience,
  //FeaturedProjects,
  Hero,
  Layout,
  //Projects,
  Skills,
} from '@/containers';

import type { NextPage } from 'next';

/**
 * TODO: Create separate page for all the projects with filters (vercel | netlify | github api for automation)
 * TODO: Switch to next13 app dir feature, when lottie files start working in app dir
 * TODO: Try test cases
 * Removing the following sections from below and add later : FeaturedProjects, Projects. 
 */

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
