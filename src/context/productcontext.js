import { createContext, useContext, useEffect } from "react";
import axios from "axios";
const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {
  const getProducts = async (url) => {
    const response = await axios.get(url);
    const products = await response.data;
    console.log(products);
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ myName: "AppContext" }}>
      {children}
    </AppContext.Provider>
  );
};

//custom hook

const useProductContextGlobal = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContextGlobal };
