import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   value: 0,
// };

//API
const initialState = {
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const addToCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // addItem: (state) => {
    //   state.value += 1;
    // },
    //API
    addItem: (state, action) => {
      console.log(action);
      state.items.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    // removeItem: (state) => {
    //   state.value > 0 ? (state.value -= 1) : null;
    // },
    //API
    removeItem: (state, action) => {
      const cartData = state.items.filter(
        (item) => item.id != action.payload.id,
      );
      state.items = cartData;
      localStorage.setItem("cart", JSON.stringify(cartData));
    },
    // clearAllItems: (state) => {
    //   state.value = 0;
    // },
    //API

    clearAllItems: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearAllItems } = addToCart.actions;
export default addToCart.reducer;
