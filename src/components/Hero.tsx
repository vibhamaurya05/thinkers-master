"use client";
import React from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

import { motion } from "framer-motion";
import { ImagesSlider } from "@/components/ui/images-slider";

const Hero = () => {
  // return (
  //   <section id="hero">

  //     <div className="flex flex-col md:flex-row justify-center items-center bg-black gap-8 md:gap-20 h-full w-full  py-32 px-4 md:px-8 text-center ">
  //       <div className="flex flex-col justify-evenly h-auto md:h-[55vh] w-full md:w-[35vw] text-center md:text-center">
  //         <h1 className="text-3xl md:text-5xl text-white">
  //           <span className="text-[red]">Thinkers</span><span className="text-[blue] text-4xl"> Corporation's vision,</span>
  //         </h1>

  //         <p className="text-2xl md:text-3xl text-white mt-4 md:mt-0">
  //           focusing on empowering creativity, collaboration, and impactful
  //           contributions to society
  //         </p>
  //         <p className="text-black text-justify mt-4 md:mt-0"></p>

  //         <div className="flex flex-col justify-center md:justify-start gap-3 mt-4 md:mt-0 text-white">
  //           <p>CIN:U62099UP2023PTC189390</p>
  //           <p>DIPP:149566</p>
  //         </div>

  //         <div className="flex justify-center md:justify-center gap-3 mt-4 md:mt-0">
  //           <Link href="#contact">
  //             <Button className="bg-[#a9ff47] text-black font-semibold hover:bg-[yellow]">
  //               Register
  //             </Button>
  //           </Link>
  //           <Link href="#projects">
  //             <Button className="bg-transparent border-2 border-[#a9ff47] text-[#476328]">
  //               Mail Us
  //             </Button>
  //           </Link>
  //         </div>
  //       </div>
  //       <div className="h-auto md:h-[60vh] w-full md:w-[43vw] flex justify-center md:justify-end ">

  //         <Image
  //           src="/ThinkersLogo.jpg"
  //           width={400}
  //           height={400}
  //           alt="logo"
  //           style={{ borderRadius: "10px", boxShadow: "10px" }}
  //         />
  //       </div>
  //     </div>

  //   </section>
  // );

  const images = [
    "https://images.unsplash.com/photo-1711030267518-365be58693d7?q=80&w=1454&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1700936655679-83f4b37d7d74?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 ">
          {/* The hero section slideshow <br /> nobody asked for */}
          Thinkers Corporation PVT LTD
          <br />
          <span className="text-2xl">focusing on empowering creativity, collaboration, and impactful contributions to society</span><br/>                   
          <span className="text-lg">CIN:U62099UP2023PTC189390</span><br/>          
          <span className="text-lg">DIPP:149566</span>
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-[red] border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Mail Us →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
};

export default Hero;
