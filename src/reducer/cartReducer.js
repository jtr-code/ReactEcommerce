const cartReducer = (state, action) => {
	switch (action.type) {
        case "ADD_TO_CART":
            let {id,color,amount,product}=action.payload
			console.log('product: ', product);

		default:
			return state;
	}
};

export default cartReducer;
