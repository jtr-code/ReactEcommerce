import { useProductContextGlobal } from "./context/productcontext";
import HeroSection from "./components/HeroSection";

const About = () => {
  const { myName } = useProductContextGlobal();
  const dynamicName = {
    name: "Thapa Ecommerce",
  };
  return (
    <>
      {myName}
      <HeroSection myData={dynamicName} />
    </>
  );
};

export default About;
