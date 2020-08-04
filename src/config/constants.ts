import {IGameRules} from "types";

export const NAME: string = "config";
export const TOGGLE_DARK_THEME: string = "TOGGLE_DARK_THEME";

export class GameRules implements IGameRules {
    workerGoal: number = 100;
    houseCapacity: number = 5;
    workerArrivalSeconds: number = 15;
    sawProductionSeconds: number = 10;
    sawProductionPerWorkerRatio: number = 1;
    fieldProductionSeconds: number = 10;
    fieldProductionPerWorkerRatio: number = 1;
    employedWorkerStarvationSeconds: number = 20;
    unEmployedWorkerStarvationSeconds: number = 80 / 3;
    houseWoodCost: number = 5;
    startingWorkers: number = 10;
    startingWorkerCapacity: number = 15;
}
