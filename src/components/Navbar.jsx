// import React from "react";

// export default function Navbar({ cartCount, search, setSearch }) {
//   return (
//     <nav className="navbar">
//       <div className="logo">FurniShop</div>

//       <div className="nav-center">
//         <input
//           type="text"
//           placeholder="Search furniture..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       <div className="cart-badge">🛒 {cartCount}</div>
//     </nav>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ cartCount, search, setSearch }) {
  return (
    <nav className="navbar">
      <div className="logo">FurniShop</div>

      <div className="nav-center">
        <input
          type="text"
          placeholder="Search furniture..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Link to="/cart" className="cart-link">
        🛒 {cartCount}
      </Link>
    </nav>
  );
}
