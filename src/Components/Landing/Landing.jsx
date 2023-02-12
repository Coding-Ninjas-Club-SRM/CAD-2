import React from "react";

import Lottie from "react-lottie";
import animationData from "./assets/mouse-scrolling.json";

import bg from "../../Assets/images/landing_bg.svg";

const Landing = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="h-screen bg-gradient-to-b from-[#2A0637] to-black via-[#0D0221]">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <img
          src={bg}
          alt=""
          className="h-[564px] object-cover w-[1147px] absolute -z-0"
        />
        <div className="font-pixeboy flex flex-col justify-center items-center z-10">
          <h3 className="text-white-off text-2xl sm:text-3xl md:text-4xl">
            AUG12 - AUG13
          </h3>
          <h1 className="text-[#8758FF] text-10xl sm:text-11xl md:text-12xl text-shadow">
            CAD
          </h1>
          <div className="text-white-off flex flex-row justify-around items-center w-full text-2xl sm:text-3xl md:text-4xl text-shadow-landingSubtitle ">
            <h3>CONTROL</h3>
            <h3>ALT</h3>
            <h3>DELETE</h3>
          </div>
        </div>
        <div className="font-sans text-white-off mt-24 hover:cursor-pointer hover:scale-110 hover:bg-[#8758FF] duration-200 z-10">
          <p className="py-2 px-9 border border-[#8758FF] text-sm sm:text-base">
            Applications Open!
          </p>
        </div>
        <div className="h-20 absolute bottom-6">
          <Lottie options={defaultOptions} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
