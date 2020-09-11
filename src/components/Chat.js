import React, { useState, useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import Context from "../context/Context";
import back from "../img/back.png";
import send from "../img/send.svg";
import userIcon from "../img/user.png";
import firebase from "firebase";
import { Redirect } from "react-router-dom";
const Chat = () => {
  const {
    user,
    setCurrentChatUserDetails,
    currentUser,
    setCurrentUser,
  } = useContext(Context);
  const [userChat, setUserChat] = useState([]);
  const [currentUserChats, setCurrentUserChats] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [storeData, setStoreData] = useState(false);
  const [isBackClicked, setIsBackClicked] = useState(false);
  const [isProfileClicked, setIsProfileClicked] = useState(false);
  var db = firebase.firestore();
  useEffect(() => {
    if (user) {
      setUserChat(user.chats);
    }
  }, [user]);

  useEffect(() => {
    if (currentUser) {
      const id = user.Email;
      const userId = id.slice(0, id.indexOf("@"));
      // const res = db
      //   .collection("chats")
      //   .doc(userId)
      //   .collection(currentUser)
      //   .get().then((e) => {
      //   setCurrentUserChats(e.docs[0].data().messages);
      // });
      db.collection("chats")
        .doc(userId)
        .collection(currentUser)
        .onSnapshot((response) => {
          setCurrentUserChats(response.docs[0].data().messages);
        });
      const res = db.collection("users").doc(currentUser).get();
      res.then((e) => {
        setCurrentChatUserDetails(e.data());
      });
    }
  }, [currentUser]);
  if (storeData) {
    const id = user.Email;
    const userId = id.slice(0, id.indexOf("@"));
    db.collection("chats")
      .doc(userId)
      .collection(currentUser)
      .doc("messages")
      .update({
        messages: [
          ...currentUserChats,
          { userName: userId, message: currentMessage },
        ],
      });
    //other user messages
    db.collection("chats")
      .doc(currentUser)
      .collection(userId)
      .get()
      .then((e) => {
        const otherUser = e.docs[0].data().messages;
        db.collection("chats")
          .doc(currentUser)
          .collection(userId)
          .doc("messages")
          .update({
            messages: [
              ...otherUser,
              { userName: userId, message: currentMessage },
            ],
          });
      });

    setCurrentMessage("");
    setStoreData(!storeData);
  }
  const rightleft = (name) => {
    if (name === currentUser) return false;
    return true;
  };
  if (isBackClicked) return <Redirect to="/post" />;
  if (isProfileClicked) return <Redirect to="/viewprofile" />;
  return (
    <div id="chat-container">
      <Helmet>
        <title>Chat</title>
      </Helmet>
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
                cursor: "pointer",
              }}
              onClick={() => {
                setCurrentUser(item);
              }}
            >
              {item}
            </h5>
          ))}
        </div>
        {currentUser ? (
          <div className="chat-user">
            <h4>
              {currentUser}
              <img
                src={userIcon}
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
                    rightleft(item.userName)
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
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
              />
              <img
                src={send}
                style={{ cursor: "pointer" }}
                onClick={() => setStoreData(!storeData)}
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Chat;
