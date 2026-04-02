import React, { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Footer from "../components/Footer";

const productData = [
  {
    id: 1,
    name: "Luxury Sofa",
    price: 25000,
    category: "Living Room",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Wooden Chair",
    price: 5000,
    category: "Chair",
    image:
      "https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Modern Table",
    price: 10000,
    category: "Table",
    image:
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 4,
    name: "Classic Lamp",
    price: 3500,
    category: "Decor",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    name: "Comfort Bed",
    price: 30000,
    category: "Bedroom",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 6,
    name: "Office Chair",
    price: 8500,
    category: "Office",
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 7,
    name: "Dining Table",
    price: 18000,
    category: "Dining",
    image:
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 8,
    name: "Bookshelf",
    price: 12000,
    category: "Storage",
    image:
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 9,
    name: "TV Unit",
    price: 14000,
    category: "Living Room",
    image:
      "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=400&q=80",
  },
];

function Home() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const filteredProducts = useMemo(() => {
    return productData.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Navbar cartCount={cartCount} search={search} setSearch={setSearch} />
      <Hero />
      <Products products={filteredProducts} addToCart={addToCart} />
      <Footer />
    </>
  );
}

export default Home;
