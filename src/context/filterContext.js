import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContextGlobal } from "./productContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
	filter_products: [],
	all_products: [],
	grid_view: true,
};

export const FilterContextProvider = ({ children }) => {
	const { products } = useProductContextGlobal();

  const [state, dispatch] = useReducer(reducer, initialState);
  
  const setGridView = () => {
    dispatch({type:"SET_GRID_VIEW"})
  }

	useEffect(() => {
		dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
	}, [products]);

	return (
		<FilterContext.Provider value={{ ...state ,setGridView}}>
			{children}
		</FilterContext.Provider>
	);
};

export const useFilterContext = () => {
	return useContext(FilterContext);
};
