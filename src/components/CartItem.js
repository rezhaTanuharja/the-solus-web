import "../css/CartItem.css";
import { useProductContext } from "../contexts/ProductContext";

function CartItem({ product }) {
  const { cart, removeFromCart, updateQuantity } = useProductContext();
  const productInCart = cart.find((item) => item.id === product.id);

  function handleIncreaseQuantity() {
    updateQuantity(product.id, productInCart.quantity + 1);
  }

  function handleDecreaseQuantity() {
    if (productInCart.quantity > 1) {
      updateQuantity(product.id, productInCart.quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  }

  return (
    <div className="item-card">
      <div className="item-info">
        <h3>{product.title}</h3>
      </div>
      <div className="quantity-controls">
        <button onClick={handleDecreaseQuantity}>-</button>
        <span className="quantity">{productInCart?.quantity || 0}</span>
        <button onClick={handleIncreaseQuantity}>+</button>
      </div>
      <div className="amount">
        <span className="amount-box">{productInCart?.totalPrice || 0}</span>
      </div>
    </div>
  );
}

export default CartItem;
