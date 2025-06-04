import "../css/ProductCard.css";
import { useProductContext } from "../contexts/ProductContext";
import { FaShoppingBasket } from "react-icons/fa";

function ProductCard({ product }) {
  const { inCart, addToCart, removeFromCart } = useProductContext();
  const addedToCart = inCart(product.id);

  function handleAddToCart() {
    if (addedToCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  }

  return (
    <div className="product-card">
      <div className="product-poster">
        <img src={product.poster} alt={product.title}></img>
      </div>
      <div className="product-overlay">
        <button
          className={`favorite-btn ${addedToCart ? "active" : ""}`}
          onClick={handleAddToCart}
        >
          <FaShoppingBasket />
        </button>
      </div>
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>VND {product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
