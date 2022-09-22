import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addItemToBasket: (state, action) => {
      state.value += action.payload;
    },
    removeItemFromBasket: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { addItemToBasket, removeItemFromBasket } = basketSlice.actions;

export const selectItems = (state) => state.basket.items;
export const selectItemsCount = (state) => state.basket.items.length;

export default basketSlice.reducer;
