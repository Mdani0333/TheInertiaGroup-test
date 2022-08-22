import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <span>Grocery Store</span>
      <Link to="/" className="links">
        Store
      </Link>
      <span>
        <button className="nav-btn">
          <Link to="/my/cart" className="icon-links">
            <BiShoppingBag />
          </Link>
        </button>
      </span>
    </nav>
  );
}
