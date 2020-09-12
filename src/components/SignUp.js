import React, { useState, useContext } from "react";
import Context from "../context/Context";
import { Helmet } from "react-helmet";
import eye from "../img/eye.png";
import hidden from "../img/hidden.png";
import google from "../img/google.png";
import facebook from "../img/facebook.png";
import twitter from "../img/twitter.png";
import back from "../img/back.png";
import firebase from "firebase";
import "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router-dom";

const SignUp = () => {
  // Firestore
  var db = firebase.firestore();
  //Context
  const { user, setUser } = useContext(Context);
  // States
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [isVisible, setIsVisible] = useState({ pass: false, repass: false });
  const [backLink, setBackLink] = useState(false);
  const [id, setId] = useState("");
  //Firestore
  const firebaseCreateUser = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        toast("New User Created", { type: "success" });
        setUser({
          FirstName: firstName,
          LastName: lastName,
          Email: email,
          Number: number,
          Gender: "",
          City: "",
          Education: [],
          Skills: [],
          Experience: [],
          chats: [],
          dp: "",
          resume: "",
        });
        setId(email.substring(0, email.indexOf("@")));
        setFirstName("");
        setlastName("");
        setEmail("");
        setPassword("");
        setNumber("");
        setRePassword("");
        setLoggedIn(true);
      })
      .catch((error) => {
        toast(error.message, { type: "error" });
      });
  };
  const createUser = (e) => {
    var error = 0;
    e.preventDefault();
    if (password === "" && password === rePassword) {
      toast("Enter Password", {
        type: "error",
      });
      error = true;
    }
    if (password !== rePassword) {
      toast("Password does not match", {
        type: "error",
      });
      error = true;
    }
    if (firstName === "") {
      toast("Enter FirstName", { type: "error" });
      error = true;
    }
    if (email === "" && number === "") {
      toast("Provide Email or Phone Number", { type: "error" });
      error = true;
    }
    if (error) return;
    firebaseCreateUser();
  };
  if (backLink) return <Redirect to="/" />;
  if (loggedIn) {
    db.collection("users").doc(id).set(user);
    db.collection("chats").doc(id).set({});
    return <Redirect to="/post" />;
  }
  return (
    <div id="signup-container">
      <ToastContainer autoClose={3000} hideProgressBar={true} />
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <div id="signup-box">
        <img
          src={back}
          style={{ paddingLeft: "1%", cursor: "pointer" }}
          onClick={() => setBackLink(!backLink)}
        />
        <h1>Sign Up</h1>
        <form id="signup-from">
          <div id="signup-details">
            <input
              className="sigup-input"
              placeHolder="First Name"
              type="text"
              name="name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              className="sigup-input"
              placeHolder="Last Name"
              type="text"
              name="name"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
            <input
              className="sigup-input"
              placeHolder="Email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="sigup-input"
              placeHolder="Phone Number"
              type="number"
              name="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <input
              className="sigup-input"
              placeHolder="Enter Password"
              type={isVisible.pass ? "text" : "password"}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
            />
            <input
              className="sigup-input"
              placeHolder="Re-Enter Password"
              type={isVisible.repass ? "text" : "password"}
              name="password"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
            />
            <img
              src={isVisible.pass ? eye : hidden}
              onClick={() => {
                const obj = {
                  pass: !isVisible.pass,
                  repass: isVisible.repass,
                };
                setIsVisible(obj);
              }}
              id="signup-password"
            />
            <img
              src={isVisible.repass ? eye : hidden}
              onClick={() => {
                const obj = {
                  pass: isVisible.pass,
                  repass: !isVisible.repass,
                };
                setIsVisible(obj);
              }}
              id="signup-repassword"
            />
          </div>
          <input
            type="submit"
            onClick={(e) => {
              createUser(e);
            }}
            value="Create Account"
            id="signup-submit"
          />
        </form>
        <div id="signup-bottom">
          <img src={google} />
          <img src={facebook} />
          <img src={twitter} />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
