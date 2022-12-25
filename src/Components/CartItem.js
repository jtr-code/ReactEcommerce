import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cartContext";

const CartItem = ({ id, name, image, color, price, amount, max }) => {
	const { removeItem } = useCartContext();

	const setDecrement = () => {
		// amount > 1 ? setAmount(amount - 1) : setAmount(1);
	};

	const setIncrement = () => {
		// stock > amount ? setAmount(amount + 1) : amount(stock);
	};

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
			{/* Price */}
			<div className="cart-hide">
				<p>
					<FormatPrice price={price} />
				</p>
			</div>
			{/* Quantity */}
			<CartAmountToggle
				amount={amount}
				setIncrement={setIncrement}
				setDecrement={setDecrement}
			/>
			{/* Subtotal */}
			<div className="cart-hide">
				<p>
					<FormatPrice price={price * amount} />
				</p>
			</div>
			{/* Remove */}
			<div>
				<FaTrash className="remove_icon" onClick={() => removeItem(id)} />
			</div>
		</div>
	);
};
export default CartItem;
