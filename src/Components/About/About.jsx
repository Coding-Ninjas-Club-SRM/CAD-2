import React from "react";

import bg from "./assets/background.png";
import hearts from "./assets/hearts.svg";
import image from "./assets/image.png";
import lightning from "./assets/lightning.svg";

const About = () => {
  return (
    <div className="h-auto bg-black text-white-off flex flex-col w-full justify-center items-center py-10">
      <div className="flex flex-row justify-around items-center w-[95%] border-2 border-[#6C63FF] rounded-t-2xl">
        <div className="w-20 sm:w-28 md:w-40 lg:w-52">
          <img src={lightning} alt="" className="" />
        </div>
        <h1 className="font-pixeboy text-3xl sm:text-4xl md:text-6xl lg:text-8xl">
          WHAT'S CAD
        </h1>
        <div className="w-20 sm:w-28 md:w-40 lg:w-52">
          <img src={hearts} alt="" className="" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[95%] border-2 border-[#6C63FF] rounded-b-2xl">
        <p className="font-sans w-auto sm:w-[500px] mt-12 md:my-16 text-center text-lg sm:text-xl md:text-2xl px-4">
          Control Alt Delete is a 24 hour hackathon which is going to be
          organized by Coding Ninjas SRM community...
        </p>
        <div className="flex flex-col md:flex-row justify-evenly items-center w-auto md:w-[800px] mt-12 md:my-16">
          <h3 className="font-sans text-4xl text-[#F5D7E3] py-2">
            Application
          </h3>
          <p className="font-pixeboy text-6xl py-2">OR</p>
          <h3 className="font-sans text-4xl text-[#F5D7E3] py-2">Website</h3>
        </div>
        <p className="font-sans text-2xl mt-12 md:my-16 text-center">
          You dream about it. You think how you could do it.
          <br />
          You share that idea with others.
        </p>
        <div className="relative flex flex-col md:flex-row justify-evenly items-center w-full mt-12 md:mt-16">
          <img
            src={image}
            alt=""
            className="h-auto w-[300px] lg:w-[400px] xl:w-[526px]"
          />
          <p className="font-sans text-lg md:text-2xl w-auto px-4 sm:w-[450px] text-center pt-4 md:pt-0 md:text-right">
            We are a student led organization who strive to promote a healthy
            coding culture among the budding techies of this generation!
          </p>
        </div>
        <div className="w-full mb-28 md:mb-40 flex justify-end items-center">
          <img src={bg} alt="" className="w-[450px] md::w-[644px]" />
        </div>
      </div>
    </div>
  );
};

export default About;
