// props = an object that holds the data passed into a component.
// Here we destructure "product" and "onAddToCart" out of props.
function ProductCard({ product, onAddToCart }) {
  // A conditional expression: show "In Stock" or "Out of Stock"
  const stockStatus = product.stock > 0 ? "In Stock" : "Out of Stock";
  // The CSS class also changes with the stock: green or red text.
  const stockClass = product.stock > 0 ? "stock-in" : "stock-out";

  // JSX = HTML-like syntax that React renders on the page.
  return (
    <div className="card">
      <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      {/* toLocaleString() adds commas: 85000 -> "85,000" */}
      <p>Price: Rs. {product.price.toLocaleString()}</p>
      <p className={stockClass}>{stockStatus}</p>
      {/* onClick runs the handler App sent us. disabled blocks the click
          when stock is 0, so the Mouse button can't be pressed. */}
      <button onClick={onAddToCart} disabled={product.stock === 0}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
