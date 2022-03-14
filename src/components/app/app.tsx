import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppRoute } from "../../const";
import UserInfo from "../../pages/user-info";
import UserList from "../../pages/user-list";
import MainPage from "../main-page/main-page";

// TODO цикл редирикта на users сделан специально, можно было и 404 страницу сообразить.

function App() {
  return (
    <Routes>
      <Route path={AppRoute.Users} element={<MainPage />}>
        <Route path={AppRoute.User} element={<UserInfo />} />
        <Route path="" element={<UserList />} />
      </Route>
      <Route path="*" element={<Navigate to={AppRoute.Users} />} />
    </Routes>
  );
}

export default App;
