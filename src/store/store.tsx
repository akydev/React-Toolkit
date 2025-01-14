import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
