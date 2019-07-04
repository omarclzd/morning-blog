import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Main from "./Main";

class App extends Component {
  state = {
    isLoggedIn: false
  };

  render() {
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/main" component={Main} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
