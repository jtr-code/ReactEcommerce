import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContextGlobal } from "./productContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
	filter_products: [],
	all_products: [],
};

export const FilterContextProvider = ({ children }) => {
	const { products } = useProductContextGlobal();
	console.log("PRODUCTS: ", products);

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
	}, [products]);

	return (
		<FilterContext.Provider value={{ ...state }}>
			{children}
		</FilterContext.Provider>
	);
};
export const useFilterContextGlobal = () => {
	return useContext(FilterContext);
};
