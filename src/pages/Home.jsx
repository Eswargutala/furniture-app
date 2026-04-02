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
      "https://res.cloudinary.com/ddsjdarbq/image/upload/v1775133054/61uK6FIyTsL._AC_UF894_1000_QL80__myriuk.jpg",
  },
  {
    id: 2,
    name: "Wooden Chair",
    price: 5000,
    category: "Chair",
    image:
      "https://res.cloudinary.com/ddsjdarbq/image/upload/v1775132961/28402-HERO_e571037d-c4e7-4e78-b49b-810c2ade01cc_ptmf2p.jpg",
  },
  {
    id: 3,
    name: "Modern Table",
    price: 10000,
    category: "Table",
    image:
      "https://res.cloudinary.com/ddsjdarbq/image/upload/v1775133053/41V8a30UQcL._AC_SR290_290__xnvor2.jpg",
  },
  {
    id: 4,
    name: "Classic Lamp",
    price: 3500,
    category: "Decor",
    image:
      "https://res.cloudinary.com/ddsjdarbq/image/upload/v1775132924/71xaR3qz7TL._AC_UF894_1000_QL80__ormcfs.jpg",
  },
  {
    id: 5,
    name: "Comfort Bed",
    price: 30000,
    category: "Bedroom",
    image:
      "https://res.cloudinary.com/ddsjdarbq/image/upload/v1775133093/Kishani_20Perera_Point_20Dume_20Project_Photographer_20Anthony_20Barcelo_oj28at.jpg",
  },
  {
    id: 6,
    name: "Office Chair",
    price: 8500,
    category: "Office",
    image:
      "https://res.cloudinary.com/ddsjdarbq/image/upload/v1775133135/Swift-chair-1_fdeuzg.jpg",
  },
  {
    id: 7,
    name: "Dining Table",
    price: 18000,
    category: "Dining",
    image:
      "https://res.cloudinary.com/ddsjdarbq/image/upload/v1775133156/81e9-6jgWRL._AC_UF894_1000_QL80__m5xgqk.jpg",
  },
  {
    id: 8,
    name: "Bookshelf",
    price: 12000,
    category: "Storage",
    image:
      "https://res.cloudinary.com/ddsjdarbq/image/upload/v1775133201/71lKNCUF8kL._AC_UF894_1000_QL80__frt00a.jpg",
  },
  {
    id: 9,
    name: "TV Unit",
    price: 14000,
    category: "Living Room",
    image:
      "https://res.cloudinary.com/ddsjdarbq/image/upload/v1775133242/brimnes-tv-unit-white__1454290_pe991599_s5_kvkkuj.jpg",
  },
  {
    id: 10,
    name: "Recliner Sofa",
    price: 35000,
    category: "Living Room",
    image:
      "https://res.cloudinary.com/ddsjdarbq/image/upload/v1775133265/Jaron-3-Seater-Dual-Recliner-Wide-Arm-Sofa-Performance-Arvo-Dune-Square-Set_3-1742205787_k0ql2o.jpg",
  },
  {
    id: 11,
    name: "Coffee Table",
    price: 8000,
    category: "Table",
    image:
      "https://res.cloudinary.com/ddsjdarbq/image/upload/v1775133055/Luxury-New-design-Living-Room-Furniture-Antique-End-Marble-Base-Side-Round-Metal-Storage-Gold-Modern-Design-Black-Coffee-Table.jpg_300x300_xkvioi.jpg",
  },
  {
    id: 12,
    name: "Nightstand",
    price: 6000,
    category: "Bedroom",
    image:
      "https://res.cloudinary.com/ddsjdarbq/image/upload/v1775133301/710Zvao8cDL_ubzbpu.jpg",
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
