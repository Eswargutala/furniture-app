import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-tag">Luxury Collection 2026</p>
          <h1>Elevate Your Home With Premium Furniture</h1>
          <p>
            Discover elegant sofas, modern tables, premium chairs, and stylish
            décor crafted to transform your living space.
          </p>
          <div className="hero-buttons">
            <a href="#products" className="shop-btn">
              Shop Now
            </a>
            <a href="#products" className="explore-btn">
              Explore Collection
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}