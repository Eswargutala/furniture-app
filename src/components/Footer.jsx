import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-box">
          <h3>FurniShop</h3>
          <p>
            Premium furniture for modern homes. We bring comfort, quality, and
            elegant style to every room.
          </p>
        </div>

        <div className="footer-box">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#products">Products</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-box">
          <h4>Contact</h4>
          <p>Email: support@furnishop.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Hyderabad, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 FurniShop. All rights reserved.</p>
      </div>
    </footer>
  );
}
