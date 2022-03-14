import React from "react";
import { useDispatch } from "react-redux";
import { setSortType } from "../../store/app-process";
import SortListContent from "./sort-list-content/sort-list-content";
import "./sort-list.scss";

function SortList(): JSX.Element {
  const dispatch = useDispatch();

  const onButtonClick = (type: string) => {
    dispatch(setSortType(type));
  };

  return <SortListContent onButtonClick={onButtonClick} />;
}

export default SortList;
