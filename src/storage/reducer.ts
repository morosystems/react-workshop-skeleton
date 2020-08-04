import { combineReducers, Reducer } from "redux";
import { IStorageState, IStorage } from "./types";
import {SET_WORKER_CAPACITY} from "./constants";

/**
 * Úkol 3
 * 2. v souboru  src/resources/reducer.ts doplnění defaultních hodnot pro reducery storage a workerCapacity (smažeme null z typu reduceru)
 * 7. aplikování akcí v src/resources/reducer.ts (pozor na mutace!)
 */
const storage: Reducer<IStorage | null> = (
  state = null,
  action
) => {
  return state;
};

/**
 * Úkol 3
 * 7. aplikování akcí v src/resources/reducer.ts
 *    * bude reagovat na akci
 */
const workerCapacity: Reducer<number | null> = (state = null, action) => {
  if (action.type === SET_WORKER_CAPACITY) {
    return action.payload.workerCapacity;
  } else {
    return state;
  }
};

// @ts-ignore TODO delete
export const reducer: Reducer<IStorageState> = combineReducers({
  storage,
  workerCapacity
});
