import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: {
    stock: false,
    brands: [],
    keyword: "",
  },
};

const filterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggle: (state) => {
      state.stock = !state.stock;
    },

    toggleBrands: (state, action) => {
      if(!state.brands.includes(action.payload)){
        state.brands.push(action.payload)
      } else{
        state.brands = state.brands.filter((brand) => brand !== action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle, toggleBrands } = filterSlice.actions;

export default filterSlice.reducer;
