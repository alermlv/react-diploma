import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "hello",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addSearch: (state, action) => {
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    },
  },
});

export const { addSearch } = searchSlice.actions;

export default searchSlice.reducer;
