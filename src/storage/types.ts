import { Action } from "redux";
import {SET_WORKER_CAPACITY} from "./constants";

/**
 * Úkol 3
 * 1.v souboru src/storage/types.ts
 *  - vytvoření interface pro sklad IWarehouse bude obsahovat množství dřeva a jídla
 *  - vytvoření interface IStorageState stav našeho modulu, bude obsahovat typování skladu a kapacity provníků
 */
export interface IWarehouse {
  wood: number,
  food: number,
}

export interface IStorageState {
  warehouse: IWarehouse,
  workerCapacity: number,
}

export interface IWoodProducedAction extends Action<string> {
  readonly payload: {
    readonly amount: number;
  };
}

export interface IFoodProducedAction extends Action<string> {
  readonly payload: {
    readonly amount: number;
  };
}

export interface IRemoveFoodAction extends Action<string> {
  readonly payload: {
    readonly amount: number;
  };
}

export interface ISetWorkerCapacityAction
  extends Action<typeof SET_WORKER_CAPACITY> {
  readonly payload: {
    readonly workerCapacity: number;
  };
}

export interface IBuildHouseAction extends Action<string> {
  readonly payload: {
    readonly houseWorkerCapacity: number;
    readonly houseWoodCost: number;
  };
}
