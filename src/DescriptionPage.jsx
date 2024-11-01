import React, { useEffect, useState } from "react";
import "./DescriptionPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";
export const DescriptionPage = () => {
  const id = useParams();
  const [state, setData] = useState();
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id.id}`).then((data) => {
      setData(data.data);
      console.log(data.data);
    });
  }, []);
  return (
    <div id="description">
      {state ? (
        <>
          <div id="img-1">
            <img src={state.image}></img>
          </div>
          <div id="h">
            <h1>{state.title}</h1>
          </div>
          <h3 id="rating">
            Customer Rating : <span>{state.rating.rate}</span>
          </h3>
          <div id="about">
            <h3>About </h3>
            <p>{state.description}</p>

            <h3 id="price-1">
              Price: <span>{state.price}</span>
            </h3>
          </div>
          <div id="buttons">
            <button id="cart-bt">Cart</button>
            <button id="buy">Buy Now</button>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
