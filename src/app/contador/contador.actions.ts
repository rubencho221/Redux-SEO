import { createAction, props } from "@ngrx/store";

export const INCREMENTAR = createAction('[Contador] Incrementar');
export const DECREMENTAR = createAction('[Contador] Decrementar');
export const MULTIPLICAR = createAction('[Contador] Multiplicar', props<{ payload: number }>());
export const DIVIDIR = createAction('[Contador] Dividir', props<{ payload: number }>());
export const RESET = createAction('[Contador] Reset');