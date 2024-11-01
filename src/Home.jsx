import React from "react";
import { Hero } from "./Hero";
import { Categories } from "./Categories";
import { Product } from "./Product";
import { Footer } from "./Footer";
export const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Categories></Categories>
      <Product></Product>
      <Footer></Footer>
    </div>
  );
};
