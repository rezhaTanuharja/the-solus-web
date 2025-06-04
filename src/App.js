import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ShoppingCart from "./pages/ShoppingCart";
import NavigationBar from "./components/NavigationBar";
import { ProductProvider } from "./contexts/ProductContext";

function App() {
  return (
    <ProductProvider>
      <NavigationBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Routes>
      </div>
    </ProductProvider>
  );
}

export default App;
