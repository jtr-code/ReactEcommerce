import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "./reducer/productReducer";
const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.get(url);
      const products = await response.data;
      dispatch({
        type: "SET_API_DATA",
        payload: products,
      });
    } catch (error) {
      dispatch({
        type: "API_ERROR",
      });
    }
    console.log(products);
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

//custom hook

const useProductContextGlobal = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContextGlobal };
