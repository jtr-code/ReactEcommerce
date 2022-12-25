import React from "react";
import FormatPrice from "../Helpers/FormatPrice";

const CartItem = ({ id, name, image, color, price, amount }) => {
	console.log('color: ', color);
	console.log('price: ', price);
	return (
		<div className="cart_heading grid grid-five-column">
			<div className="cart-image--name">
				<div>
					<figure>
						<img src={image} alt={id} />
					</figure>
				</div>
				<div>
					<p>{name}</p>
					<div className="color-div">
						<p>color:</p>
						<div
							className="color-style"
							style={{ backgroundColor: color, color: color }}
						></div>
					</div>
				</div>
			</div>
			{/* price */}
			<div className="cart-hide">
				<p>
					<FormatPrice price={price} />
				</p>
			</div>
		</div>
	);
};
export default CartItem;
