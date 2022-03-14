import React from "react";
import { User, UserRequest } from "../../../types/users";
import CustomButton from "../../common/custom-button/custom-button";
import LoadingSpinner from "../../loading-spinner/loading-spinner";
import UserForm from "../../user-form/user-form";
import UserNotFound from "../user-not-found/user-not-found";
import "./user-info-content.scss";

type UserInfoContentProps = {
  userInfo?: User;
  isDataLoaded: boolean;
  isFound: boolean;
  isReadonly: boolean;
  isSubmit: boolean;
  onReadonlyClick: () => void;
  onFormSubmit: (data: UserRequest) => void;
};

function UserInfoContent({
  userInfo,
  isDataLoaded,
  isFound,
  isReadonly,
  isSubmit,
  onReadonlyClick,
  onFormSubmit,
}: UserInfoContentProps): JSX.Element {
  const renderContent = () => {
    if (!isDataLoaded) {
      return <LoadingSpinner />;
    }

    if (!userInfo && !isFound) {
      return <UserNotFound />;
    }

    if (userInfo) {
      return <UserForm userInfo={userInfo} isReadonly={isReadonly} onFormSubmit={onFormSubmit} />;
    }
  };

  return (
    <div className="user-info">
      <div className="user-info__header">
        <h3>Профиль пользователя</h3>{" "}
        {isFound ? (
          <CustomButton
            text="Редактировать"
            type="button"
            onClick={() => {
              onReadonlyClick();
            }}
          />
        ) : null}
      </div>
      {renderContent()}
      {isSubmit ? (
        <p>Запрос на изменение данных юзера был отправлен, содержимое JSON в console</p>
      ) : null}
    </div>
  );
}

export default UserInfoContent;
