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

    image:
      "https://res.cloudinary.com/ddsjdarbq/image/upload/v1775133054/61uK6FIyTsL._AC_UF894_1000_QL80__myriuk.jpg",
  },
  {
    id: 2,
    name: "Wooden Chair",
    price: 5000,
    image:
      "https://res.cloudinary.com/ddsjdarbq/image/upload/v1775132961/28402-HERO_e571037d-c4e7-4e78-b49b-810c2ade01cc_ptmf2p.jpg",
  },
  {
    id: 3,
    name: "Modern Table",
    price: 10000,
    image:
      "https://res.cloudinary.com/ddsjdarbq/image/upload/v1775133053/41V8a30UQcL._AC_SR290_290__xnvor2.jpg",
  },
  {
    id: 4,
    name: "Classic Lamp",
    price: 3500,
    image:
      "https://res.cloudinary.com/ddsjdarbq/image/upload/v1775132924/71xaR3qz7TL._AC_UF894_1000_QL80__ormcfs.jpg",
  },
  {
    id: 5,
    name: "Comfort Bed",
    price: 30000,

    image:
      "https://res.cloudinary.com/ddsjdarbq/image/upload/v1775133094/A-Sophisticated-Bedroom-with-Balanced-Contrast-and-Textural-Depth_si9r9h.jpg",
  },
  {
    id: 6,
    name: "Office Chair",
    price: 8500,

    image:
      "https://res.cloudinary.com/ddsjdarbq/image/upload/v1775133135/Swift-chair-1_fdeuzg.jpg",
  },
  {
    id: 7,
    name: "Dining Table",
    price: 18000,

    image:
      "https://res.cloudinary.com/ddsjdarbq/image/upload/v1775133156/81e9-6jgWRL._AC_UF894_1000_QL80__m5xgqk.jpg",
  },
  {
    id: 8,
    name: "Bookshelf",
    price: 12000,

    image:
      "https://res.cloudinary.com/ddsjdarbq/image/upload/v1775133201/71lKNCUF8kL._AC_UF894_1000_QL80__frt00a.jpg",
  },
  {
    id: 9,
    name: "TV Unit",
    price: 14000,

    image:
      "https://res.cloudinary.com/ddsjdarbq/image/upload/v1775133242/brimnes-tv-unit-white__1454290_pe991599_s5_kvkkuj.jpg",
  },
  {
    id: 10,
    name: "Night stand",
    price: 14000,

    image:
      "https://res.cloudinary.com/ddsjdarbq/image/upload/v1775133301/710Zvao8cDL_ubzbpu.jpg",
  },
  {
    id: 11,
    name: "Recliner sofa",
    price: 14000,

    image:
      "https://res.cloudinary.com/ddsjdarbq/image/upload/v1775133265/Jaron-3-Seater-Dual-Recliner-Wide-Arm-Sofa-Performance-Arvo-Dune-Square-Set_3-1742205787_k0ql2o.jpg",
  },
  {
    id: 12,
    name: "Cofee table",
    price: 14000,

    image:
      "https://res.cloudinary.com/ddsjdarbq/image/upload/v1775133055/Luxury-New-design-Living-Room-Furniture-Antique-End-Marble-Base-Side-Round-Metal-Storage-Gold-Modern-Design-Black-Coffee-Table.jpg_300x300_xkvioi.jpg",
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

  const scrollToProducts = () => {
    const section = document.getElementById("products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar cartCount={cartCount} search={search} setSearch={setSearch} />
      <Hero />

      <section className="highlight-section">
        <div className="highlight-heading">
          <p>Highlighted</p>
          <h2>Featured Premium Furniture</h2>
        </div>

        <div className="highlight-card left" onClick={scrollToProducts}>
          <img
            src="https://res.cloudinary.com/ddsjdarbq/image/upload/v1775134966/61gUUqAdRwL._AC_UF894_1000_QL80__zvv6wc.jpg"
            alt="Luxury Sofa"
          />
          <div className="highlight-overlay">
            <div className="highlight-content">
              <span className="highlight-badge">Best Seller</span>
              <h2>Luxury Sofa Set</h2>
              <p>
                Bring elegance and comfort into your living room with a premium
                sofa crafted for modern interiors.
              </p>
              <ul>
                <li>Soft premium cushioning</li>
                <li>Elegant modern design</li>
                <li>Perfect for spacious living rooms</li>
              </ul>
              <button
                className="buy-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToProducts();
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div className="highlight-card right" onClick={scrollToProducts}>
          <img
            src="https://res.cloudinary.com/ddsjdarbq/image/upload/v1775135024/hq720_yxexiy.jpg"
            alt="Comfort Bed"
          />
          <div className="highlight-overlay">
            <div className="highlight-content">
              <span className="highlight-badge">New Arrival</span>
              <h2>Comfort Bed</h2>
              <p>
                Upgrade your bedroom with a stylish premium bed designed for
                luxury, comfort, and daily relaxation.
              </p>
              <ul>
                <li>Strong wooden frame</li>
                <li>Premium bedroom finish</li>
                <li>Comfort-focused design</li>
              </ul>
              <button
                className="buy-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToProducts();
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <Products products={filteredProducts} addToCart={addToCart} />
      <Footer />
    </>
  );
}

export default Home;
