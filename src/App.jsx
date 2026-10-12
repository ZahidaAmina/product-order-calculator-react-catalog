import { useState } from 'react'
import ProductCard from './components/ProductCard.jsx'
import './App.css'

// An array of product objects — we will render one card per item.
const products = [
  { id: 1, name: "Laptop", category: "Electronics", price: 85000, stock: 5 },
  { id: 2, name: "Mouse", category: "Accessories", price: 1500, stock: 0 },
  { id: 3, name: "Keyboard", category: "Accessories", price: 3500, stock: 10 },
  { id: 4, name: "Monitor", category: "Electronics", price: 25000, stock: 3 },
  { id: 5, name: "USB Cable", category: "Accessories", price: 700, stock: 15 },
];
function App() {
  //UseState gives us the current value (cartCount) and a setter (setCartCount) to update it.
  const [cartCount, setCartCount] = useState(0);

  // An event handler: It increases the cart count by 1.
  function handleAddToCart() {
    setCartCount(cartCount + 1);
  }

  return (
    <div className="app">
      <h1>Product Catalog</h1>
      <p className="cart-count">
        Cart Items: <span>{cartCount}</span>
      </p>
      <div className="grid">
        {/* map() turns the products array into one ProductCard each */}
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
