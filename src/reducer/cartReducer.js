const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			let { id, color, amount, product } = action.payload;
			console.log("product: ", product);

			let cartProduct = {
				id: id + color,
				name: product.name,
				color,
				amount,
				price: product.price,
				image: product.image[0].url,
				max: product.stock,
			};
			return {
				...state,
				cart: [...state.cart, cartProduct],
			};

		case "REMOVE_ITEM":
			let updatedCart = state.cart.filter(
				(curItem) => curItem.id !== action.payload
			);
			return {
				...state,
				cart: updatedCart,
			};

		default:
			return state;
	}
};

export default cartReducer;
