import React from "react";
import "../App";

const UserMessege = ({userName}) => {
  return (
    <div className="msg right-msg">
      <div className="msg-img">
        <h1 className="userNameFirst">{userName && userName[0].toUpperCase()}</h1>
      </div>
      <div className="msg-bubble">
        <div className="msg-info">
          <div className="msg-info-name">{userName}</div>
          <div className="msg-info-time">{`${new Date().getHours()}:${new Date().getSeconds()}`}</div>
        </div>
        <div className="msg-text">You can change your name in JS section!</div>
      </div>
    </div>
  );
};

export default UserMessege;
