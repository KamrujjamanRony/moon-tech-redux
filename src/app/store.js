import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cartSlice from "../features/cart/cartSlice";
import filterSlice from "../features/filter/filterSlice";
import productsSlice from "../features/products/productsSlice";
export const store = configureStore({
  reducer: {
    carts: cartSlice,
    filters: filterSlice,
    products: productsSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
