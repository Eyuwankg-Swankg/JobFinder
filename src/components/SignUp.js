import React, { useState } from "react";
import eye from "../img/eye.png";
import hidden from "../img/hidden.png";
import google from "../img/google.png";
import facebook from "../img/facebook.png";
import twitter from "../img/twitter.png";

const SignUp = () => {
  const [name, setName] = useState("");
  const [isVisible, setIsVisible] = useState({ pass: false, repass: false });
  return (
    <div id="signup-container">
      <div id="signup-box">
        <h1>Sign Up</h1>
        <form>
          <div id="signup-details">
            <input
              className="sigup-input"
              placeHolder="First Name"
              type="text"
              name="name"
              //   TODO: value onChange
            />
            <input
              className="sigup-input"
              placeHolder="Last Name"
              type="text"
              name="name"
              //   TODO: value onChange
            />
            <input
              className="sigup-input"
              placeHolder="Email"
              type="email"
              name="email"
              //   TODO: value onChange
            />
            <input
              className="sigup-input"
              placeHolder="Phone Number"
              type="text"
              name="number"
              //   TODO: value onChange
            />
            <input
              className="sigup-input"
              placeHolder="Enter Password"
              type={isVisible.pass ? "text" : "password"}
              name="password"
              //   TODO: value onChange
            />
            <input
              className="sigup-input"
              placeHolder="Re-Enter Password"
              type={isVisible.repass ? "text" : "password"}
              name="password"
              //   TODO: value onChange
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
          <div id="signup-button">
            <button>Create Account</button>
          </div>
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
