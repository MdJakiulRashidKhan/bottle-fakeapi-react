import React, { useEffect, useState } from "react";
import { addToLs, getStoredCart } from "../Utility/localstorage";
import Bottle from "./Bottle";
import "./bottles.css";
import Cart from "./Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  });
  const handleAddToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addToLs(bottle.id);
  };

  //   load card from LS
  useEffect(() => {
    if (bottles.length > 0) {
      const storesCard = getStoredCart();
      const saveCart = [];
      for (const id of storesCard) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          saveCart.push(bottle);
        }
      }
      setCart(saveCart);
    }
  }, [bottles]);
  return (
    <div>
      <h3>Bottle Available: {bottles.length}</h3>
      <Cart cart={cart}></Cart>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
