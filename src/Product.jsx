import React, { useEffect, useState } from "react";
import "./Product.css";
import axios from "axios";
import {
  ArrowLeft,
  ArrowRight,
  LucideBadgeDollarSign,
  ShoppingBasket,
} from "lucide-react";

import { context } from "./App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export const Product = () => {
  const [prod, setData] = useState([]);
  const [indexa, setIndexa] = useState(0);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((data) => {
      setData(data.data);
    });
  }, []);

  function forw() {
    if (window.innerWidth > 800) {
      if (indexa < 8) {
        setIndexa((prev) => {
          console.log(prev);
          console.log(window.innerWidth);
          return prev + 1;
        });
      }
    } else {
      if (indexa !== 19) {
        setIndexa((prev) => {
          console.log(prev);
          console.log(window.innerWidth);
          return prev + 1;
        });
      }
    }
  }
  function backw() {
    if (indexa !== 0) {
      setIndexa((prev) => {
        console.log(prev);
        return prev - 1;
      });
    }
  }
  const { cart, addCart } = useContext(context);
  const nav = useNavigate();
  return (
    <div id="prod">
      <div id="Heading-prod">
        <p>Top Products</p>
      </div>
      <div id="prod-cont">
        <div>
          <div
            id="back"
            onClick={backw}
            style={{
              display:
                indexa === 0 || window.innerWidth < 800 ? "none" : "flex",
            }}
          >
            <ArrowLeft></ArrowLeft>
          </div>

          <div
            id="for"
            style={{
              display:
                indexa === 8 || window.innerWidth < 800 ? "none" : "flex",
            }}
            onClick={() => {
              forw();
              console.log(indexa);
            }}
          >
            <ArrowRight></ArrowRight>
          </div>
        </div>
        <div
          id="prod-slider"
          style={{
            transform: `translateX(${
              window.innerWidth > 800 ? `${-31 * indexa}%` : `${-5 * indexa}%`
            })`,
            transition: "all 1s",
          }}
        >
          {prod.map((e) => {
            return (
              <div id="prodcard" onClick={() => nav(`/prod/${e.id}`)}>
                <img src={e.image}></img>
                <h1>{e.title}</h1>
                <p>
                  Price: <span>{e.price}$</span>
                </p>

                <div id="btn">
                  <button
                    id="cartbtn"
                    onClick={() => {
                      const arr = [...cart, e];
                      addCart(arr);
                      console.log(cart.length);
                      alert("Cart added");
                    }}
                  >
                    Add to cart <ShoppingBasket></ShoppingBasket>{" "}
                  </button>
                  <button id="buy">
                    Buy Now <LucideBadgeDollarSign></LucideBadgeDollarSign>{" "}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
