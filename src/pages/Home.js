import { useEffect } from "react";
import { useState } from "react";
import "../App.css";
import { shopItems } from "./data";
import Modal from "../components/cart/Cart";

const Home = () => {
  const [products, setProducts] = useState(shopItems);

  const [cart, setCart] = useState([]);

  const [totalCart, setTotalCart] = useState(0);

  const addTocart = (product) => {
    //console.log("this my cart");
    setCart([...cart, { ...product }]);
  };

  useEffect(() => {
    total();
  }, [cart]);

  const total = () => {
    let totalVal = 0;
    for (let i = 0; i < cart.length; i++) {
      totalVal += cart[i].price;
    }
    setTotalCart(totalVal);
  };

  const cartItems = cart.map((product) => (
    <div key={product.id}>
      {`${product.name}: $${product.price}   `}
      <input
        className="add"
        type="submit"
        value="Remove"
        onClick={() => removeFromCart(product)}
      />
    </div>
  ));

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };

  const [status, setStatus] = useState(false);

  return (
    <>
      <div className="container">
        <img
          src="https://image.freepik.com/free-photo/banner-web-page-cover-template-group-diversity-practicing-yoga-class_41418-3641.jpg"
          alt=""
        />
        <h1 className="title-home">THE FITNESS ZONE</h1>
        <p className="title-text">Essentials for every practice.</p>
        <h2>
          Products{" "}
          <span>
            {" "}
            <button
              onClick={() => setStatus(true)}
              id="myBtn"
              className="cart-btn"
            >
              <h2>Cart ({cart.length})</h2>
            </button>
          </span>
        </h2>
        <div className="products">
          {products.map((product) => (
            <div className="cards" key={product.id}>
              <img src={product.image} alt="" />
              <div className="details">
                <h3>{product.name}</h3>
                <h4>${product.price}</h4>
                <input
                  className="add"
                  type="submit"
                  value="Add to Cart"
                  onClick={() => addTocart(product)}
                />
              </div>
            </div>
          ))}
        </div>
        {status && (
          <Modal
            closeModal={() => setStatus(false)}
            id="myModal"
            className="modal"
          >
            <div className="modal-context">
              <div className="modal-box">
                <h3>Your Cart Items:</h3>
                <div className="cards-2">
                  {cartItems}
                  <div>
                    <h4>Total: ${totalCart}</h4>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};

export default Home;
