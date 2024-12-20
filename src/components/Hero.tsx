
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";


const Hero = () => {
  return (
    <section id="hero">
      
      
      <div className="flex flex-col md:flex-row justify-center items-center bg-black gap-8 md:gap-20 h-full w-full  py-32 px-4 md:px-8 text-center ">
        <div className="flex flex-col justify-evenly h-auto md:h-[55vh] w-full md:w-[35vw] text-center md:text-center">
          <h1 className="text-3xl md:text-5xl text-white">
            <span className="text-[red]">Thinkers</span><span className="text-[blue] text-4xl"> Corporation's vision,</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-white mt-4 md:mt-0">
            focusing on empowering creativity, collaboration, and impactful
            contributions to society
          </p>
          <p className="text-black text-justify mt-4 md:mt-0"></p>

          <div className="flex flex-col justify-center md:justify-start gap-3 mt-4 md:mt-0 text-white">
            <p>CIN:U62099UP2023PTC189390</p>
            <p>DIPP:149566</p>
          </div>

          <div className="flex justify-center md:justify-center gap-3 mt-4 md:mt-0">
            <Link href="#contact">
              <Button className="bg-[#a9ff47] text-black font-semibold hover:bg-[yellow]">
                Register
              </Button>
            </Link>
            <Link href="#projects">
              <Button className="bg-transparent border-2 border-[#a9ff47] text-[#476328]">
                Mail Us
              </Button>
            </Link>
          </div>
        </div>
        <div className="h-auto md:h-[60vh] w-full md:w-[43vw] flex justify-center md:justify-end ">
          
          <Image
            src="/ThinkersLogo.jpg"
            width={400}
            height={400}
            alt="logo"
            style={{ borderRadius: "10px", boxShadow: "10px" }}
          />
        </div>
      </div>
      
      
    </section>
  );
};

export default Hero;


// import React from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";

// const Hero = () => {
//   return (
//     <section id="hero">
//       <div className="flex flex-col w-full md:flex-row justify-center items-center bg-black gap-8 md:gap-20 py-32 px-4 md:px-8 text-center">
//         <div className="flex flex-col justify-evenly h-auto md:h-[55vh] w-full md:w-[35vw] text-center">
//           <h1 className="text-3xl md:text-5xl text-white">
//             <span className="text-[red]">Thinkers</span>
//             <span className="text-[blue] text-4xl"> Corporation's vision,</span>
//           </h1>

//           <p className="text-2xl md:text-3xl text-white mt-4 md:mt-0">
//             focusing on empowering creativity, collaboration, and impactful
//             contributions to society
//           </p>
//           <p className="text-black text-justify mt-4 md:mt-0"></p>

//           <div className="flex flex-col justify-center md:justify-start gap-3 mt-4 md:mt-0 text-white">
//             <p>CIN:U62099UP2023PTC189390</p>
//             <p>DIPP:149566</p>
//           </div>

//           <div className="flex flex-col md:flex-row justify-center md:justify-start gap-3 mt-4 md:mt-0">
//             <Link href="#contact">
//               <Button className="bg-[#a9ff47] text-black font-semibold hover:bg-[yellow]">
//                 Register
//               </Button>
//             </Link>
//             <Link href="#projects">
//               <Button className="bg-transparent border-2 border-[#a9ff47] text-[#476328]">
//                 Mail Us
//               </Button>
//             </Link>
//           </div>
//         </div>
//         <div className="h-auto md:h-[60vh] w-full md:w-[43vw] flex justify-center md:justify-end mt-8 md:mt-0">
//           <Image
//             src="/ThinkersLogo.jpg"
//             width={400}
//             height={400}
//             alt="logo"
//             style={{ borderRadius: "10px", boxShadow: "10px" }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
