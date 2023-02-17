import React from "react";
import tracks from "./../../Assets/images/tracks.svg";
import web from "./../../Assets/images/web.svg";

const Tracks = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center grid text-white-off"
        style={{ backgroundImage: `url(${tracks})` }}
        name="tracks"
      >
        <h1 className=" font-pixeboy mt-20 text-5xl lg:text-8xl  justify-self-center text-shadow">
          TRACKS
        </h1>

        <div className="grid lg:grid-cols-3 lg:grid-rows-2 sm:grid-cols-2 sm:grid-rows-2 gap-28 mt-24 justify-self-center w-[80vw]">
          <div className="border-solid border-2 border-[#B38FFF] grid gap-1">
            <div
              className="grid grid-cols-12 grid-rows-6"
              style={{ backgroundImage: `url(${web})` }}
            >
              {[...Array(72)].map((_, i) => (
                <div
                  key={i}
                  className="bg-[#2C1E66] border-solid border-[1px] border-[#4B28D9] text-[#2C1E66]"
                >
                  "
                </div>
              ))}
            </div>
            <img
              className="justify-self-center -mt-40"
              src={web}
              alt=""
              width={150}
            />
            <div className="px-3 bg-[#724CD1] text-5xl text-center font-pixeboy">
              WEBSITE
            </div>
            <hr className="border-[3px] border-solid border-[#492f89]"></hr>
            <hr className="border-[2px] border-solid border-[#492f89]"></hr>
            <hr className="border-[1px] border-solid border-[#492f89]"></hr>
            <hr className="border-[0.5px] border-solid border-[#492f89]"></hr>
            <div className="px-2 py-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident blanditiis dolorem magnam, quae reiciendis est alias
              placeat minima facilis maxime!
            </div>
          </div>
          <div className="border-solid border-2 border-[#B38FFF] grid gap-1">
            <div
              className="grid grid-cols-12 grid-rows-6"
              style={{ backgroundImage: `url(${web})` }}
            >
              {[...Array(72)].map((_, i) => (
                <div
                  key={i}
                  className="bg-[#2C1E66] border-solid border-[1px] border-[#4B28D9] text-[#2C1E66]"
                >
                  "
                </div>
              ))}
            </div>
            <img
              className="justify-self-center -mt-40"
              src={web}
              alt=""
              width={150}
            />
            <div className="px-3 bg-[#724CD1] text-5xl text-center font-pixeboy">
              WEBSITE
            </div>
            <hr className="border-[3px] border-solid border-[#492f89]"></hr>
            <hr className="border-[2px] border-solid border-[#492f89]"></hr>
            <hr className="border-[1px] border-solid border-[#492f89]"></hr>
            <hr className="border-[0.5px] border-solid border-[#492f89]"></hr>
            <div className="px-2 py-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident blanditiis dolorem magnam, quae reiciendis est alias
              placeat minima facilis maxime!
            </div>
          </div>
          <div className="border-solid border-2 border-[#B38FFF] grid gap-1">
            <div
              className="grid grid-cols-12 grid-rows-6"
              style={{ backgroundImage: `url(${web})` }}
            >
              {[...Array(72)].map((_, i) => (
                <div
                  key={i}
                  className="bg-[#2C1E66] border-solid border-[1px] border-[#4B28D9] text-[#2C1E66]"
                >
                  "
                </div>
              ))}
            </div>
            <img
              className="justify-self-center -mt-40"
              src={web}
              alt=""
              width={150}
            />
            <div className="px-3 bg-[#724CD1] text-5xl text-center font-pixeboy">
              WEBSITE
            </div>
            <hr className="border-[3px] border-solid border-[#492f89]"></hr>
            <hr className="border-[2px] border-solid border-[#492f89]"></hr>
            <hr className="border-[1px] border-solid border-[#492f89]"></hr>
            <hr className="border-[0.5px] border-solid border-[#492f89]"></hr>
            <div className="px-2 py-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident blanditiis dolorem magnam, quae reiciendis est alias
              placeat minima facilis maxime!
            </div>
          </div>
          <div className="border-solid border-2 border-[#B38FFF] grid gap-1">
            <div
              className="grid grid-cols-12 grid-rows-6"
              style={{ backgroundImage: `url(${web})` }}
            >
              {[...Array(72)].map((_, i) => (
                <div
                  key={i}
                  className="bg-[#2C1E66] border-solid border-[1px] border-[#4B28D9] text-[#2C1E66]"
                >
                  "
                </div>
              ))}
            </div>
            <img
              className="justify-self-center -mt-40"
              src={web}
              alt=""
              width={150}
            />
            <div className="px-3 bg-[#724CD1] text-5xl text-center font-pixeboy">
              WEBSITE
            </div>
            <hr className="border-[3px] border-solid border-[#492f89]"></hr>
            <hr className="border-[2px] border-solid border-[#492f89]"></hr>
            <hr className="border-[1px] border-solid border-[#492f89]"></hr>
            <hr className="border-[0.5px] border-solid border-[#492f89]"></hr>
            <div className="px-2 py-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident blanditiis dolorem magnam, quae reiciendis est alias
              placeat minima facilis maxime!
            </div>
          </div>
          <div className="border-solid border-2 border-[#B38FFF] grid gap-1">
            <div
              className="grid grid-cols-12 grid-rows-6"
              style={{ backgroundImage: `url(${web})` }}
            >
              {[...Array(72)].map((_, i) => (
                <div
                  key={i}
                  className="bg-[#2C1E66] border-solid border-[1px] border-[#4B28D9] text-[#2C1E66]"
                >
                  "
                </div>
              ))}
            </div>
            <img
              className="justify-self-center -mt-40"
              src={web}
              alt=""
              width={150}
            />
            <div className="px-3 bg-[#724CD1] text-5xl text-center font-pixeboy">
              WEBSITE
            </div>
            <hr className="border-[3px] border-solid border-[#492f89]"></hr>
            <hr className="border-[2px] border-solid border-[#492f89]"></hr>
            <hr className="border-[1px] border-solid border-[#492f89]"></hr>
            <hr className="border-[0.5px] border-solid border-[#492f89]"></hr>
            <div className="px-2 py-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident blanditiis dolorem magnam, quae reiciendis est alias
              placeat minima facilis maxime!
            </div>
          </div>
          <div className="border-solid border-2 border-[#B38FFF] grid gap-1">
            <div
              className="grid grid-cols-12 grid-rows-6"
              style={{ backgroundImage: `url(${web})` }}
            >
              {[...Array(72)].map((_, i) => (
                <div
                  key={i}
                  className="bg-[#2C1E66] border-solid border-[1px] border-[#4B28D9] text-[#2C1E66]"
                >
                  "
                </div>
              ))}
            </div>
            <img
              className="justify-self-center -mt-40"
              src={web}
              alt=""
              width={150}
            />
            <div className="px-3 bg-[#724CD1] text-5xl text-center font-pixeboy">
              WEBSITE
            </div>
            <hr className="border-[3px] border-solid border-[#492f89]"></hr>
            <hr className="border-[2px] border-solid border-[#492f89]"></hr>
            <hr className="border-[1px] border-solid border-[#492f89]"></hr>
            <hr className="border-[0.5px] border-solid border-[#492f89]"></hr>
            <div className="px-2 py-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident blanditiis dolorem magnam, quae reiciendis est alias
              placeat minima facilis maxime!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tracks;
