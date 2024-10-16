import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import usa from "../assets/usa.svg";
import "../App.css";
import saudi from "../assets/ksa.svg";
import moon from "../assets/moon.svg";
import menu from "../assets/menu.svg";
import Menupage from "../pages/Menu";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(location.pathname);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  const navItems = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "About", href: "/about" },
    { id: 3, label: "Our Projects", href: "/projects" },
    { id: 4, label: "Our Article", href: "/article" },
    { id: 5, label: "UI Store", href: "/store" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (href) => {
    setActiveItem(href);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-transparent sm:h-20 lg:h-28 flex justify-between items-center w-full px-4 sm:px-8 lg:px-32">
        <div className="container mx-auto flex justify-between items-center w-full">
          <Link to="/" onClick={() => handleNavClick("/")}>
            <div className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-6 w-auto sm:h-8 "
              />
            </div>
          </Link>

          {screenSize >= 950 && (
            <ul className="flex gap-3 lg:gap-10  w-auto text-white">
              {navItems.map((item) => (
                <li
                  key={item.id}
                  className={`text-xs sm:text-sm cursor-pointer ${
                    activeItem === item.href
                      ? "text-[#20D091]"
                      : "hover:text-[#20D091]"
                  }`}
                  onClick={() => handleNavClick(item.href)}
                >
                  <Link to={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          )}

          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="text-white flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="animate-shake w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                viewBox="0 0 30 30"
                fill="none"
              >
                <path
                  opacity="0.45"
                  d="M26.2491 7.04844C26.2678 6.68469 25.9878 6.37469 25.6241 6.35594L25.1691 6.33219C23.2603 6.23469 21.6328 7.70219 21.5353 9.61094L21.4453 11.3659L20.5178 10.4384L13.1416 3.06219C12.4441 2.36469 11.3103 2.36469 10.6128 3.06219C9.91531 3.75969 9.91531 4.89344 10.6128 5.59094L15.2503 10.2284L14.4078 11.0709L8.36156 5.02719C7.66406 4.32969 6.53031 4.32969 5.83281 5.02719C5.13531 5.72469 5.13531 6.85844 5.83281 7.55594L12.2216 13.9447L11.4928 14.9022L6.39656 9.80719C5.69906 9.10969 4.56531 9.10969 3.86781 9.80719C3.17031 10.5047 3.17031 11.6384 3.86781 12.3359L9.30906 17.7772L8.58031 18.7347L5.55281 15.7072C4.85531 15.0097 3.72156 15.0097 3.02406 15.7072C2.32531 16.4047 2.32531 17.5384 3.02406 18.2359L6.39656 21.6084L8.98031 24.1922L10.1903 25.4022C12.9841 28.1959 17.5141 28.1959 20.3078 25.4022L24.1641 21.5459C25.2166 20.4934 25.7241 19.1084 25.7016 17.7297L26.2491 7.04844Z"
                  fill="#20D091"
                />
                <path
                  d="M20.0011 6.25039C19.5973 6.25039 19.2011 6.05539 18.9598 5.69414L16.4598 1.94414C16.0773 1.36914 16.2323 0.594141 16.8061 0.210391C17.3786 -0.173359 18.1573 -0.0171092 18.5398 0.556641L21.0398 4.30664C21.4223 4.88164 21.2673 5.65664 20.6936 6.04039C20.4798 6.18164 20.2386 6.25039 20.0011 6.25039Z"
                  fill="#20D091"
                />
                <path
                  d="M6.24877 28.7502C6.01127 28.7502 5.77002 28.6814 5.55627 28.5402L1.80627 26.0402C1.23252 25.6564 1.07752 24.8814 1.46002 24.3064C1.84252 23.7314 2.61877 23.5777 3.19377 23.9602L6.94377 26.4602C7.51752 26.8439 7.67252 27.6189 7.29002 28.1939C7.04877 28.5552 6.65252 28.7502 6.24877 28.7502Z"
                  fill="#20D091"
                />
              </svg>
              {screenSize >= 768 && (
                <span className="ml-1 text-xs sm:text-sm">Say Hello!</span>
              )}
            </button>

            {screenSize >= 768 && (
              <div className="flex items-center space-x-2 bg-[#061E2C] border border-[#1DE2CF26] px-2 py-1 rounded-full">
                <div className="flex bg-black rounded-full items-center space-x-1 px-2 py-1">
                  <img src={usa} alt="" className="h-3 sm:h-4" />
                  <span className="text-white text-[8px] sm:text-[10px] font-semibold cursor-pointer">
                    EN
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <img src={saudi} alt="" className="h-3 sm:h-4" />
                  <span className="text-white text-[8px] sm:text-[10px] font-semibold cursor-pointer">
                    AR
                  </span>
                </div>
              </div>
            )}

            <button className="w-6 h-6 sm:w-8 sm:h-8 lg:w-[35px] lg:h-[35px] flex items-center justify-center sm:border sm:border-[#1DE2CF26] sm:bg-[#061E2C] sm:rounded-xl">
              <img
                src={moon}
                alt=""
                className="w-5 h-5 px-2 sm:w-6 sm:h-6 lg:w-full lg:h-full"
              />
            </button>

            <button
              onClick={toggleMenu}
              className="text-white text-2xl hover:text-gray-300"
            >
              <img
                src={menu}
                className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8"
                alt=""
              />
            </button>
          </div>
        </div>
      </nav>

      <Menupage isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
