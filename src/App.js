import React, { useState } from "react";
// CSS
import "./App.css";
// Context
import Context from "./context/Context";
//react-router
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
//Components
import SignIn from "./components/SignIn";
import Error from "./components/Error";
import Home from "./components/Home";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import Post from "./components/Post";
import Chat from "./components/Chat";
import ViewProfile from "./components/ViewProfile";
import AddPost from "./components/AddPost";
import ViewPost from "./components/ViewPost";
//firebase
import firebaseConfig from "./firebse/firebaseConfig";
import * as firebase from "firebase/app";
import "firebase/auth";
firebase.initializeApp(firebaseConfig);
function App() {
  const [user, setUser] = useState(null);
  const [currentChatUserDetails, setCurrentChatUserDetails] = useState(null);
  const [currentPostDetails, setCurrentPostDetails] = useState({});
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <Context.Provider
      value={{
        user,
        setUser,
        currentChatUserDetails,
        setCurrentChatUserDetails,
        currentPostDetails,
        setCurrentPostDetails,
        currentUser,
        setCurrentUser,
      }}
    >
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/chat" component={Chat} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/viewprofile" component={ViewProfile} />
          <Route exact path="/addpost" component={AddPost} />
          <Route exact path="/viewpost" component={ViewPost} />
          <Route exact path="*" component={Home}/>
        </Switch>
      </Router>
    </Context.Provider>
  );
}

export default App;
