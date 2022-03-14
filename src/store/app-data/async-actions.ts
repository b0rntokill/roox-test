import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { ApiRoute } from "../../const";
import { api } from "../../services/api";

import { User, Users } from "../../types/users";

const USERS_FETCH_FAIL_MESSAGE = "Получение списка пользователей окончилось с ошибкой";
const USER_FETCH_FAIL_MESSAGE = "Получение информации о пользователе окончилось с ошибкой";

export const fetchUsersAction = createAsyncThunk("data/fetchUsers", async () => {
  try {
    const { data } = await api.get<Users>(ApiRoute.Users);
    return data;
  } catch (evt) {
    toast.error(USERS_FETCH_FAIL_MESSAGE);
    return Promise.reject(evt);
  }
});

export const fetchUserAction = createAsyncThunk("data/fetchUser", async (id: number) => {
  try {
    const { data } = await api.get<User>(`${ApiRoute.Users}/${id}`);
    return data;
  } catch (evt) {
    toast.error(USER_FETCH_FAIL_MESSAGE);
    return Promise.reject(evt);
  }
});
