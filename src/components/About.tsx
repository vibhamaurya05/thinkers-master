// import React from 'react'
// import Image from 'next/image';
// const About = () => {
//     return (
// 		<div className=" mt-3 mb-10 py-10 px-1 md:px-14" id="about">
// 			<h1 className="text-5xl md:text-6xl font-semibold text-center ">
// 				{" "}
// 				<span className="text-purple">About</span> Us
// 			</h1>

// 			<div className="flex justify-evenly items-center   ">
// 				<Image src="/ThinkersLogo.jpg" alt="me" width={400} height={400} className=" md:block" />
// 				<div className="px-4 md:px-10 py-20  md:py-28">
// 					<h1 className="text-xl font-semibold ">We Thinkers</h1>
// 					<p className="text-slate-400 mt-3">
// 						{" "}
// 						A dedicated and passionate developer on a journey to master Full Stack Web Development. With a solid foundation in Computer Applications, I&apos;m continuously expanding
// 						my skill set to include both frontend and backend technologies.My focus is on designing and developing websites and applications that integrate functionality
// 						effortlessly.
// 					</p>
// 					<h2 className="mt-5 text-lg font-medium text-purple mb-5">Working to be better than yesterday!</h2>

// 					{/* <div className="w-fit">
// 						<Link href="#project">
// 							<MagicButton title="View Projects" icon={<FaArrowDown />} position="right" />
// 						</Link>
// 					</div> */}
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default About


import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

const About = () => {
  return (
    <div className="mt-3 mb-10 py-10 px-4 md:px-14" id="about">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center">
        <span className="text-green-600">About</span> Us
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12 px-[5rem] mt-6">
        {/* <div className="flex justify-center mb-6 md:mb-0">
          <Image
            src="/ThinkersLogo.jpg"
            alt="Thinkers Logo"
            width={400}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div> */}
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
