import { createSlice } from "@reduxjs/toolkit";

export interface PageHandlerProps {
  page: string | null;
}

const initialState: PageHandlerProps = {
  page: null,
};

export const pageHandlerSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    updatePage: (state, action) => {
      state.page = action.payload;
    },
    clearPage: (state) => {
      state.page = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updatePage, clearPage } = pageHandlerSlice.actions;

export default pageHandlerSlice.reducer;
