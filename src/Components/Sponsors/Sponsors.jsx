import React from "react";
import styles from "./sponsors.module.css";
const Sponsors = () => {
  return (
    <div className={`${styles.bgimg} bg-cover bg-center p-10 relative  `}>
      
        <div className="w-full h-full flex flex-col  items-center text-[#FFFFFF]">
          <p className=" font-pixeboy text-5xl lg:text-8xl relative my-72 uppercase text-shadow ">
            Sponsors
          </p>
          <p className="text-3xl lg:text-5xl relative my-20 uppercase">Coming Soon</p>
        </div>
        <div className="w-full h-full flex flex-col  items-center text-[#FFFFFF] mt-20">
          <p className=" font-pixeboy text-5xl lg:text-8xl relative  my-72 uppercase text-shadow">
            prizes
          </p>
          <p className="text-3xl lg:text-5xl relative my-20 uppercase ">Coming Soon</p>
        </div>
      
    </div>
  );
};

export default Sponsors;
