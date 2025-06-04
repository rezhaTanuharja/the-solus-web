// import "../css/ShoppingCart.css";
// import { useProductContext } from "../contexts/ProductContext";
// import ProductCard from "../components/ProductCard";
//
// function ShoppingCart() {
//   const { cart } = useProductContext();
//
//   if (!cart || cart.length === 0) {
//     return (
//       <div className="shopping-cart-empty">
//         <h2>No item in the shopping cart</h2>
//         <p>Start adding items to your cart and they will appear here</p>
//       </div>
//     );
//   }
//
//   return (
//     <div className="shopping-cart">
//       <h2>Your Shopping Cart</h2>
//       <div className="products-grid">
//         {cart.map((product) => (
//           <ProductCard product={product} key={product.id} />
//         ))}
//       </div>
//     </div>
//   );
// }
//
// export default ShoppingCart;
import "../css/ShoppingCart.css";
// import { useProductContext } from "../contexts/ProductContext";
// import ProductCard from "../components/ProductCard";
// import CartItem from "../components/CartItem";
//
// function ShoppingCart() {
//   const { cart } = useProductContext();
//
//   // Check if cart is empty
//   if (!cart || cart.length === 0) {
//     return (
//       <div className="shopping-cart-empty">
//         <h2>No items in the shopping cart</h2>
//         <p>Start adding items to your cart and they will appear here.</p>
//       </div>
//     );
//   }
//
//   return (
//     <div className="shopping-cart">
//       <h2>Your Shopping Cart</h2>
//       <div className="products-grid">
//         {cart.map(({ product, quantity }) => (
//           <CartItem key={product.id} product={product} quantity={quantity} />
//         ))}
//       </div>
//     </div>
//   );
// }
//
// export default ShoppingCart;
import "../css/ShoppingCart.css";
import { useProductContext } from "../contexts/ProductContext";
import CartItem from "../components/CartItem";

function ShoppingCart() {
  const { cart } = useProductContext();

  if (!cart || cart.length === 0) {
    return (
      <div className="shopping-cart-empty">
        <h2>No item in the shopping cart</h2>
        <p>Start adding items to your cart and they will appear here</p>
      </div>
    );
  }

  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      <div className="items-grid">
        {cart.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ShoppingCart;
