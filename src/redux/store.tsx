import { configureStore } from "@reduxjs/toolkit";
import api from "./api/apiSlice";

const store = configureStore({
  reducer: {
    // Add your other reducers here
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
