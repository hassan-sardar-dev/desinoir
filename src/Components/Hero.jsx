import React from "react";
import bulb from "../assets/bulb.png";
import { Link, Navigate } from "react-router-dom";
import Contact from "../pages/Contact";
import { FaArrowRightLong } from "react-icons/fa6";
import Menu from "../pages/Menu";
// import Contact from "../pages/Contact";

const Hero = () => {
  return (
    <div>
      <div className="main-hero flex ">
        <div className="left ms-32 mt-16  py-16">
          <span className="text-7xl font-bold font-[arial] tracking-wider relative" style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>
            1,274+
          </span>
          <h2 className="text-2xl">Completed Projects</h2>
          <img src={bulb} className="mt-14 h-72 w-auto" alt="" />
        </div>
        <div className="middle h-screen ms-8">

          <div className="relative flex items-center justify-center ms-16 mt-16 rounded-full bg-gradient-to-r from-[#20D09166] to-[#0B406F] w-[200px] h-[200px] md:w-[400px] md:h-[400px] text-center">
            <div className="absolute inset-0  flex flex-col items-center justify-center p-6">
              <h1 className="font-sans ">
                <div className="flex">

                  <span className="text-6xl gap-3 relative left-24 flex font-bold">Designing</span>
                  <div className="text-6xl gap-3   flex relative left-28 top-1 font-thin">
                    <span>
                      a
                    </span>
                    <span>
                      better
                    </span>
                  </div>
                </div>
                <br />
                <span className="text-6xl relative left-10 font-bold">World</span>{' '}
                <span className="text-6xl font-thin  relative left-14 ">Today</span>
              </h1>
              <div className="relative flex items-center ">
                {/* <div className="absolute size-7 rounded-full bg-black/80"></div> */}
                <Link href={<Contact />}>
                  <button className="mt-4 text-white text-sm  bottom-8  md:text-lg ">SERVICES</button>
                </Link>
                <FaArrowRightLong className="bg-red-500" />
              </div>
            </div>
          </div>
        </div>

      </div>
     
    </div >
  );
};

export default Hero;
