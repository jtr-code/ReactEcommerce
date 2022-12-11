import React from "react";
import FeaturedProduct from "./components/FeaturedProduct";
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
      <FeaturedProduct/>
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
