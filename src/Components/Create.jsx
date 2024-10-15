import React from "react";
import createman from "../assets/create-man.png";
import { ImSpinner8 } from "react-icons/im";
import { TiStarburstOutline } from "react-icons/ti";

const Create = () => {
  return (
    <>
      <div className="bg-[#061E2C] text-white">
        <></>
        <div className="container relative mx-auto ms-0 py-12 lg:py-24">
          <div className="flex  flex-col lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2">
              <img src={createman} alt="Create man" className="w-full h-auto" />
            </div>
            <div className="w-full lg:w-1/2 space-y-4">
              <h3 className="text-[#EFCB1C] text-lg sm:text-xl font-semibold">
                CREATIVITY
              </h3>
              <h1 className="font-bold tracking-wider text-3xl sm:text-4xl">
                We Strive to Innovate
              </h1>
              <p className="text-sm sm:text-base">
                Desinior is a design agency that specialized in Product, UI/UX,
                Graphic Designing and Branding. We collaborate with startups and
                leading brands to create premium web, mobile App, Saas and
                Digital products. We help them successfully build strong brands,
                leverage their story telling channels.
              </p>
            </div>
          </div>
          <div className="absolute hidden gap-32 lg:flex bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="bg-gradient-to-r  from-[#197BFF] to-[#1FCE93] w-[500px] h-[10rem] rounded-3xl p-8 flex items-center text-center">
              <div className="flex items-center">
                <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full mr-4"></div>
                <h4 className="text-3xl w-auto font-bold  leading-tight text-white">
                  We've over <br /> 13 Years of Experience
                </h4>
              </div>
            </div>
          </div>
        </div>
        {/* scroll  */}

        <div className="scroll overflow-hidden whitespace-nowrap">
          <div className="flex text-7xl h-32  animate-scroll">
            <span className="mt-1 mr-3">
              <TiStarburstOutline />
            </span>
            <p className="font-bold">UI/UX Design</p>
            <span className="mt-1 mr-3">
              <TiStarburstOutline className="ms-3" />
            </span>
            <p style={{ WebkitTextStroke: "1px white", color: "transparent" }}>
              Branding
            </p>
            <span className="mt-1 mr-3">
              <TiStarburstOutline className="ms-7" />
            </span>
            <p className="font-bold">Graphics</p>
            <span className="mt-1 mr-3">
              <TiStarburstOutline className="ms-3" />
            </span>
            <p style={{ WebkitTextStroke: "1px white", color: "transparent" }}>
              Motion Graphics
            </p>
            <span className="mt-1 mr-3">
              <TiStarburstOutline />
            </span>
            <p className="font-bold">UI/UX Design</p>
            <span className="mt-1 mr-3">
              <TiStarburstOutline className="ms-3" />
            </span>
            <p style={{ WebkitTextStroke: "1px white", color: "transparent" }}>
              Branding
            </p>
            <span className="mt-1 mr-3">
              <TiStarburstOutline className="ms-3" />
            </span>
            <p className="font-bold">Graphics</p>
            <span className="mt-1 mr-3">
              <TiStarburstOutline className="ms-3" />
            </span>
            <p style={{ WebkitTextStroke: "1px white", color: "transparent" }}>
              Motion Graphics
            </p>
          </div>
        </div>
      </div>
      <hr className="bg-[black]" />
    </>
  );
};

export default Create;
