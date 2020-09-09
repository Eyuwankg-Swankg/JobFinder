import React, { useState } from "react";
import back from "../img/back.png";
import send from "../img/send.svg";
import user from "../img/user.png";

import { Redirect } from "react-router-dom";
const Chat = () => {
  const [userChat, setUserChat] = useState([
    {
      name: "Karthik",
      chat: [
        { name: "Karthik", message: "Hi How Are You" },
        { name: "Venkatesh", message: "Im fine how are you" },
        { name: "Karthik", message: "Hi How Are You" },
        { name: "Venkatesh", message: "Im fine how are you" },
        { name: "Venkatesh", message: "Hi How Are You" },
        { name: "Venkatesh", message: "Im fine how are you" },
        { name: "Karthik", message: "Hi How Are You" },
        { name: "Karthik", message: "Im fine how are you" },
        { name: "Karthik", message: "Hi How Are You" },
        {
          name: "Venkatesh",
          message:
            "Im fine how are youIm fine how are youIm fine how are youIm fine how are youIm fine how are youIm fine how are youIm fine how are you",
        },
      ],
    },
    {
      name: "Suresh",
      chat: [
        { name: "Karthik", message: "Hi How Are You" },
        { name: "Venkatesh", message: "Im fine how are you" },
      ],
    },
    {
      name: "Magesh",
      chat: [
        { name: "Karthik", message: "Hi How Are You" },
        {
          name: "Venkatesh",
          message: "",
        },
      ],
    },
    {
      name: "Naveen",
      chat: [
        { name: "Karthik", message: "Hi How Are You" },
        { name: "Venkatesh", message: "Im fine how are you" },
      ],
    },
    {
      name: "Venkatesh",
      chat: [
        { name: "Karthik", message: "Hi How Are You" },
        { name: "Venkatesh", message: "Im fine how are you" },
      ],
    },
  ]);
  const [currentUserChats, setCurrentUserChats] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isBackClicked, setIsBackClicked] = useState(false);
  const [isProfileClicked, setIsProfileClicked] = useState(false);

  const rightleft = (name) => {
    if (name === currentUser.name) return false;
    return true;
  };
  if (isBackClicked) return <Redirect to="/post" />;
  if (isProfileClicked) return <Redirect to="/profile" />;
  return (
    <div id="chat-container">
      <div id="chat-box">
        <div id="chat-list">
          <img src={back} onClick={() => setIsBackClicked(!isBackClicked)} />
          <h3>Chats</h3>
          {userChat.map((item, index) => (
            <h5
              key={index}
              style={{
                textAlign: "center",
                height: "40px",
                lineHeight: "40px",
                borderBottom: "1px solid #000",
              }}
              onClick={() => {
                setCurrentUser(item);
                setCurrentUserChats(item.chat);
              }}
            >
              {item.name}
            </h5>
          ))}
        </div>
        <div className="chat-user">
          <h4>
            {currentUser.name}
            <img
              src={user}
              style={{ paddingLeft: "20px" }}
              onClick={() => setIsProfileClicked(!isProfileClicked)}
            />
          </h4>
          <div id="chat-messages">
            {currentUserChats.map((item, index) => (
              <div
                key={index}
                id="chat-individual"
                className={
                  rightleft(item.name)
                    ? "chat-message-end"
                    : "chat-message-start"
                }
              >
                <p>{item.message}</p>
              </div>
            ))}
          </div>
          <div id="chat-type">
            <input
              type="text"
              name="message"
              placeholder="Type Your Message Here..."
            />
            <img src={send} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
