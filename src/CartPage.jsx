import React, { useContext, useEffect, useState } from "react";
import "./CartPage.css";
import { context } from "./App";
export const CartPage = () => {
  const { cart, addCart } = useContext(context);
  const [total, settotal] = useState(0);

  useEffect(() => {
    if (cart.length > 1) {
    }
    const t = cart.reduce((last, e) => last + e.price, 0);

    settotal(t);
    console.log(t);
  }, [cart]);
  return (
    <div id="card-page">
      return (
      {cart.map((e) => {
        return (
          <div id="cart-card">
            <div id="image">
              <img src={e.image}></img>
            </div>
            <div id="prod">
              {e.title}

              <div id="price"> {e.price}$</div>
            </div>
          </div>
        );
      })}
      );
      {cart.length > 0 && (
        <div id="bottom-page">
          <div>Your Total is : {total} </div>
          <button id="button">Pay Now</button>
        </div>
      )}
    </div>
  );
};
