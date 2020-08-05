import { Selector } from "react-redux";
import { createSelector } from "reselect";
import { IState } from "types";
import { IStorageState } from "./types";
import {getGameModel} from "../selectors";


export const getModule: Selector<IState, IStorageState> = (state) => {
  return getGameModel(state).storage;
};

export const hasStorageAnyFood: Selector<IState, boolean> = createSelector(
    () => 0, // TODO replace with getFoodAmount,
    (food) => food > 0
);

/**
 * Úkol 3
 * 3. vytovoření selektorů getWoodAmount, getFoodAmount, getWorkerCapacity v src/storage/selectors.ts
 */
