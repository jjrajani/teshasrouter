import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,

  Link
} from 'react-router-dom';
import './app.scss';

import { Contact, Detail, Home, Projects, Resume, Nav, Footer } from "./components";

let github = false;
let redirect = github === true ? "/portfolio" : "/";
let prefix = github === true ? "/portfolio" : "";

class App extends Component {

  render() {
    return (
      <Router>
        <div id="app">
          <div className="app-header">
            <div className="left">
              <Link to={prefix + "/home"} className="name">Jenna Rajani</Link>
              <div className="bottom">
                <p>Web Developer</p>
                <a href="http://www.github.com/jjrajani" target="blank"><i className="fa fa-github" aria-hidden="true"/></a>
              </div>
            </div>
            <Nav />
          </div>
          <Switch>
            <Redirect exact from={redirect} to={prefix + "/home"}/>
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
