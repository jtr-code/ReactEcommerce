import React from "react";
import HeroSection from "./components/HeroSection";

const About = () => {
  const dynamicName = {
        name:"Thapa Ecommerce"
    }
  return <HeroSection myData={dynamicName}/>
};

export default About;
