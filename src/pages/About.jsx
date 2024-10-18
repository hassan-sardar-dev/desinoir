import React from "react";
import vector from "../assets/vector.svg";

const About = () => {
  return (
    <div>
      <div className="py-32 w-[98vw] flex justify-between items-center">
        <div className="about ms-32">
          <h1 className="text-6xl font-bold">
            About
            <span className="font-thin text-6xl"> Us</span>
          </h1>
        </div>
        <div className="vector me-32 ">
          <img src={vector} alt="vector" />
        </div>
      </div>
    </div>
  );
};

export default About;
