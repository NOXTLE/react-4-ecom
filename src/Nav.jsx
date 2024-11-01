import React from "react";
import "./Nav.css";
import { Search, ShoppingBag, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { context } from "./App";
import { useContext } from "react";

export const Nav = () => {
  const [text, setText] = useState("");
  const { cart, addCard } = useContext(context);
  const nav = useNavigate();

  return (
    <div id="Nav">
      <div
        id="logo"
        onClick={() => {
          nav("/");
        }}
      >
        <img src="https://seeklogo.com/images/S/shopify-logo-1C711BCDE4-seeklogo.com.png"></img>
        <h1>Shopper</h1>
      </div>
      <div id="s-bar">
        <div id="ip">
          <input
            placeholder="Search your products"
            onChange={(e) => {
              setText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                nav(`/${text}`);
              }
            }}
          ></input>
          <button id="search">
            <Search></Search>
          </button>
        </div>
      </div>
      <div id="user">
        <div
          id="cart"
          onClick={() => {
            nav("/cart");
          }}
        >
          <ShoppingBag></ShoppingBag>
          <div id="text">Cart</div>
          <div id="bubble" onClick={() => console.log(cart.length)}>
            {cart.length}
          </div>
        </div>
        <div id="account">
          <User></User>
          <div id="text2">Account</div>
        </div>
      </div>
    </div>
  );
};
