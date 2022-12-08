import React from "react";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const dynamicName = {
    name: "Thapa Store",
  };
  return (
    <>
      <HeroSection myData={dynamicName} />
          <Services />
          <Trusted/>
    </>
  );
};

export default Home;
