import React from "react";
import bulb from "../assets/bulb.png";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className=" mx-auto px-4 mb-16 sm:px-8 lg:px-14 ">
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
        <div className="relative w-full lg:w-1/2 mb-8 lg:mb-0 ms-11 ">
          <span className="text-4xl sm:text-5xl lg:text-7xl font-bold font-[arial] tracking-wider block">
            1,274+
          </span>
          <h2 className="text-xl sm:text-2xl mt-2">Completed Projects</h2>
          <img
            src={bulb}
            className="mt-8 h-48 sm:h-64 lg:h-72 w-auto mx-auto lg:mx-0"
            alt="Bulb"
          />
        </div>
        <div className="relative w-full lg:w-1/2 mt-8 lg:mt-0">
          <div className="relative flex items-center rounded-full bg-gradient-to-b  from-[#20D09166] to-[#0B406F] w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] right-40">
            <div className="absolute inset-0 ms-9 flex flex-col items-start w-[35em] justify-center">
              <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                <div className="flex flex-wrap   justify-center lg:justify-start w-full mb-4">
                  <span className="flex gap-4 ">
                    <span className="font-bold ">Designing</span>a better
                  </span>
                </div>
                <div className="flex gap-4 ">
                  <span className="font-bold">World</span>
                  <span className="font-thin">Today</span>
                </div>
              </h1>
              <div className="flex mt-6 gap-2">
                <Link to="/contact">
                  <button className="relative flex  py-4 gap-3 text-white font-semibold bg-transparent group">
                    <span className="absolute inset-5 top-3 right-3 bg-[#1F5376] w-8 h-8 rounded-full transition-transform duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-20"></span>
                    <span className="relative z-10">
                      Our Services
                      <FaArrowRightLong className="text-white  absolute top-1 ms-3 hidden group-hover:inline-block transition-opacity duration-70000 ease-in-out" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
