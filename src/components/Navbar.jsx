import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ cartCount, search, setSearch }) {
  return (
    <nav className="navbar">
      <div className="logo-wrap">
        <div className="logo-icon">F</div>
        <div className="logo-text">
          <h2>FurniShop</h2>
          <span>Modern Furniture</span>
        </div>
      </div>

      <div className="nav-center">
        <input
          type="text"
          placeholder="Search premium furniture..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Link to="/cart" className="cart-link">
        <span className="cart-icon">🛒</span>
        <span className="cart-count">{cartCount}</span>
      </Link>
    </nav>
  );
}