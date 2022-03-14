import { combineReducers } from "redux";
import { appData } from "./app-data/app-data";
import { appProcess } from "./app-process/app-process";

export enum NameSpace {
  data = "DATA",
  app = "APP",
}

export const rootReducer = combineReducers({
  [NameSpace.data]: appData,
  [NameSpace.app]: appProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
