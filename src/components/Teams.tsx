// import Image from "next/image";
// import React from "react";

// const Teams = () => {
//   return (
//     <div className="flex justify-center items-center gap-10 p-14">
//       <Image
//         src="/teams.png"
//         width={630}
//         height={180}
//         alt="img"
//         className="rounded-lg"
//       />
//       <div className=" ">
//         <p className="text-justify">
//         Entrepreneurs are the visionaries and drivers. They are motivational & passionate for innovation to take risks & responsible for setting the direction of the team & ensure that everyone is aligned on the goals. Researchers are the brains. They are responsible for gathering & analyzing information to develop new ideas, solutions & also responsible for testing and validating the prototypes to ensure that they meet the needs of the users. Socializers are the people to people. They are responsible for building relationships with potential customers, partners, and investors & responsible for promoting the team's work and generating excitement about the products. Investors are the financiers. They provide the capital that the team needs to develop and launch its products. Investors also provide valuable guidance and support to the team. Software developers are the builders of the Products & Team. Responsible for End to End implementations, motivation & improving the performance of the team's products.
//         </p>
//       </div>

//     </div>
//   );
// };

// export default Teams;



import Image from "next/image";
import React from "react";

const Teams = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10 bg-gray-100 p-12">
      <Image
        src="/teams.png"
        width={630}
        height={180}
        alt="img"
        className="rounded-lg"
      />
      <div className="w-full flex flex-col gap-8 lg:w-auto">
        <h1 className="text-6xl font-bold text-red-400">Teams</h1>
        <p className="text-justify text-gray-950">
          Entrepreneurs are the visionaries and drivers. They are motivational & passionate for innovation to take risks & responsible for setting the direction of the team & ensure that everyone is aligned on the goals. Researchers are the brains. They are responsible for gathering & analyzing information to develop new ideas, solutions & also responsible for testing and validating the prototypes to ensure that they meet the needs of the users. Socializers are the people to people. They are responsible for building relationships with potential customers, partners, and investors & responsible for promoting the team's work and generating excitement about the products. Investors are the financiers. They provide the capital that the team needs to develop and launch its products. Investors also provide valuable guidance and support to the team. Software developers are the builders of the Products & Team. Responsible for End to End implementations, motivation & improving the performance of the team's products.
        </p>
      </div>
    </div>
  );
};

export default Teams;
