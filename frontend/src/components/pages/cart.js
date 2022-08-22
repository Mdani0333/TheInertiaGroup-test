import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context-hook/cartContext";
import { FiShoppingBag } from "react-icons/fi";
import { GiCancel } from "react-icons/gi";
import "./cart.css";

export function Cart() {
  const cart = useContext(CartContext);
  const [total, setTotal] = useState(0);

  return (
    <div className="cart-container">
      <h2>
        <FiShoppingBag />
        My Cart
      </h2>
      <br />
      {cart.map((item) => (
        <div className="cart-item" key={item._id}>
          <img src={item.image} alt="" />
          <span>
            <p>-{item.category}</p>
            <h4>{item.name}</h4>
          </span>
          <span className="product-price">${item.price}</span>
          <GiCancel className="remove-btn" />
        </div>
      ))}
      <br />
      <div className="total-amount-div">
        <h3>Total:</h3>
        <h3>${total}</h3>
      </div>
      <br />
      <div>
        <Link to="/my/checkout">
          <button className="checkout-btn">Proceed To Checkout</button>
        </Link>
      </div>
    </div>
  );
}
