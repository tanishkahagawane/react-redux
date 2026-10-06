import { Link } from "react-router-dom";
import AddToCart from "./AddToCart";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <a href="#" className="logo">
          Shop<span>Now</span>
        </a>

        <div className="header-actions">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>

          <AddToCart />
        </div>
      </div>
      {/* 
      <nav className="navigation">
        <a href="#">Home</a>
        <a href="#">Electronics</a>
        <a href="#">Fashion</a>
        <a href="#">Beauty</a>
        <a href="#">Shoes</a>
        <a href="#">Offers</a>
      </nav> */}
    </header>
  );
};

export default Header;
