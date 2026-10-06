import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./slice";
import { useEffect } from "react";
import { fetchProducts } from "./productSlice";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productSelector = useSelector((state) => state.products.items);

  console.log("productSelector : ", productSelector);

  const cartSelector = useSelector((state) => state.cart.items);
  console.log("cartSelector : ", cartSelector);

  return (
    <main class="container">
      <div class="product-grid">
        {productSelector.length &&
          productSelector.map((item) => (
            <div key={item.id} class="product-card">
              <div class="product-image">
                <span class="discount">{item.discountPercentage}% OFF</span>
                {/* <button class="wishlist">♡</button> */}
                <img src={item.thumbnail} alt="Running Shoes" />
              </div>

              <div class="product-info">
                <div class="product-category">{item.category}</div>
                <div class="product-name">{item.title}</div>
                <div class="price-row">
                  <span class="price">{item.price}</span>
                  {/* <span class="old-price">₹1,999</span> */}
                </div>

                {/* <button
                  onClick={() => {
                    dispatch(addItem(1));
                    console.log("clicked");
                  }}
                  class="add-cart"
                >
                  🛒 Add to Cart
                </button>

                <button
                  onClick={() => {
                    dispatch(removeItem());
                    console.log("clicked");
                  }}
                  class="add-cart remove-btn"
                >
                  🛒 Remove from Cart
                </button> */}
                {/* API */}

                {cartSelector.find((cartItem) => cartItem.id === item.id) ? (
                  // <button class="add-cart" disabled>
                  //   🛒 Added to Cart
                  // </button>
                  <button
                    onClick={() => {
                      dispatch(removeItem(item));
                      console.log("clicked");
                    }}
                    class="add-cart remove-btn"
                  >
                    🛒 Remove from Cart
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      dispatch(addItem(item));
                      console.log("clicked");
                    }}
                    class="add-cart"
                  >
                    🛒 Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
      </div>
    </main>
  );
};

export default Product;

{
  /* <button
              onClick={() => {
                dispatch(addItem(1));
                console.log("clicked");
              }}
              class="add-cart"
            >
              🛒 Add to Cart
            </button>

            <button
              onClick={() => {
                dispatch(removeItem());
                console.log("clicked");
              }}
              class="add-cart remove-btn"
            >
              🛒 Remove from Cart
            </button> */
}
