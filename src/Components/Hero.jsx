import React from "react";
import bulb from "../assets/bulb.png";
import { Link } from "react-router-dom";
import Contact from "../pages/Contact";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="container mx-auto  px-4 sm:px-16 lg:px-14">
      <div className="flex flex-col lg:flex-row justify-between   py-8 lg:py-16">
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <span className="text-4xl sm:text-5xl lg:text-7xl font-bold font-[arial] tracking-wider relative block" style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>
            1,274+
          </span>
          <h2 className="text-xl sm:text-2xl mt-2">Completed Projects</h2>
          <img src={bulb} className="mt-8 h-48 sm:h-64 lg:h-72  w-auto mx-auto lg:mx-0" alt="Bulb" />
        </div>
        <div className="w-full lg:w-2/3">
          <div className="relative flex items-center justify-center mx-auto rounded-full bg-gradient-to-r from-[#20D09166] to-[#0B406F] w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] text-center">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6">
              <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                <div className="flex flex-col items-center">
                  <span className="font-bold flex-row-reverse">Designing</span>
                  <div className="flex items-center space-x-2 font-thin">
                    <span>a</span>
                    <span>better</span>
                  </div>
                </div>
                <span className="font-bold">World</span>{' '}
                <span className="font-thin">Today</span>
              </h1>


              <div className="flex items-center mt-4 space-x-2">
                <Link to="/contact">
                  <button className="relative flex px-3 py-3 gap-3 text-white font-semibold bg-transparent group">

                    <span className="absolute inset-5 top-3 right-3 bg-[#1F5771] w-6 h-6 rounded-full transition-transform duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-28"></span>
                    <span className="relative z-10">
                      OUR SERVICES
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
