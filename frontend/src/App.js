import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import { Store } from "./components/pages/store";
import axios from "axios";
import { ProductContext } from "./components/context-hook/productContext";
import { CartContext } from "./components/context-hook/cartContext";
import { View } from "./components/pages/view";
import { Navbar } from "./components/navbar";
import { Cart } from "./components/pages/cart";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  //fetch products
  useEffect(() => {
    axios.get("http://localhost:3000/products").then(function (res) {
      setProducts(res.data);
    });
    refreshCart();
  }, []);

  //fetch cart data
  function refreshCart() {
    axios.get("http://localhost:3000/purchases/get").then(function (res) {
      setCart(res.data);
    });
  }

  //add to cart function
  const addToCart = async (item) => {
    if (cart.some((x) => x.name === item.name)) {
      alert("This product is already in cart");
    } else {
      axios
        .post("http://localhost:3000/purchases/post", item)
        .then(function (res) {
          console.log(res.data);
          refreshCart();
        });
    }
  };

  console.log(products);
  console.log(cart);
  return (
    <div>
      <BrowserRouter>
        <ProductContext.Provider value={products}>
          <CartContext.Provider value={cart}>
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Store addToCart={addToCart} />} />
              <Route
                exact
                path="/product:id"
                element={<View addToCart={addToCart} />}
              />
              <Route exact path="/my/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CartContext.Provider>
        </ProductContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
