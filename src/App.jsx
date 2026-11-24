import { useState } from "react";
import products from "./data/products";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  // Cart state (the only state in App for Lab 3)
  const [count, setCount] = useState(0);
  const [lastAdded, setLastAdded] = useState("");

  // Callback passed down to every ProductCard through onAddToCart
  const handleAddToCart = (title) => {
    setCount(count + 1);
    setLastAdded(title);
  };

  // Badges passed to cards through the children prop (product id -> badge)
  const badges = {
    1: <span>New</span>,
    5: <span>Sale</span>,
  };

  return (
    <div className="app">
      <h1 className="app__title">CvSU Mini Store</h1>
      <p className="cart-message">
        {count === 0
          ? "Your cart is empty."
          : `Items added to cart: ${count} (Last added: ${lastAdded})`}
      </p>

      <div className="grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            category={product.category}
            inStock={product.inStock}
            onAddToCart={handleAddToCart}
          >
            {badges[product.id]}
          </ProductCard>
        ))}
      </div>
    </div>
  );
}

export default App;
