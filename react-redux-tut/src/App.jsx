// import { useDispatch } from "react-redux";
import "./App.css";
import CartList from "./CartList";
import Header from "./redux/Header";
import Product from "./redux/Product";
// import { clearAllItems } from "./redux/slice";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  // const dispatch = useDispatch();
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <button
        onClick={() => dispatch(clearAllItems())}
        className="add-cart clr-btn"
      >
        Clear Cart
      </button> */}

        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/cart" element={<CartList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
