import React, { useState } from "react";
import "./Slider.css";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
export const Slider = () => {
  const images = [
    "https://static.vecteezy.com/system/resources/thumbnails/023/192/562/small_2x/sport-car-running-on-the-road-in-future-city-created-with-generative-ai-free-photo.jpg",
    "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg",
    "https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg",
  ];

  const [index, setIndex] = useState(0);
  function forward() {
    if (index == 2) {
      setIndex(0);
    } else {
      setIndex((prev) => prev + 1);
    }
  }
  function backward() {
    if (index == 0) {
      setIndex(2);
    } else {
      setIndex((prev) => prev - 1);
    }
  }
  return (
    <div id="main-container">
      <div onClick={backward}>
        <ArrowBigLeft></ArrowBigLeft>
      </div>
      <div id="device">
        {/* */}
        {images.map((e) => {
          return (
            <img
              id="sl"
              src={e}
              style={{ translate: `${-100 * index}%` }} //translting 0 100% 200% percent
            ></img>
          );
        })}
      </div>
      <div onClick={forward}>
        <ArrowBigRight></ArrowBigRight>
      </div>

      <div id="dots">
        {images.map((e, i) => {
          if (i == index) {
            return <CircleDot></CircleDot>;
          } else {
            return <Circle></Circle>;
          }
        })}
      </div>
    </div>
  );
};
