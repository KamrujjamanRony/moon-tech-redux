import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  error: "",
};
//get products
export const getProducts = createAsyncThunk("products/getProduct", async() => {
    const res = await fetch("products.json");
    const data = await res.json();
    return data;
});
const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder
          .addCase(getProducts.pending, (state, action) => {
            state.isLoading = true;
            state.isError = false;
          })
          .addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
          })
          .addCase(getProducts.rejected, (state, action) => {
            state.products = [];
            state.isLoading = false;
            state.isError = true;
            state.error = action.error.message;
          });
    },
});
export default productsSlice.reducer;