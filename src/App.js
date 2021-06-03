import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Cart from "./components/cart/Cart";

import "./index.css";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch className="body">
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
