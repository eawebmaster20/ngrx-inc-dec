import { createAction } from "@ngrx/store";

export const increment = createAction('[Counter Component] Increment counter');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');