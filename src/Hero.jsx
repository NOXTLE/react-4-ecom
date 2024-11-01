import React, { useEffect, useState } from "react";
import "./Hero.css";
import { ArrowLeft, ArrowRight, Circle, CircleDot } from "lucide-react";
export const Hero = () => {
  const arr = [
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/61b01b55463165.59851186ec81e.jpg",
    "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d0ed8755463165.59851186454c6.jpg",
    " https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/605e6b55463165.598511872b78e.gif",
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

  useEffect(() => {
    const interval = setInterval(forward, 4000);
    return () => clearInterval(interval);
  }, [index]);
  return (
    <div id="slider">
      <div id="backward" onClick={backward}>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "50%",
            padding: "10px",
          }}
        >
          <ArrowLeft></ArrowLeft>
        </div>
      </div>

      {arr.map((e) => {
        return (
          <img
            src={e}
            id="img"
            style={{ translate: `${-100 * index}% `, transition: "all 1s" }}
          ></img>
        );
      })}

      <div id="forward" onClick={forward}>
        <div
          style={{
            backgroundColor: "white",
            borderRadius: "50%",
            padding: "10px",
          }}
        >
          <ArrowRight></ArrowRight>
        </div>
      </div>

      <div id="bubbles">
        {arr.map((e, i) => {
          return index == i ? (
            <div
              id="sel"
              style={{ backgroundColor: "white", borderRadius: "50%" }}
            >
              {" "}
              <CircleDot></CircleDot>
            </div>
          ) : (
            <div
              onClick={() => {
                setIndex(i);
              }}
            >
              <Circle></Circle>
            </div>
          );
        })}
      </div>
    </div>
  );
};
