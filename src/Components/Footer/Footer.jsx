import React from "react";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div
      className={`${styles.bgimg} flex flex-col  bg-black text-white-off p-10 text-xl`}
    >
      <div>
        <div className="flex justify-between ">
          <div className=" border-[#F5D7E3]  border-x-2  border-t-8 font-pixeboy ">
            <p className="bg-[#F5D7E3] px-10 text-[#0D0221] mb-2 ">Socials</p>
            <div className="text-[#F5D7E3]">
              <p className="px-10 my-2">Instagram</p>
              <p className="px-10 my-2 ">Instagram Blender</p>
              <p className="px-10 my-2 ">Instagram Photography</p>
              <p className="px-10 my-2">Github</p>
              <p className="px-10 my-2 ">Dribble</p>
            </div>
          </div>
          <div className="border-[#F5D7E3]  border-x-2 font-pixeboy">
            <p className="bg-[#F5D7E3] px-10 mb-2 text-[#0D0221]">Pages</p>
            <p className="px-10 my-2 ">Home</p>
            <p className="px-10 my-2 ">Project</p>
            <p className="px-10 my-2 ">Playground</p>
          </div>
          <div className="p-8">
            <p>Creative dev. Itlay.</p>
            <p>Sinalunga, Siena</p>
            <p>53048</p>
            <p>Piva 01553770528</p>
            <p>Sine march 2022</p>
          </div>
          <div>Recycle</div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center mt-10 font-pixeboy">
        <div>
          <p className="my-10">Feel free to reach me anytime for any Questions</p>
          <p className="mb-10">Cookie Policy</p>
        </div>
        <div>
          <p>
            The year is <span className="text-[#FF0000] mt-10">2023</span>
          </p>
          <p className="">It is the future</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
