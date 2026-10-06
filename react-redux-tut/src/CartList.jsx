import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAllItems, removeItem } from "./redux/slice";
import { useNavigate } from "react-router-dom";

function CartList() {
  const cartSelector = useSelector((state) => state.cart.items);
  console.log(cartSelector);
  const [cartItems, setCartItems] = useState(cartSelector);

  useEffect(() => {
    setCartItems(cartSelector);
  }, [cartSelector]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const manageQuantity = (id, q) => {
    let quantity = parseInt(q) > 1 ? parseInt(q) : 1;
    const cartTempItems = cartSelector.map((item) => {
      return item.id == id ? { ...item, quantity } : item;
    });
    console.log("cartTempItems : ", cartTempItems[0]);
    setCartItems(cartTempItems);
  };

  const handlPlaceOrder = () => {
    localStorage.clear();
    dispatch(clearAllItems());
    alert("Order placed!!");
    navigate("/");
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Cart Items</h2>
        <span>{cartItems.length} item(s)</span>
      </div>

      {cartItems.length > 0 ? (
        <div className="cart-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-info">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="cart-item-image"
                />

                <div className="item-details">
                  <h4>{item.title}</h4>
                  <p>{item.brand}</p>
                </div>
              </div>

              <div className="item-actions">
                <span className="price">
                  $
                  {(item.quantity
                    ? item.price * item.quantity
                    : item.price
                  ).toFixed(2)}
                </span>
                <input
                  className="quantity-input"
                  type="number"
                  min="1"
                  value={item.quantity || 1}
                  placeholder="enter"
                  onChange={(e) => {
                    manageQuantity(item.id, e.target.value);
                  }}
                />
                <button
                  onClick={() => dispatch(removeItem(item))}
                  className="btn"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <span>Total</span>
            <strong>
              $
              {cartItems
                .reduce(
                  (total, item) =>
                    item.quantity
                      ? total + item.price * item.quantity
                      : total + item.price,
                  0,
                )
                .toFixed(2)}
            </strong>
          </div>
          <button onClick={handlPlaceOrder} className="place-order-btn">
            Place Order
          </button>
        </div>
      ) : (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h3>Your cart is empty</h3>
          <p>Add some products to your cart to see them here.</p>
        </div>
      )}
    </div>
  );
}

export default CartList;
