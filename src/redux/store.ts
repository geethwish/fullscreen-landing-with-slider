import { configureStore } from "@reduxjs/toolkit";
import pageHandlerReducer from "./slices/navbar.slice";

export const store = configureStore({
  reducer: {
    page: pageHandlerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
