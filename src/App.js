import React, { Component } from "react";
import SideBar from "./components/SideBar";
import Home from "./pages/home";
import About from "./pages/about";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main">
          <Router>
            <SideBar />
            <div className="main-content">
              <Switch>
                {/* <Route path="/about">
                  <About />
                </Route>
                <Route path="/contact">
                  <Users />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
                <Route path="/blog">
                  <Blog />
                </Route> */}
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
