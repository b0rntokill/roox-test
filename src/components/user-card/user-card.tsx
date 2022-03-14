import React from "react";
import { Link } from "react-router-dom";
import { User } from "../../types/users";
import "./user-card.scss";

type UserCardProps = {
  user: User;
};

function UserCard({ user }: UserCardProps): JSX.Element {
  const {
    id,
    name,
    address: { city },
    company: { name: companyName },
  } = user;
  return (
    <div className="user-card">
      <p>
        <span>ФИО:</span>
        {name}
      </p>
      <p>
        <span>Город:</span>
        {city}
      </p>
      <p>
        <span>Компания:</span>
        {companyName}
      </p>
      {/* TODO можно и линку в отдельный компонент/css-класс вынести. Но на макете она одна. */}
      <Link to={`/users/${id}`}>Подробнее</Link>
    </div>
  );
}

export default UserCard;
