import React from "react";
import bgimage from "./image.svg";
const Sponsors = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-black p-10 bg-opacity-85 text-white-off "
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <div
        className="w-full h-full flex flex-col  items-center mt-20"
        name="prizes"
      >
        <p className=" font-pixeboy text-5xl lg:text-8xl relative my-72 uppercase text-shadow">
          prizes
        </p>
        <p className="text-2xl lg:text-5xl relative my-20 uppercase ">
          Coming Soon
        </p>
      </div>
      <div
        className="w-full h-full flex flex-col  items-center "
        name="sponsors"
      >
        <p className=" font-pixeboy text-5xl lg:text-8xl relative my-72 uppercase text-shadow">
          Sponsors
        </p>
        <p className="text-2xl lg:text-5xl relative my-20 uppercase">
          Coming Soon
        </p>
      </div>
    </div>
  );
};

export default Sponsors;
