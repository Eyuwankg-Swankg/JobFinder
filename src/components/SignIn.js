import React, { useState, useContext } from "react";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import eye from "../img/eye.png";
import hidden from "../img/hidden.png";
import google from "../img/google.png";
import facebook from "../img/facebook.png";
import back from "../img/back.png";
import twitter from "../img/twitter.png";
import { toast, ToastContainer } from "react-toastify";
import firebase from "firebase";
import { Redirect } from "react-router-dom";
import Context from "../context/Context";
const SignIn = () => {
  //Context
  const { user, setUser } = useContext(Context);
  // Firestore
  var db = firebase.firestore();
  // States
  const [hide, setHide] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [backLink, setBackLink] = useState(false);
  const signInUser = async () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        var id = email.substring(0, email.indexOf("@"));
        db.collection("users")
          .doc(id)
          .onSnapshot((e) => setUser(e.data()));
        setEmail("");
        setPassword("");
        toast("Logged In", { type: "success" });
        setLoggedIn(true);
      })
      .catch((error) => {
        toast(error.message, { type: "error" });
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    signInUser();
  };
  if (backLink) return <Redirect to="/" />;
  if (loggedIn) return <Redirect to="/post" />;
  return (
    <div id="sigin-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <ToastContainer autoClose={3000} hideProgressBar={true} />
      <div id="signin-box">
        <img
          src={back}
          style={{ paddingLeft: "1%", width: "40px", cursor: "pointer" }}
          onClick={() => setBackLink(!backLink)}
        />
        <form id="sigin-top" method="POST">
          <h2>Sign In</h2>
          <input
            className="sigin-input"
            placeHolder="Email"
            type="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="sigin-input"
            placeHolder="Password"
            type={hide ? "password" : "text"}
            name={hide ? "password" : "text"}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <img
            src={hide ? hidden : eye}
            onClick={() => {
              setHide(!hide);
            }}
            className="signin-eye"
          />
          <button id="sigin-button" type="submit" onClick={(e) => signIn(e)}>
            Log In
          </button>
        </form>
        <div id="sigin-bottom">
          <img src={google} />
          <img src={facebook} />
          <img src={twitter} />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
