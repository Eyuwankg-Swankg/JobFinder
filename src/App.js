import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import SignIn from "./components/SignIn";
import Error from "./components/Error";
import Home from "./components/Home";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="*" component={Error}>
          Error
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
