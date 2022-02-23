import React, {Component, useState, Fragment} from "react";
import { useEffect } from "react/cjs/react.development";
import "../App";
import BotMessege from "../components/BotMessege";
import UserMessege from "../components/UserMessage";
import axios from "axios";

const Chatapp = () => {
    const [userName, setuserName] = useState()
    const [messages, setmessages] = useState([{message: "hi", type: 'bot'}])
    useEffect( () => {
        setuserName(prompt("Enter You Name"))

        axios.post(`https://saylani-chatbot.herokuapp.com/talktochatbot`, {
            text: 'hi'
        })
        .then((response) => {
            console.log("response", response.data.text);
        }).catch(error => {
            console.log("error: ", error);
        })

    }, [])
  return (
    <Fragment>
        <section className="msger">
          <header className="msger-header">
            <div className="msger-header-title">
              <i className="fas fa-comment-alt" /> Saylani Chat-Bot
            </div>
            <div className="msger-header-options">
              <span>
                <i className="fas fa-cog" />
              </span>
            </div>
          </header>
          
          <main className="msger-chat">
              {
                  messages.map((message, index) => {
                    return message.type === "bot" ?
                        <BotMessege key={index} message={message.message} /> 
                        :
                        <UserMessege key={index} userName={userName}/>
                  })
              }
                 
          </main>
          <form className="msger-inputarea">
            <input
              type="text"
              className="msger-input"
              placeholder="Enter your message..."
            />
            <button type="submit" className="msger-send-btn">
              Send
            </button>
          </form>
        </section>
      </Fragment>
  );
};

export default Chatapp;
