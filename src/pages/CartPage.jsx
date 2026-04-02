import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function CartPage() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const removeFromCart = (id) => {
    const existingItem = cart.find((item) => item.id === id);

    if (!existingItem) return;

    if (existingItem.quantity === 1) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        ),
      );
    }
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <section className="cart-page">
      <div className="cart-page-top">
        <h1>Your Cart</h1>
        <Link to="/" className="back-home-btn">
          ← Back to Home
        </Link>
      </div>

      {cart.length === 0 ? (
        <div className="cart-empty">No items added yet.</div>
      ) : (
        <div className="cart-box">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-left">
                <img src={item.image} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>₹{item.price.toLocaleString("en-IN")}</p>
                  <span>Quantity: {item.quantity}</span>
                </div>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="cart-total">
            <h3>Total: ₹{totalPrice.toLocaleString("en-IN")}</h3>
          </div>
        </div>
      )}
    </section>
  );
}

export default CartPage;
