import React, { createContext, useState } from "react";
import { Nav } from "./Nav";
import { useContext } from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from "./Home";
import { SearchPage } from "./SearchPage";
import { CartPage } from "./CartPage";
import { DescriptionPage } from "./DescriptionPage";

export const context = createContext();
export const App = () => {
  const router = createBrowserRouter([
    {},
    {
      path: "/:id",
      element: <SearchPage></SearchPage>,
    },
  ]);

  const [cart, addCart] = useState([]);

  return (
    <div>
      <context.Provider value={{ cart, addCart }}>
        <BrowserRouter>
          <Nav></Nav>
          <Routes>
            <Route
              path="/prod/:id"
              element={<DescriptionPage></DescriptionPage>}
            ></Route>
            <Route path="/" element={<Home></Home>} />
            <Route path="/:id" element={<SearchPage></SearchPage>} />
            <Route path="/cart" element={<CartPage></CartPage>}></Route>
          </Routes>
        </BrowserRouter>
      </context.Provider>
    </div>
  );
};
