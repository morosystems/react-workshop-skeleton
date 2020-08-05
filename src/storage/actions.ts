import {IFoodProducedAction, IRemoveFoodAction, ISetWorkerCapacityAction, IWoodProducedAction, IBuildHouseAction} from "./types";
import {FOOD_PRODUCED, REMOVE_FOOD, SET_WORKER_CAPACITY, WOOD_PRODUCED, BUILD_HOUSE} from "./constants";
/**
 * Úkol 3
 * 6. vytvoření action creatorů actionWoodProducedCreator(amount), actionFoodProducedCreator(amount), actionRemoveWoodCreator(amount), actionBuildHouseCreator(houseWorkerCapacity, houseWoodCost) v src/stroage/actions.ts
 *  - návratový typ action creatoru bude odpovídat interface z src/storage/types.ts (např. IWoodProducedAction)
 *  - typ akce bude konstanta z  src/storage/constants.ts
 */

export const actionSetWorkerCapacityCreator = (
    workerCapacity: number
): ISetWorkerCapacityAction => ({
  type: SET_WORKER_CAPACITY,
  payload: { workerCapacity }
});


export const actionWoodProducedCreator = (
    amount: number
): IWoodProducedAction => ({
  type: WOOD_PRODUCED,
  payload: { amount }
});

export const actionFoodProducedCreator = (
    amount: number
): IFoodProducedAction => ({
  type: FOOD_PRODUCED,
  payload: { amount }
});

export const actionRemoveFoodCreator = (
    amount: number
): IRemoveFoodAction => ({
  type: REMOVE_FOOD,
  payload: { amount }
});

export const actionBuildHouseCreator = (
    houseWorkerCapacity: number,
    houseWoodCost: number,
): IBuildHouseAction => ({
  type: BUILD_HOUSE,
  payload: { houseWorkerCapacity, houseWoodCost }
});
