import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [isVisible,setIsVisible] = useState({pass:false,repass:false});
  return (
    <div id="signup-container">
      <div id="signup-box">
        <h1>Sign Up</h1>
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
        </div>
      </div>
    </div>
  );
};

export default SignUp;
