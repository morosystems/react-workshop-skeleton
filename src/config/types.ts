import { Action } from "redux";
import { TOGGLE_DARK_THEME } from "./constants";
import { IGameRules } from "types";

export interface IConfigState {
  isDarkTheme: boolean;
  gameRules: IGameRules;
}

export interface IToggleDarkThemeAction
  extends Action<typeof TOGGLE_DARK_THEME> {
}
