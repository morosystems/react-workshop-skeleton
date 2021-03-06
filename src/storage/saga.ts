import { put, fork, select } from "redux-saga/effects";

import { Saga, SagaIterator } from "redux-saga";
import { config } from "config";
import {
  actionSetWorkerCapacityCreator
} from "./actions";

export const saga: Saga = function* saga(): SagaIterator {
  yield fork(initStorageSaga);
  yield fork(fieldProductionSaga);
  yield fork(sawProductionSaga);
};

export const initStorageSaga: Saga = function* initStotageSaga(): SagaIterator  {
  const gameRules: ReturnType<typeof config.getGameRules> = yield select(
    config.getGameRules
  );
  yield put(actionSetWorkerCapacityCreator(gameRules.startingWorkerCapacity));
};

/**
 * Úkol 4
 * 2. sagy pro dřevo/jídlo budou mít stejné chování, jen počítat s jinými hodnotami
 * 3. v nekonečném cyklu budem opakovat
 *    - načtení aktuální konfigurace ze selektoru config.getGameRules
 *    - pomocí effektu delay počkáme daný počet milisekund (je potřeba převést hodnotu z konfigurace z sekund na ms!)
 *    - ze stavu vyberem pracovníky na dané pozici z modulu workers pomocí selektoru workers.getSawWorkers/workers.getFieldWorkers
 *    - pokud jsou na dané pozici nějácí pracovníci přidáme tolik suroviny kolik je pracovníků
 *        - počet surovin je roven počtu pracovníků na dané pozici pronásobený ratem z pravidel (sawProductionPerWorkerRatio/fieldProductionPerWorkerRatio)
 */
export const fieldProductionSaga: Saga = function* workerEatingLoopSaga(): SagaIterator {
  // while (true) {
  // }
};

export const sawProductionSaga: Saga = function* workerEatingLoopSaga(): SagaIterator {
  // while (true) {
  // }
};
