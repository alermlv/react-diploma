import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.cartItems.find((item) => item.id === action.payload.id)) {
        state.cartItems.find((item) => (item.amount += action.payload.amount));
        return;
      }
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== itemId;
      });
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += 1;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
    updateLocalStorage: (state) => {
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    updateCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    submitCart: (state) => {
      state.cartItems = [];
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  calculateTotals,
  updateLocalStorage,
  updateCartItems,
  submitCart,
} = cartSlice.actions;

export default cartSlice.reducer;
