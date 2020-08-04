import {Action} from 'redux';
import {saga} from "./saga";

/**
 * Úkol 3
 * 8. exportujeme NAME (název modulu uložený v konstantách), ságu, reducer a Container /src/storage/index.ts
 * 9. zapojení modulu workers
 *  - do src/App je potřeba zapojit kontejner exportovaný workers modulem
 *  - do src/reducers je potřeba zapojit reducer exportovaného workers modulem
 *  - v src/saga je potřeba spustit ságu exportovanou workers modulem
 */
export const storage = {
    saga,
    //TODO replace mocks with real selectors and action creators
    getWoodAmount: (state:any) => Number.NaN,
    actionBuildHouseCreator: (a:any, b:any): Action<any> => ({type: ""}),
    actionRemoveFoodCreator: (a:any): Action<any> => ({type: ""}),
    hasStorageAnyFood: (state:any) => Number.NaN,
    getWorkerCapacity: (state:any) => Number.NaN,
    actionAddFoodCreator: (a:any): Action<any> => ({type: ""}),
    actionAddWoodCreator: (a:any): Action<any> => ({type: ""}),
};
