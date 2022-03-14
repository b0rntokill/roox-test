import { createSlice } from "@reduxjs/toolkit";
import { AppProcess } from "../../types/state";

const initialState: AppProcess = {
  sortType: undefined,
};

const appProcessSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setSortType: (state, action) => {
      state.sortType = action.payload;
    },
  },
});

const { actions, reducer } = appProcessSlice;

export const { setSortType } = actions;

export const appProcess = reducer;
