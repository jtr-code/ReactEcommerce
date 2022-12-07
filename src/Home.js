 import React from "react";
import HeroSection from "./components/HeroSection";

const Home = () => {
    const dynamicName = {
        name:"Thapa Store"
    }
    return <HeroSection myData={dynamicName} />   
};


export default Home;
