import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Cart from "./cart/Cart";
import { useState } from "react";

const NavBar = () => {
  const [cart, setCart] = useState([]);

  return (
    <ButtonToolbar className="custom-btn-toolbar">
      <Link to="/">
        <Button className="logo">Home</Button>
      </Link>
      <Link to="/about">
        <Button>About</Button>
      </Link>
      <Link to="/contact">
        <Button>Contact</Button>
      </Link>
      <Link to="/cart">
        <Button cart={cart} className="cart">
          Cart ({Cart.length})
        </Button>
      </Link>
    </ButtonToolbar>
  );
};

export default NavBar;
