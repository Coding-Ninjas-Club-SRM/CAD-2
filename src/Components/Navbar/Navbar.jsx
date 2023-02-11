import React from "react";

import logo from "../../Assets/images/logo.svg";
import img from "../../Assets/images/navbar_img.svg";

const Navbar = () => {
  return (
    <div className="font-pixeboy text-white-off text-base md:text-lg w-full fixed top-12 flex items-center justify-around hover:cursor-pointer z-10">
      <img src={logo} alt="CN logo" className="lg:block hidden" />
      <div className="h-12 w-[300px] sm:w-[400px] md:w-[600px] rounded-lg drop-shadow-white bg-black bg-opacity-50 backdrop-blur-2xl backdrop-brightness-150">
        <ul className="flex flex-row justify-evenly items-center h-full w-full">
          <li className="hover:scale-110 duration-200 hover:text-gray-200 hover:text-[#8758FF]">
            ABOUT
          </li>
          <li className="hover:scale-110 duration-200 hover:text-gray-200 hover:text-[#8758FF]">
            SCHEDULE
          </li>
          <li className="hover:scale-110 duration-200 hover:text-gray-200 hover:text-[#8758FF]">
            PRIZES
          </li>
          <li className="hover:scale-110 duration-200 hover:text-gray-200 hover:text-[#8758FF]">
            SPONSORS
          </li>
        </ul>
      </div>
      <img src={img} alt="" className="lg:block hidden" />
    </div>
  );
};

export default Navbar;
