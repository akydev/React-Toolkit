import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "./store/store";
import { Dec, Inc } from "./slice/counterSlice";

export default function Counter() {
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector<AppState>(
    (state) => state.counter.counter
  ) as number;
  const inc = () => {
    dispatch(Inc());
  };
  const dec = () => {
    dispatch(Dec());
  };
  return (
    <div>
      <div>{data}</div>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  );
}
