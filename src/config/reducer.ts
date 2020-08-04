import { combineReducers, Reducer } from "redux";
import { IGameRules } from "types";
import { IConfigState } from "./types";
import { GameRules, TOGGLE_DARK_THEME } from "./constants";

const isDarkTheme: Reducer<boolean> = (state = true, action) => {
  if (action.type === TOGGLE_DARK_THEME) {
    return !state;
  } else {
    return state;
  }
};

const gameRules: Reducer<IGameRules> = (state = new GameRules(), action) => {
  return state;
};
export const reducer: Reducer<IConfigState> = combineReducers({
  isDarkTheme,
  gameRules,
});
