import {saga} from "./saga";
import {NAME} from "./constants";
import {reducer} from "./reducer";
import {StorageContainer as Container} from "./Container";
import {actionBuildHouseCreator, actionRemoveFoodCreator, actionFoodProducedCreator, actionWoodProducedCreator} from "./actions";
import {getWoodAmount, getWorkerCapacity, hasStorageAnyFood} from "./selectors";

/**
 * Úkol 3
 * 8. exportujeme NAME (název modulu uložený v konstantách), ságu, reducer a Container /src/storage/index.ts
 * 9. zapojení modulu workers
 *  - do src/App je potřeba zapojit kontejner exportovaný workers modulem
 *  - do src/reducers je potřeba zapojit reducer exportovaného workers modulem
 *  - v src/saga je potřeba spustit ságu exportovanou workers modulem
 */
export const storage = {
    NAME,
    Container,
    saga,
    reducer,
    getWoodAmount,
    actionBuildHouseCreator,
    actionRemoveFoodCreator,
    hasStorageAnyFood,
    getWorkerCapacity,
    actionFoodProducedCreator,
    actionWoodProducedCreator
};
