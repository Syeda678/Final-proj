import { Link } from "react-router-dom";
import Cart from "./cart/Cart";
import { useState } from "react";

const NavBar = () => {
  const [cart, setCart] = useState([]);

  return (
    <div className="header">
      <Link to="/">
        <a href="#" class="logo">
          The Fitness Zone
        </a>
      </Link>
      <nav>
        <ul class="nav_tabs">
          <li>
            <Link to="/about">
              <a href="#">About</a>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <a href="#">Contact</a>
            </Link>
          </li>
          <li>
            <Link to="/cart" cart={cart} className="cart">
              <a href="#">Cart ({Cart.length})</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
