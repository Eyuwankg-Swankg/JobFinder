import React,{useState} from "react";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import eye from "../img/eye.png";
import hidden from "../img/hidden.png";
import google from "../img/google.png"
import facebook from "../img/facebook.png"
import twitter from "../img/twitter.png"


const SignIn = () => {
    const [hide, setHide] = useState(true);
    const [email,setEmail] = useState("");
    const [password,setPassword] =useState("");
  return (
    <div id="sigin-container">
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <div id="signin-box">
        <form id="sigin-top">
          <h2>Sign In</h2>
          <input
            className="sigin-input"
            placeHolder="Email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="sigin-input"
            placeHolder="Password"
            type={hide ? "password" : "text"}
            name={hide ? "password" : "text"}
            minlength={6}
            required
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <img
            src={hide ? hidden : eye}
            onClick={() => {
              setHide(!hide);
            }}
            className="signin-eye"
          />
            <button id="sigin-button" type="submit" 
            >Log In</button>
        </form>
        <div id="sigin-bottom">
          <img src={google}/>
          <img src={facebook}/>
          <img src={twitter}/>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
