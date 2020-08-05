import { combineReducers, Reducer } from "redux";
import {produce} from "immer";

import { IStorageState, IWarehouse } from "./types";
import {BUILD_HOUSE, FOOD_PRODUCED, REMOVE_FOOD, SET_WORKER_CAPACITY, WOOD_PRODUCED} from "./constants";

/**
 * Úkol 3
 * 2. v souboru  src/resources/reducer.ts doplnění defaultních hodnot pro reducery storage a workerCapacity (smažeme null z typu reduceru)
 * 7. aplikování akcí v src/resources/reducer.ts (pozor na mutace!)
 *  * bude reagovat na akce WOOD_PRODUCED, FOOD_PRODUCED, REMOVE_FOOD, BUILD_HOUSE
 */
const warehouse: Reducer<IWarehouse> = (
  state = {wood: 0, food: 0} as IWarehouse,
  action
) => {
  switch(action.type) {
    case WOOD_PRODUCED:
      return produce(state, (draft) => {
        draft.wood += action.payload.amount;
      });
    case FOOD_PRODUCED:
      return produce(state, (draft) => {
        draft.food += action.payload.amount;
      });
    case REMOVE_FOOD:
      return produce(state, (draft) => {
        draft.food = Math.max(draft.food - action.payload.amount, 0);
      });
    case BUILD_HOUSE:
      return produce(state, (draft) => {
        draft.wood = Math.max(draft.food - action.payload.houseWoodCost, 0);
      });
    default:
      return state;
  }
};

/**
 * Úkol 3
 * 7. aplikování akcí v src/resources/reducer.ts
 *    * bude reagovat na akci BUILD_HOUSE
 */
const workerCapacity: Reducer<number> = (state = 0, action) => {
  if (action.type === SET_WORKER_CAPACITY) {
    return action.payload.workerCapacity;
  } else if (action.type === BUILD_HOUSE) {
    return action.payload.houseWorkerCapacity;
  } else {
    return state;
  }
};

export const reducer: Reducer<IStorageState> = combineReducers({
  warehouse,
  workerCapacity
});
