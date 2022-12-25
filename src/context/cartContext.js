import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData = () => {
	let getLocalDataFromStorage = localStorage.getItem("cartData");
	if (getLocalDataFromStorage === []) {
		return [];
	} else {
		return JSON.parse(getLocalDataFromStorage);
	}
};

const initialState = {
	// cart: [],
	cart: getLocalCartData(),
	total_items: "",
	total_amount: "",
	shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const addToCart = (id, color, amount, product) => {
		dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
	};

	const removeItem = (id) => {
		dispatch({ type: "REMOVE_ITEM", payload: id });
	};

	// localStorage to add data

	useEffect(() => {
		localStorage.setItem("cartData", JSON.stringify(state.cart));
	}, [state.cart]);

	return (
		<CartContext.Provider value={{ ...state, addToCart, removeItem }}>
			{children}
		</CartContext.Provider>
	);
};

//custom hook

const useCartContext = () => {
	return useContext(CartContext);
};

export { CartProvider, useCartContext };
