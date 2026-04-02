// import React from "react";
// import { useMemo, useState } from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Products from "./components/Products";
// import Cart from "./components/Cart";
// import Footer from "./components/Footer";

// const productData = [
//   {
//     id: 1,
//     name: "Luxury Sofa",
//     price: 25000,
//     category: "Living Room",
//     image:
//       "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     id: 2,
//     name: "Wooden Chair",
//     price: 5000,
//     category: "Chair",
//     image:
//       "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     id: 3,
//     name: "Modern Table",
//     price: 10000,
//     category: "Table",
//     image:
//       "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     id: 4,
//     name: "Classic Lamp",
//     price: 3500,
//     category: "Decor",
//     image:
//       "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     id: 5,
//     name: "Comfort Bed",
//     price: 30000,
//     category: "Bedroom",
//     image:
//       "https://images.unsplash.com/photo-1505693533403-7c6d5d7e1f3c?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     id: 6,
//     name: "Office Chair",
//     price: 8500,
//     category: "Office",
//     image:
//       "https://images.unsplash.com/photo-1582582621959-48d27397dc69?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     id: 7,
//     name: "Dining Table",
//     price: 18000,
//     category: "Dining",
//     image:
//       "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     id: 8,
//     name: "Bookshelf",
//     price: 12000,
//     category: "Storage",
//     image:
//       "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     id: 9,
//     name: "TV Unit",
//     price: 14000,
//     category: "Living Room",
//     image:
//       "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=400&q=80",
//   },
// ];

// function App() {
//   const [search, setSearch] = useState("");
//   const [cart, setCart] = useState([]);

//   const filteredProducts = useMemo(() => {
//     return productData.filter((item) =>
//       item.name.toLowerCase().includes(search.toLowerCase()),
//     );
//   }, [search]);

//   const addToCart = (product) => {
//     const existingItem = cart.find((item) => item.id === product.id);

//     if (existingItem) {
//       setCart(
//         cart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item,
//         ),
//       );
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   const removeFromCart = (id) => {
//     const existingItem = cart.find((item) => item.id === id);

//     if (!existingItem) return;

//     if (existingItem.quantity === 1) {
//       setCart(cart.filter((item) => item.id !== id));
//     } else {
//       setCart(
//         cart.map((item) =>
//           item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
//         ),
//       );
//     }
//   };

//   const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
//   const totalPrice = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0,
//   );

//   return (
//     <>
//       <Navbar cartCount={cartCount} search={search} setSearch={setSearch} />
//       <Hero />
//       <Products products={filteredProducts} addToCart={addToCart} />
//       <Cart
//         cart={cart}
//         removeFromCart={removeFromCart}
//         totalPrice={totalPrice}
//       />
//       <Footer />
//     </>
//   );
// }

// export default App;

// /* Better product grid */

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default App;
