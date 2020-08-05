export const NAME: string = "storage";

/**
 * Úkol 3.
 * 5. vytvoření akcí WOOD_PRODUCED, FOOD_PRODUCED, REMOVE_FOOD, BUILD_HOUSE v src/storage/constants.ts
 *    - typ akce se bude skládat z názvu konstanty prefixovaného názvem modulu (string)
 */

export const SET_WORKER_CAPACITY: string = `${NAME}/SET_WORKER_CAPACITY`;

export const WOOD_PRODUCED: string = `${NAME}/WOOD_PRODUCED`;
export const FOOD_PRODUCED: string = `${NAME}/FOOD_PRODUCED`;
export const REMOVE_FOOD: string = `${NAME}/REMOVE_FOOD`;
export const BUILD_HOUSE: string = `${NAME}/BUILD_HOUSE`;
