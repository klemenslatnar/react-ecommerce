import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./components/Navigation/AddProduct";
import { ProductProvider } from "./store/product-context";
import { CartProvider } from "./store/cart-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <ProductProvider>
      <BrowserRouter>
        <React.StrictMode>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/add-product" element={<AddProduct />} />
          </Routes>
        </React.StrictMode>
      </BrowserRouter>
    </ProductProvider>
  </CartProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
