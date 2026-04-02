import React from "react";

export default function Products({ products, addToCart }) {
  return (
    <section className="products-section" id="products">
      <div className="section-head">
        <p className="section-tag">Our Collection</p>
        <h2>Featured Furniture</h2>
      </div>

      <div className="products-grid">
        {products.length > 0 ? (
          products.map((item) => (
            <div className="product-card" key={item.id}>
              <div className="product-image-wrap">
                <img
                  src={item.image}
                  alt={item.name}
                  className="product-image"
                />
              </div>

              <div className="product-info">
                <span className="product-category">{item.category}</span>
                <h3>{item.name}</h3>
                <p className="product-desc">
                  Elegant and durable furniture piece designed to improve your
                  space with modern style and everyday comfort.
                </p>
                <p className="price">₹{item.price.toLocaleString("en-IN")}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            </div>
          ))
        ) : (
          <p className="empty-text">No furniture found.</p>
        )}
      </div>
    </section>
  );
}

