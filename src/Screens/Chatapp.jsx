import React, { Component, useState, Fragment, useRef } from "react";
import { useEffect } from "react/cjs/react.development";
import "../App";
import BotMessege from "../components/BotMessege";
import UserMessege from "../components/UserMessage";
import axios from "axios";

const Chatapp = () => {
    const [userName, setuserName] = useState()
    const [messages, setmessages] = useState([])
    const useMessage = useRef("")
    const useChatScreen = useRef()

    const sendMessage = (event) => {
        event.preventDefault()
        if (useMessage.current.value !== "") {
            setmessages((lastMsg) => {
                return [...lastMsg, { type: "user", message: useMessage.current.value }]
            })
            setTimeout(() => {
                SendMessageToDialogflow(useMessage.current.value)
                useMessage.current.value = ""
            }, 1000);
        }
    }

    const SendMessageToDialogflow = (msg) => {
        axios.post(`https://saylani-chatbot.herokuapp.com/talktochatbot`, {
            text: msg
        })
            .then((response) => {
                setmessages((lastMsg) => {
                    return [...lastMsg, { type: "bot", message: response.data.text }]
                })
            }).catch(error => {
                console.log("error: ", error);
            })
    }
    useEffect(() => {
        axios.post(`https://saylani-chatbot.herokuapp.com/talktochatbot`, {
            text: 'hi'
        })
            .then((response) => {
                setmessages([
                    ...messages,
                    {
                        type: "bot",
                        message: response.data.text
                    }
                ])
            }).catch(error => {
                console.log("error: ", error);
            })
        setuserName(prompt("Enter You Name"))

    }, [])

        
    useEffect(() => {useChatScreen.current.scrollIntoView({ behavior: "smooth" });})
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
                                <UserMessege key={index} userName={userName} message={message.message}/>
                        })
                    }
                    <div ref={useChatScreen} />
                </main>
                <form className="msger-inputarea" onSubmit={sendMessage}>
                    <input
                        ref={useMessage}
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
