import React from "react";
import styles from "./sponsors.module.css"
const Sponsors = () => {
  return(
    <div className={`${styles.bgimg} bg-black p-10 `}>
      <div>
      <div className="w-full h-full flex flex-col  items-center text-[#FFFFFF]">

        <p className=" font-pixeboy text-8xl relative my-72 uppercase ">Sponsors</p>
        <p className="text-5xl relative my-20 uppercase">Coming Soon</p>
      </div>
      <div className="w-full h-full flex flex-col  items-center text-[#FFFFFF] mt-20">

        <p className=" font-pixeboy text-8xl relative my-72 uppercase">prizes</p>
        <p className="text-5xl relative my-20 uppercase ">Coming Soon</p>
      </div>
      </div>
    </div>
  );
};

export default Sponsors;
