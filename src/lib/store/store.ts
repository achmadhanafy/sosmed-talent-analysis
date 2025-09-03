import { configureStore } from "@reduxjs/toolkit";
import { analyzeApi } from "../services/analyzeApi";

export const store = configureStore({
  reducer: {
    [analyzeApi.reducerPath]: analyzeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(analyzeApi.middleware),
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
