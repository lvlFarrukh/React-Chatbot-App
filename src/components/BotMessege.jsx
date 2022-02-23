import React from "react";
import "../App";

const BotMessege = ({message}) => {
  return (
    <div className="msg left-msg">
      <div
        className="msg-img"
        style={{
          backgroundImage:
            "url(https://i.pinimg.com/originals/0c/67/5a/0c675a8e1061478d2b7b21b330093444.gif)",
        }}
      />
      <div className="msg-bubble">
        <div className="msg-info">
          <div className="msg-info-name">BOT</div>
          <div className="msg-info-time">{`${new Date().getHours()}:${new Date().getSeconds()}`}</div>
        </div>
        <div className="msg-text">
          {message}
        </div>
      </div>
    </div>
  );
};

export default BotMessege;
