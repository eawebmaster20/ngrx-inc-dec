import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.actions";

export const counterReducer = createReducer(
    0,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state > 0 ? state - 1: 0),
    on(reset, () => 0)
  );