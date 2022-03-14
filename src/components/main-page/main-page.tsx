import React from "react";
import { Outlet } from "react-router-dom";
import AsideSection from "../aside-section/aside-section";
import MainSection from "../main-section/main-section";
import SortList from "../sort-list/sort-list";
import "./main-page.scss";

function MainPage(): JSX.Element {
  return (
    <div className="main-page">
      <AsideSection>
        <SortList />
      </AsideSection>
      <MainSection>
        <Outlet />
      </MainSection>
    </div>
  );
}

export default MainPage;
