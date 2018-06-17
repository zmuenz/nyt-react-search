import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TopNav from "./components/TopNav";
import Jumbotron from "./components/Jumbotron";
import SavedArticles from "./pages/SavedArticles";
import Search from "./pages/Search";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopNav />
          <Jumbotron />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={SavedArticles} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
