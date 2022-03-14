import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UserInfoContent from "../components/user-info/user-info-content/user-info-content";
import { fetchUserAction, getIsFound, getIsUserLoaded, getUser } from "../store/app-data";
import { UserRequest } from "../types/users";

function UserInfo(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const [isReadonly, setIsReadonly] = useState(true);
  const [isSubmit, setIsSubmit] = useState(false);
  const userInfo = useSelector(getUser);
  const isFound = useSelector(getIsFound);
  const isDataLoaded = useSelector(getIsUserLoaded);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserAction(Number(id)));
  }, [id]);

  const onFormSubmit = (data: UserRequest): void => {
    console.log("Запрос на изменение данных пользователя:", JSON.stringify(data));
    // TODO можно и редирект было сделать, но думаю блок формы в момент отправки выглядит ожидаемо.
    setIsReadonly(true);
    setIsSubmit(true);
  };

  const onReadonlyClick = (): void => {
    setIsReadonly(!isReadonly);
    setIsSubmit(false);
  };

  return (
    <UserInfoContent
      userInfo={userInfo}
      isDataLoaded={isDataLoaded}
      isFound={isFound}
      isReadonly={isReadonly}
      isSubmit={isSubmit}
      onReadonlyClick={onReadonlyClick}
      onFormSubmit={onFormSubmit}
    />
  );
}

export default UserInfo;
