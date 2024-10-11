import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import uxui from "../assets/uxui.svg";
import branding from "../assets/branding.svg";
import grapic from "../assets/grapic.svg";
import motion from "../assets/film.svg";

const services = [
  {
    id: "01",
    title: "UX/UI Design",
    description: "We create intuitive and engaging digital experiences for your target audience. Our UI/UX design services include web and mobile app design, user interface and experience design, interaction design, and more.",
    checks: ["User Interface Design", "User Experience Design"],
    image: uxui,
  },
  {
    id: "02",
    title: "Branding",
    description: "We help businesses establish a strong visual representation through creative identity systems. Our branding services include strategy and positioning, logo and identity design, brand guidelines, and more.",
    checks: ["Brand Strategy", "Brand Identity"],
    image: branding,
  },
  {
    id: "03",
    title: "Graphic Design",
    description: "We create intuitive and engaging digital experiences for your target audience. Our UI/UX design services include web and mobile app design, user interface and experience design, interaction design, and more.",
    checks: ["Digital Design", "Print Design"],
    image: grapic,
  },
  {
    id: "04",
    title: "Motion Graphic Design",
    description: "We help businesses establish a strong visual representation through creative identity systems. Our branding services include strategy and positioning, logo and identity design, brand guidelines, and more.",
    checks: ["Infographics", "Social Media Videos"],
    image: motion,
  },
];

const Offers = () => {
  return (
    <div className="bg-[#061E2C] w-full">
      <div className="bg-[#061E2C]  max-w-[1460px] lg:w-10/12 sm:px-6 lg:ps-32 py-12 sm:py-16 lg:py-20 text-white">
        <div className="mb-8 sm:mb-12 container">
          <h1 className="text-[#EFCB1C] text-lg sm:text-xl ms-3 font-[outfit] mb-2">SERVICES WE OFFER</h1>
          <p className="font-[outfit] text-2xl sm:text-3xl ms-3 lg:text-4xl font-semibold tracking-wide">
            Turn Information <br /> Into Actionable Insights
          </p>
        </div>
        <div className="space-y-8 sm:space-y-12">
          {services.map((service) => (
            <div
              key={service.id}
              className="container mx-auto lg:flex gap-9 sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 p-4 rounded-md border-t border-white border-opacity-20"
            >
              <div className="flex-shrink-0 w-full lg:w-1/3">
                <div className="flex flex-col sm:flex-row items-center">
                  <img className="sm:w-20 md:w-32 lg:w-64" src={service.image} alt={service.title} />
                  <div className="flex flex-col sm:ms-4 lg:ms-14 mt-4 sm:mt-0">
                    <h2 className="lg:text-3xl sm:text-2xl font-semibold tracking-wide">{service.title}</h2>
                    <h2 className="text-7xl  flex md:text-7xl  sm:text-7xl lg:text-7xl mb-4" style={{ WebkitTextStroke: "1px white", color: "transparent" }}>
                      {service.id}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="flex-grow w-full">
                <p className="sm:ms-4 lg:ms14 text-sm sm:text-base font-light mb-4">{service.description}</p>
                <ul className="text-xl sm:ms-4 lg:ms-14 sm:text-lg mb-4 space-y-1">
                  {service.checks.map((check, index) => (
                    <li key={index} className="flex items-center">
                      <TiTick className="mr-1" />
                      <span>{check}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full sm:w-auto flex justify-center sm:justify-start">
                <Link to="/contact" className="relative group inline-flex items-center px-4 py-2 sm:px-6 sm:py-3 text-white font-semibold bg-transparent">
                  <span className="absolute bg-[#1F5771]/40 w-6 h-6 rounded-full transition-transform duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-20"></span>
                  <span className="z-10">SERVICES</span>
                  <FaArrowRightLong className="ml-2 text-white" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className=" w-[950px] ms-36 bg-[#5e5d5d]" />
    </div>
  );
};

export default Offers;
