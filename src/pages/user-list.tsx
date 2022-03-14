import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAction, getIsUsersLoaded, getUsers } from "../store/app-data";
import { getSortType } from "../store/app-process";
import UserListContent from "../components/user-list/user-list-content/user-list-content";
import sortUsers from "../components/user-list/utils";

function UserList(): JSX.Element {
  const users = useSelector(getUsers);
  const sortType = useSelector(getSortType);
  const isDataLoaded = useSelector(getIsUsersLoaded);
  const sortedUsers = React.useMemo(() => sortUsers(users, sortType), [users, sortType]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersAction());
  }, []);

  return <UserListContent users={sortedUsers} isDataLoaded={isDataLoaded} />;
}

export default UserList;
