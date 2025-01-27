// const createSlice = require("@reduxjs/toolkit").createSlice;
import { createSlice } from "@reduxjs/toolkit";
// const { cakeActions } = require("../cake/cakeSlice");
import { ordered as cakeOrdered } from "../cake/cakeSlice";
const initialState = {
  numberOfIcecreams: 200,
};

const icecreamSlice = createSlice({
  name: "icecream",
  initialState,

  reducers: {
    ordered: (state) => {
      state.numberOfIcecreams--;
    },

    restocked: (state, action) => {
      state.numberOfIcecreams += action.payload;
    },
  },

  //   extraReducers: (builder) => {
  //     builder.addCase(cakeActions.ordered, (state) => state.numberOfIcecreams--);
  //   },

  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numberOfIcecreams--; // Directly modify the draft state
    });
  },
});

export default icecreamSlice.reducer;
export const { ordered, restocked } = icecreamSlice.actions;
