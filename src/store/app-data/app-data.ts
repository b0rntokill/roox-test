import { createSlice } from "@reduxjs/toolkit";
import { AppData } from "../../types/state";
import { fetchUserAction, fetchUsersAction } from "./async-actions";

const initialState: AppData = {
  users: [],
  user: undefined,
  isFound: true,
  isUsersLoaded: false,
  isUserLoaded: false,
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAction.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isUsersLoaded = true;
      })
      .addCase(fetchUsersAction.rejected, (state) => {
        state.users = [];
        state.isUsersLoaded = false;
      })
      .addCase(fetchUserAction.pending, (state) => {
        state.user = undefined;
        state.isFound = true;
        state.isUserLoaded = false;
      })
      .addCase(fetchUserAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isFound = true;
        state.isUserLoaded = true;
      })
      .addCase(fetchUserAction.rejected, (state) => {
        state.user = undefined;
        state.isFound = false;
        state.isUserLoaded = true;
      });
  },
});

const { reducer } = dataSlice;

export const appData = reducer;
