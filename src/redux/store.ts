import { configureStore } from "@reduxjs/toolkit";

import tracksReducer from "./reducers/tracksSlice";

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
