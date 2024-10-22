import { createSlice } from "@reduxjs/toolkit";
import { ICounter } from "../interface/ICounter";

const initialState: ICounter = {
  counter: 0,
};
export interface ICounterAction<T> {
  type: string;
  payload?: T;
}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    Inc: (state: ICounter, action: ICounterAction<ICounter>) => {
      state.counter = state.counter + 1;
    },
    Dec: (state: ICounter, action: ICounterAction<ICounter>) => {
      state.counter = state.counter - 1;
    },
  },
});
export const { Inc, Dec } = counterSlice.actions;
export default counterSlice.reducer;
