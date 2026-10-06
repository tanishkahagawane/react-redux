import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AddToCart = () => {
  // const selector = useSelector((state) => state.cart.value);
  const cartSelector = useSelector((state) => state.cart.items);
  console.log("S : ", cartSelector);
  return (
    <div className="cart">
      <Link to="/cart">
        <span className="cart-icon">🛒</span>
        <span>Cart</span>
        <span className="cart-count">
          {cartSelector.length ? cartSelector.length : 0}
        </span>
      </Link>
    </div>
  );
};

export default AddToCart;
