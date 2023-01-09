import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  filter: {
    stock: false,
    brands: [],
    keyword: "",
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    toggle: (state) => {
      state.filter.stock = !state.filter.stock;
    },

    toggleBrands: (state, action) => {
      console.log("hi")
      if(!state.filter.brands.includes(action.payload)){
        state.filter.brands.push(action.payload);
      } else{
        state.filter.brands = state.filter.brands.filter(
          (brand) => brand !== action.payload
        );
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle, toggleBrands } = filterSlice.actions;

export default filterSlice.reducer;
