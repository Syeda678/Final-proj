import React from "react";
import { useState } from "react";

import { shopItems } from "../../pages/data";
/*
export default function Cart(props) {
  const { cartItems } = props;

  return (
    <div className="products">
      <h2>Cart Items</h2>
      <div>
        {cartItems === 0 && (
          <div>
            <p>Cart is Empty</p>
          </div>
        )}
      </div>
    </div>
  );
}*/

const Cart = () => {
  const [product] = useState(shopItems);

  const [cart, setCart] = useState([]);

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  return (
    <>
      <div className="products">
        <div className="container">
          <p>This is my cart</p>
          {cart.map((product, index) => (
            <div className="cards" key={index}>
              <img src={product.image} alt="" />
              <h3>{product.name}</h3>
              <h4>${product.price}</h4>
              <button onClick={() => removeFromCart(product)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
