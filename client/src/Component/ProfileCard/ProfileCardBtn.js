import React from "react";
import "./ProfileCard.css";
import { NavLink } from "react-router-dom";

const ProfileCardBtn = props => {
  return (
    <div className="profile__button__container">
      <p className="profile__card__review">{props.review}</p>

      <div className="button__section">
        <NavLink to="/login">
          <button className="profile__button profile__card__button">
            Go To Profile
          </button>
        </NavLink>
        <br />
        <button className="message__button profile__card__button">
          Message
        </button>
      </div>
    </div>
  );
};

export default ProfileCardBtn;
