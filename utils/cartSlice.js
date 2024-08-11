import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItems: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});
console.log(cartSlice);
export const { addItem, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// createSlice function return an obj in this cart slice.
// {
//   actions:{
//     addItem ,removeItem
//   },
//  reducer
// }
// cart slice is like a big object which has actions and reducers
