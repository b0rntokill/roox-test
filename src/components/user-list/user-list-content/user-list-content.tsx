import React from "react";
import { User, Users } from "../../../types/users";
import LoadingSpinner from "../../loading-spinner/loading-spinner";
import UserCard from "../../user-card/user-card";
import "./user-list-content.scss";

type UserListContentProps = {
  users: Users;
  isDataLoaded: boolean;
};

function UserListContent({ users, isDataLoaded }: UserListContentProps): JSX.Element {
  return (
    <div className="user-list">
      <p className="user-list__title">Список пользователей</p>
      {!isDataLoaded ? (
        <LoadingSpinner />
      ) : (
        <ul className="user-list__scroll">
          {users.map((user: User) => (
            <li key={user.id}>
              <UserCard user={user} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserListContent;
