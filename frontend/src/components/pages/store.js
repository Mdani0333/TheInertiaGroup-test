import React, {useContext} from "react";
import "./store.css";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import { ProductContext } from "../context-hook/productContext";

export function Store({ addToCart }) {
  const products = useContext(ProductContext);

  return (
    <div>
      <div className="product-box">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <Link to={`/product${item.id}`} className="product-link">
              <img src={item.image} alt="" className="product-img" />
              <div className="product-text-padding">
                <h2>{item.name}</h2>
                <label className="span-box">
                  <span className="product-price">${item.price}</span>
                </label>
                <Link to="/my/cart">
                  <button
                    className="product-btn"
                    onClick={() =>
                      addToCart({
                        id: item.id,
                        name: item.name,
                        category: item.category,
                        image: item.image,
                        price: item.price,
                        description: item.description,
                      })
                    }
                  >
                    Add to Cart
                    <BiShoppingBag />
                  </button>
                </Link>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
