import React from "react";
import "./App.css";
//react-router
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
//Components
import SignIn from "./components/SignIn";
import Error from "./components/Error";
import Home from "./components/Home";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import Post from "./components/Post"
import Chat from "./components/Chat"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/chat" component={Chat}/>
        <Route exact path="/post" component={Post}/>
        <Route exact path="*" component={Error}>
          Error
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
