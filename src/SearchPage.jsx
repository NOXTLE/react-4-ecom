import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SearchPage.css";
import { context } from "./App";
export const SearchPage = () => {
  const { id } = useParams();

  const [prod, prodlist] = useState([]);
  const [filter, flist] = useState([]);
  const { cart, addCart } = useContext(context);

  //for fetching all data once
  useEffect(() => {
    console.log("page loaded ");
    axios
      .get("https://fakestoreapi.com/products")
      .then((data) => prodlist(data.data));
  }, []);

  //for fethcing data whenever url id changes or prod list updates
  useEffect(() => {
    const arr = prod.filter((e) => {
      console.log(id);
      console.log(e.category);
      if (
        e.id == id ||
        e.title.toLowerCase().includes(id) ||
        e.category == id
      ) {
        return e;
      }
    });
    flist(arr);
  }, [id, prod]);
  return (
    <div id="cont">
      {filter.map((e) => {
        return (
          <div id="card-shop">
            <img src={e.image}></img>
            <div id="descr">
              <h1 id="titles">{e.title}</h1>
              <h1 id="price">{e.price}$</h1>
            </div>
            <div id="btnz">
              <button>Buy</button>
              <button
                onClick={() => {
                  const arr = [...cart, e];
                  addCart(arr);
                }}
              >
                Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
