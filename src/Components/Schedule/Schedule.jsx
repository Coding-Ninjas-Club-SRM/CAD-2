import React from "react";
import schedule from "./../../Assets/images/schedule.svg";

const Schedule = () => {
  return (
    <>
      <div
        className="relative bg-cover h-[150vh] bg-center flex flex-col gap-52 text-white-off"
        style={{ backgroundImage: `url(${schedule})` }}
      >
        <div className=" font-pixeboy flex flex-row gap-60 text-5xl ml-12 mt-12">
          <div className="flex flex-row gap-20">
            <span>!</span>
            <span>REGISTER</span>
          </div>
          <div className="flex flex-row gap-20">
            <span>!</span>
            <span>REGISTER</span>
          </div>
          <div className="flex flex-row gap-20">
            <span>!</span>
            <span>REGISTER</span>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="bg-[#724CD1] px-3 py-2 text-center text-xl border-solid border-b-4 border-r-4 border-white-off">
            Apply Now
          </button>
        </div>

        <h1
          className=" flex font-pixeboy text-8xl justify-center text-shadow"
          name="schedule"
        >
          SCHEDULE
        </h1>

        <span className="flex text-4xl justify-center filter drop-shadow-lg">
          COMING SOON
        </span>
      </div>
    </>
  );
};

export default Schedule;
