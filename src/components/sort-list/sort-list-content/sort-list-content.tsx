import React from "react";
import { SortType } from "../../../const";
import CustomButton from "../../common/custom-button/custom-button";
import "./sort-list-content.scss";

type SortListContentProps = {
  onButtonClick: (type: string) => void;
};

function SortListContent({ onButtonClick }: SortListContentProps): JSX.Element {
  return (
    <div className="sort-list-container">
      <p className="sort-list-container__title">Сортировка</p>
      <ul className="sort-list">
        {Object.values(SortType).map((sortType: string) => (
          <li key={sortType}>
            <CustomButton
              text={sortType}
              type="button"
              onClick={() => {
                onButtonClick(sortType);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortListContent;
