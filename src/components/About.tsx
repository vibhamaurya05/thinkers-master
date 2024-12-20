import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

const About = () => {
  return (
    <div className="  py-10 px-4 md:px-14" id="about">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center">
        <span className="text-green-600">About</span> Us
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12 px-[5rem] mt-6">
        
        <Image
            src="/ThinkersLogo.jpg"
            alt="Thinkers Logo"
            width={400}
            height={400}
            className="hidden md:block rounded-lg shadow-md"
          />

        <div className="flex flex-col px-4 md:px-10 py-6 md:py-14 text-justify md:text-justify">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-600">We Thinkers</h2>
          <p className="text-slate-600 mt-3 text-base md:text-lg">
          Thinkers Corporation is developing a platform that will enable users to socialize through events, researchers to collaborate on research and projects, and investors to find and invest in promising projects.
Thinkers Platform is a unique Indian platform that solves many relevant economic and educational issues by empowering thinkers to invent, research, and socialize with peers of similar interests and expertise. Using technology, we shall provide users with tools to enhance their creativity, capability, and productivity, enabling them to contribute to their communities and our nation. Thinkers will serve as a platform for users to implement their ideas and use their minds to their fullest potential.
Why do we require registration?
To register the Thinkers platform and begin socializing, please fill out the pre-registration form below.
          </p>
          <Button variant="destructive" className="md:w-[12vw] mt-5 mb-5">
            Register Here
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
