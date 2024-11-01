import React, { useState } from "react";
import "./Categories.css";
import ReactCardFlip from "react-card-flip";
import { useNavigate } from "react-router-dom";
export const Categories = () => {
  const cat = [
    {
      id: 0,
      cat: "electronics",
      logo: "https://png.pngtree.com/png-vector/20190626/ourmid/pngtree-bulb-logo-and-symbol-vector-ilustration-template-png-image_1513836.jpg",
      desc: "Purchase Authentic Electric products",
    },

    {
      id: 1,
      cat: "jewelery",
      logo: "https://static.vecteezy.com/system/resources/thumbnails/012/807/306/small/diamond-sign-illustration-for-icon-symbol-pictogram-website-or-graphic-design-element-format-png.png",
      desc: "Purchase Authentic and beautiful Jwelery products",
    },
    {
      id: 2,
      cat: "men's clothing",
      logo: "https://img.freepik.com/premium-vector/man-is-shopping-man-holding-bags-gift-box-illustration_165429-525.jpg",
      desc: "Purchase Trendy Mens Cloths",
    },

    {
      id: 3,
      cat: "women's clothing",
      logo: "https://www.shutterstock.com/image-vector/happy-shopper-girl-holds-packages-600nw-484897405.jpg",
      desc: "Purchase cute and beautiful cloths",
    },
  ];
  const [isFlipped, flip] = useState([false, false, false, false]);
  const nav = useNavigate();
  return (
    <div id="Main">
      <div id="Heading">
        <p>Explore Categories</p>
      </div>
      <div id="box">
        {cat.map((item, index) => {
          return (
            <ReactCardFlip
              isFlipped={isFlipped[index]}
              flipDirection="vertical"
            >
              <div
                id="card"
                onMouseEnter={() => {
                  if (index == item.id) {
                    const a = isFlipped.map((e, i) => {
                      if (index == i) {
                        return true;
                      } else {
                        return false;
                      }
                    });
                    flip(a);
                    console.log(a);
                  }
                }}
              >
                <img src={item.logo}></img>
                <h1>{item.cat}</h1>
              </div>

              <div
                id="desc"
                onMouseLeave={() => {
                  const a = isFlipped.map((e, i) => {
                    return false;
                  });
                  flip(a);
                }}
              >
                <h1>{item.desc}</h1>
                <button onClick={() => nav(`/${item.cat}`)}>Shop Now</button>
              </div>
            </ReactCardFlip>
          );
        })}
      </div>
    </div>
  );
};
