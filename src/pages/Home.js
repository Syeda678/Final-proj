import { useState } from "react";
import "../App.css";
import { shopItems } from "./data";

const Home = () => {
  const [products] = useState(shopItems);

  const [cart, setCart] = useState([]);

  const addTocart = (product) => {
    //console.log("this my cart");
    setCart([...cart, product]);
  };
  return (
    <div className="container">
      <h1>Products</h1>
      <div className="products">
        {products.map((product, index) => (
          <div className="cards" key={index}>
            <img src={product.image} alt="" />
            <h3>{product.name}</h3>
            <h4>${product.price}</h4>
            <button onClick={() => addTocart(product)}>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
