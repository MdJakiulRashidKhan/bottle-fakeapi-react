import React from "react";
import "./cart.css";

const Cart = ({ cart }) => {
  return (
    <div>
      <h4>Cart : {cart.length}</h4>
      <div>
        {cart.map((Bottle) => (
          <img className="cart-img" src={Bottle.img}></img>
        ))}
      </div>
    </div>
  );
};

export default Cart;
