import React from "react";

import bg from "../../Assets/images/landing_bg.svg";

const Landing = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-[#2A0637] to-black via-[#0D0221]">
      <div className="w-full h-full flex justify-center items-center">
        <img
          src={bg}
          alt=""
          className="h-[564px] w-[1147px] absolute -z-0 mt-28"
        />
        <div className="font-pixeboy flex flex-col justify-center items-center">
          <h3 className="text-white-off text-3xl">AUG12 - AUG13</h3>
          <h1 className="text-[#8758FF] text-10xl text-shadow">CAD</h1>
          <div className="text-white-off flex flex-row justify-around items-center w-full text-4xl text-shadow-landingSubtitle">
            <h3>CONTROL</h3>
            <h3>ALT</h3>
            <h3>DELETE</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
