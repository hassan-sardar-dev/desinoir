import React from "react";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import usa from "../assets/usa.svg";
import ksa from "../assets/ksa.svg";
import logo from "../assets/logo.png";
import tick from "../assets/tick.svg";

const Menu = ({ isOpen, onClose }) => {
  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our Projects", path: "/projects" },
    { name: "Articles", path: "/article" },
    { name: "UI Store", path: "/store" },
  ];
  const languages = [
    { name: "English", flag: usa },
    { name: "Arabic", flag: ksa },
  ];

  const categories = [
    {
      title: "UI/UX Designing",
      items: [
        "User Research",
        "Information Architecture",
        "Visual Design",
        "Accessibility Testing",
        "Design Handoff",
      ],
      icon: tick,
    },
    {
      title: "Branding",
      items: [
        "Brand Strategy",
        "Brand Design",
        "Brand Audits",
        "Brand Storytelling",
        "Brand Refresh",
      ],
      icon: tick,
    },
    {
      title: "Graphic Designing",
      items: [
        "Print Design",
        "Packaging Design",
        "Illustration",
        "Infographic Design",
        "Layout and Composition",
      ],
      icon: tick,
    },
    {
      title: "Motion Graphic Designing",
      items: [
        "Animation",
        "Video Editing",
        "Motion Graphics for Social Media",
        "Explainer Videos",
        "Kinetic Typography",
      ],
      icon: tick,
    },
  ];

  return (
    <div
      className={`fixed z-50 top-0 left-0 ${
        isOpen ? "w-full" : "w-0"
      } h-screen bg-[#02111B] overflow-hidden`}
    >
      {isOpen && (
        <>
          <style>
            {`
                nav {
                  scrollbar-width: none; 
                }
                nav::-webkit-scrollbar {
                  display: none; 
                }
              `}
          </style>

          <nav className="  sm:p-6 md:p-8 h-full overflow-y-scroll">
            <div className=" px-16 flex flex-col lg:flex-row">
              <div className="text-left w-full lg:w-1/3  mb-8 lg:mb-0 lg:pr-8">
                <Link to="/"    onClick={onClose}
                  
                  aria-label="Close Menu"
                >
                  <img src={logo} className="mb-7 h-5 sm:h-10 md:h-12" alt="" />
                </Link>
                <button
                  onClick={onClose}
                  className="absolute top-8 right-20 text-white text-2xl"
                  aria-label="Close Menu"
                >
                  <CgClose />
                </button>

                <ul className="relative flex justify-start flex-col gap-16">
                  {navigationLinks.map((link, index) => (
                    <li
                      key={index}
                      className="text-xl sm:text-xl md:text-2xl  font-bold transition-all delay-75 group flex items-center gap-4"
                    >
                      <div className="size-3 bg-[#20D091] rounded-full scale-0 invisible group-hover:visible group-hover:scale-105 transition-all duration-300 ease-out"></div>
                      <Link
                        className="absolute group-hover:translate-x-4 text-4xl font-medium group-hover:text-[#20D091] sm:group-hover:translate-x-5 transition-all duration-300 ease-out"
                        to={link.path}
                        onClick={onClose}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 sm:mt-12 lg:mt-20 flex flex-wrap gap-3 sm:gap-4">
                  {languages.map((lang, index) => (
                    <button
                      key={index}
                      className="px-3 py-1 sm:px-4 sm:py-2 bg-[#061E2C] text-white text-xs sm:text-sm md:text-base rounded-full border border-[#1DE2CF26] hover:bg-[#1DE2CF26] transition-all duration-200 ease-out"
                    >
                      <img
                        src={lang.flag}
                        alt={lang.name}
                        className="inline-block mr-2 h-3 sm:h-4"
                      />
                      {lang.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-white mt-10 lg:mt-14 w-full lg:w-2/3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
                  {categories.map((category, index) => (
                    <div key={index}>
                      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wider font-semibold mb-2 sm:mb-3 md:mb-4">
                        {category.title}
                      </h3>
                      <ul className="space-y-1 sm:space-y-2">
                        {category.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-xs sm:text-sm md:text-base cursor-pointer flex items-center"
                          >
                            <img
                              src={category.icon}
                              alt="tick"
                              className="mr-2 w-3 h-3 sm:w-4 sm:h-4"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </>
      )}
    </div>
  );
};

export default Menu;
