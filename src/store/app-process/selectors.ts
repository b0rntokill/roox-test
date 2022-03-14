import { SortType } from "../../types/state";
import { NameSpace, RootState } from "../root-reducer";

export const getSortType = (state: RootState): SortType => state[NameSpace.app].sortType;
