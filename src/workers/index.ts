import {actionWorkersHasArrivedCreator} from "./actions";
import {getFieldWorkers, getSawWorkers, getWorkerCount} from "./selectors";
import {Gender, WorkOccupation} from "./types";
import {saga} from "./saga";
import {reducer} from "./reducer";
import {NAME} from "./constants";
import {WorkersContainer as Container} from "./Container";

/**
 * Ukol 2
 * 1. definice rozhraní v souboru /src/workers/index.ts
 *    - exportujme modul - používáme named exporty export const workers = { ... }
 *    - je třeba exportovat NAME (název modulu uložený v konstantách), ságu, reducer a Container
 */
export const workers = {
    actionWorkersHasArrivedCreator,
    getWorkerCount,
    getFieldWorkers,
    getSawWorkers,
    Gender,
    WorkOccupation,
    saga,
    reducer,
    NAME,
    Container,
};
