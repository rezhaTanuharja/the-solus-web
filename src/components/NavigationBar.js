import "../css/NavigationBar.css";
import solusLogo from "../images/solus.png";

import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="nav-link">
          <img src={solusLogo} alt="logo" className="navbar-logo"></img>
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/shopping-cart" className="nav-link">
          Cart
        </Link>
      </div>
    </nav>
  );
}

export default NavigationBar;
