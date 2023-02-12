import React from "react";

import logo from "../../Assets/images/logo.svg";
import img from "../../Assets/images/navbar_img.svg";

import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="font-pixeboy text-white-off text-base md:text-lg w-full fixed top-12 flex items-center justify-around hover:cursor-pointer z-50">
      <Link to="landing" smooth duration={500} offset={0}>
        <img src={logo} alt="CN logo" className="lg:block hidden" />
      </Link>
      <div className="h-12 w-[300px] sm:w-[400px] md:w-[600px] rounded-lg drop-shadow-white bg-black bg-opacity-50 backdrop-blur-2xl backdrop-brightness-150">
        <ul className="flex flex-row justify-evenly items-center h-full w-full">
          <li className="hover:scale-110 duration-200 hover:text-gray-200 hover:text-[#8758FF]">
            <Link to="about" smooth duration={500} offset={-80}>
              ABOUT
            </Link>
          </li>
          <li className="hover:scale-110 duration-200 hover:text-gray-200 hover:text-[#8758FF]">
            <Link to="schedule" smooth duration={500} offset={-80}>
              SCHEDULE
            </Link>
          </li>
          <li className="hover:scale-110 duration-200 hover:text-gray-200 hover:text-[#8758FF]">
            <Link to="prizes" smooth duration={500} offset={-80}>
              PRIZES
            </Link>
          </li>
          <li className="hover:scale-110 duration-200 hover:text-gray-200 hover:text-[#8758FF]">
            <Link to="sponsors" smooth duration={500} offset={-80}>
              SPONSORS
            </Link>
          </li>
        </ul>
      </div>
      <Link to="tracks" smooth duration={500} offset={-80}>
        <img src={img} alt="" className="lg:block hidden" />
      </Link>
    </div>
  );
};

export default Navbar;
