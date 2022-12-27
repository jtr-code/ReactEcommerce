const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			let { id, color, amount, product } = action.payload;

			let existingProduct = state.cart.find((curItem) => {
				return curItem.id === id + color;
			});

			if (existingProduct) {
				let updatedProduct = state.cart.map((curElem) => {
					if (curElem.id === id + color) {
						let newAmount = curElem.amount + amount;
						if (newAmount >= curElem.max) {
							newAmount = curElem.max;
						}
						return {
							...curElem,
							amount: newAmount,
						};
					} else {
						return curElem;
					}
				});
				return {
					...state,
					cart: updatedProduct,
				};
			} else {
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
			}

		case "SET_INCREMENT":
			let updatedProduct = state.cart.map((curElem) => {
				if (curElem.id === action.payload) {
					let ProductIncrement = curElem.amount + 1;
					return {
						...curElem,
						amount: ProductIncrement,
					};
				} else {
					return curElem;
				}
			});
			return {
				...state,
				cart: updatedProduct,
			};

		case "SET_DECREMENT":
			let decrementProduct = state.cart.map((curElem) => {
				if (curElem.id == action.payload) {
					let decProduct = curElem.amount - 1;
					return {
						...curElem,
						amount: decProduct,
					};
				} else {
					return curElem;
				}
			});
			return {
				...state,
				cart: decrementProduct,
			};

		case "REMOVE_ITEM":
			let updatedCart = state.cart.filter(
				(curItem) => curItem.id !== action.payload
			);
			return {
				...state,
				cart: updatedCart,
			};

		case "CLEAR_CART":
			return {
				...state,
				cart: [],
			};

		default:
			return state;
	}
};

export default cartReducer;
