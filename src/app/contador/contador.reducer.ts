import { createReducer, on } from "@ngrx/store";
import { DECREMENTAR, INCREMENTAR, MULTIPLICAR, DIVIDIR, RESET } from "./contador.actions";

export const initialState = 10;

export const contadorReducer = createReducer(
    initialState,
    on(INCREMENTAR, state => state + 1),
    on(DECREMENTAR, state => state - 1),
    on(MULTIPLICAR, (state, { payload }) => state * payload),
    on(DIVIDIR, (state, { payload }) => state / payload),
    on(RESET, state => state = 0)
);


