import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Job from "../img/2.jpg";
const Home = () => {
  const [signin, setSignin] = useState(false);
  const [signup, setSignup] = useState(false);
  if (signup) {
    return <Redirect to="/signup" />;
  }
  if (signin) {
    return <Redirect to="/signin" />;
  }
  return (
    <div id="home-container">
      <nav id="home-navbar">
        <h1>Jobconnector</h1>
        <ul>
          <li onClick={() => setSignin(true)}>Sign In</li>
          <li onClick={() => setSignup(true)}>Sign Up</li>
        </ul>
      </nav>
      <div id="home-area">
        <img src={Job} />
        <div>
          <h1>Welcome To JobConnector !!!</h1>
          <h5>
            Are you eagerly searching for a job? Find your dream job here!!!
          </h5>
          <h4>
            “It doesn’t matter whether you do a small or big job, What matters
            is job contentment”
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
