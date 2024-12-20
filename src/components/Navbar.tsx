// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <div className="fixed w-full top-0 bg-[#ffffff] shadow-2xl p-3 text-black z-50">
//       <div className="flex justify-between items-center sm:px-16 md:px-20">
//         {/* Responsive Logo */}
//         {/* <h1 className='text-4xl font-semibold hidden sm:block  shadow-2xl'>THINKERS</h1> */}
//         <Image
//           src="/ThinkersLogo.jpg"
//           width={60}
//           height={60}
//           alt="logo"
//         />
//         {/* <h1 className="text-3xl font-semibold sm:hidden">THINKERS</h1> */}

//         {/* Menu Button for Small Screens */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="focus:outline-none"
//           >
//             <div className="space-y-2">
//               <span
//                 className={`block w-8 h-1 bg-white transform transition-transform ${
//                   menuOpen ? "rotate-45 translate-y-2" : ""
//                 }`}
//               ></span>
//               <span
//                 className={`block w-8 h-1 bg-white transform transition-transform ${
//                   menuOpen ? "opacity-0" : ""
//                 }`}
//               ></span>
//               <span
//                 className={`block w-8 h-1 bg-white transform transition-transform ${
//                   menuOpen ? "-rotate-45 -translate-y-2" : ""
//                 }`}
//               ></span>
//             </div>
//           </button>
//         </div>

//         {/* Navigation for Medium Screens */}
//         <nav className="hidden md:flex">
//           <ul className="flex gap-8 text-xl font-semibold">
//             <li>
//               <Link href="#home" className="hover:text-cyan-400">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="#trigger" className="hover:text-cyan-400">
//                 Trigger
//               </Link>
//             </li>
//             <li>
//               <Link href="#socializer" className="hover:text-cyan-400">
//                 Socializer
//               </Link>
//             </li>
//             <li>
//               <Link href="#researcher" className="hover:text-cyan-400">
//                 Researcher
//               </Link>
//             </li>
//             <li>
//               <Link href="#investor" className="hover:text-cyan-400">
//                 Investor
//               </Link>
//             </li>
//             <li>
//               <Link href="#events" className="hover:text-cyan-400">
//                 Events
//               </Link>
//             </li>
//             <li>
//               <Link href="#prodeuct_service" className="hover:text-cyan-400">
//                 Product & Service
//               </Link>
//             </li>
//             <li>
//               <Link href="#teams" className="hover:text-cyan-400">
//                 Teams
//               </Link>
//             </li>
//             <li>
//               <Link href="#registration" className="hover:text-cyan-400">
//                 Registeration
//               </Link>
//             </li>
//             {/* <li><Link href="#qa" className="hover:text-cyan-400">Q&A</Link></li> */}
//           </ul>
//         </nav>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <nav className="md:hidden mt-4">
//           <ul className="flex flex-col gap-4 text-medium font-semibold">
//             <li>
//               <Link
//                 href="#home"
//                 className="hover:text-blue-500"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#trigger"
//                 className="hover:text-blue-500"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Trigger
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#socializer"
//                 className="hover:text-blue-500"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Socializer
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#researcher"
//                 className="hover:text-blue-500"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Researcher
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#invester"
//                 className="hover:text-blue-500"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Invester
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#events"
//                 className="hover:text-blue-500"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Events
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#product_service"
//                 className="hover:text-blue-500"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Product & Service
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#teams"
//                 className="hover:text-blue-500"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Teams
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#registration"
//                 className="hover:text-blue-500"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Registration
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#qa"
//                 className="hover:text-blue-500"
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Q&A
//               </Link>
//             </li>
//           </ul>
//         </nav>
//       )}
//     </div>
//   );
// }

// export default Navbar;



"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed w-full top-0 bg-[#ffffff] shadow-2xl p-3 text-black z-50">
      <div className="flex justify-between items-center px-4 sm:px-8 md:px-20">
        {/* Responsive Logo */}
        <Image
          src="/ThinkersLogo.jpg"
          width={60}
          height={60}
          alt="logo"
        />

        {/* Menu Button for Small Screens */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
          >
            <div className="space-y-2">
              <span
                className={`block w-8 h-1 bg-black transform transition-transform ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block w-8 h-1 bg-black transform transition-transform ${
                  menuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-8 h-1 bg-black transform transition-transform ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Navigation for Medium Screens */}
        <nav className="hidden md:flex">
          <ul className="flex gap-6 text-base font-semibold">
            <li>
              <Link href="#home" className="hover:text-cyan-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="#trigger" className="hover:text-cyan-400">
                Trigger
              </Link>
            </li>
            <li>
              <Link href="#socializer" className="hover:text-cyan-400">
                Socializer
              </Link>
            </li>
            <li>
              <Link href="#researcher" className="hover:text-cyan-400">
                Researcher
              </Link>
            </li>
            <li>
              <Link href="#investor" className="hover:text-cyan-400">
                Investor
              </Link>
            </li>
            <li>
              <Link href="#events" className="hover:text-cyan-400">
                Events
              </Link>
            </li>
            <li>
              <Link href="#product_service" className="hover:text-cyan-400">
                Product & Service
              </Link>
            </li>
            <li>
              <Link href="#teams" className="hover:text-cyan-400">
                Teams
              </Link>
            </li>
            <li>
              <Link href="#registration" className="hover:text-cyan-400">
                Registration
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li>
              <Link
                href="#home"
                className="hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#trigger"
                className="hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                Trigger
              </Link>
            </li>
            <li>
              <Link
                href="#socializer"
                className="hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                Socializer
              </Link>
            </li>
            <li>
              <Link
                href="#researcher"
                className="hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                Researcher
              </Link>
            </li>
            <li>
              <Link
                href="#investor"
                className="hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                Investor
              </Link>
            </li>
            <li>
              <Link
                href="#events"
                className="hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                href="#product_service"
                className="hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                Product & Service
              </Link>
            </li>
            <li>
              <Link
                href="#teams"
                className="hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                Teams
              </Link>
            </li>
            <li>
              <Link
                href="#registration"
                className="hover:text-blue-500"
                onClick={() => setMenuOpen(false)}
              >
                Registration
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
