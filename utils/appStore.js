import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    // this reducer is responsible to modify appStore , its a combination of small stores
    cart: cartReducer,
  },
});
export default appStore;
// each slice has its own reducer and store has reducer itself.
// so this store reducer contains small reducers of all each slice
