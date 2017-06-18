import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './app.scss';

import { Contact, Detail, Home, Projects, Resume, Nav, Footer } from "./components";

let github = true;
let prefix = github === true ? "/portfolio" : "";

class App extends Component {

  render() {
    return (
      <Router>
        <div id="app">
          <div className="app-header">
            <p className="name">Jenna Rajani</p>
            <Nav />
          </div>
          <Switch>
            <Redirect exact from ="/" to="home"/>
            <Route exact path={prefix + "/home"} component={Home}/>
            <Route exact path={prefix + "/resume"} component={Resume}/>
            <Route exact path={prefix + "/projects"} component={Projects}/>
            <Route exact path={prefix + "/project/:projectName"} component={Detail}/>
            <Route exact path={prefix + "/contact"} component={Contact}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
