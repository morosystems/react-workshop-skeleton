import {CombinedState, combineReducers, Reducer} from "redux";

import { config } from "./config";
import { i18n } from "./i18n";
import {workers} from "./workers";

/**
 * Ukol 2
 * 1. zapojení modulu workers
 *    - do src/reducers je potřeba zapojit reducer našeho modulu
 * Ukol 3
 * 9. zapojení modulu storage
 *    - do src/reducers je potřeba zapojit reducer našeho modulu
 */
export const reducer: Reducer<CombinedState<{}>> = combineReducers({
  [config.NAME]: config.reducer,
  [i18n.NAME]: i18n.reducer,
  [workers.NAME]: workers.reducer,
  // TODO connect storage.reducer under storage.NAME
});
