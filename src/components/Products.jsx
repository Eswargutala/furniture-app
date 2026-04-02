import React from "react";

export default function Products({ products, addToCart }) {
  return (
    <section className="products-section" id="products">
      <div className="section-heading">
        <p>Our Collection</p>
        <h2>Featured Products</h2>
      </div>

      <div className="products-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="product-image-wrap">
              <img src={item.image} alt={item.name} className="product-image" />
            </div>

            <div className="product-info">
              <h3>{item.name}</h3>
              <p className="product-price">₹{item.price.toLocaleString("en-IN")}</p>
              <button onClick={() => addToCart(item)} className="add-cart-btn">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}