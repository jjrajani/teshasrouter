import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,

  Link
} from 'react-router-dom';
import './app.scss';
import { VARS } from "./VARS";
import { Contact, Detail, Home, Projects, Resume, Nav, Footer } from "./components";

class App extends Component {

  render() {
    return (
      <Router>
        <div id="app">
          <div className="app-header">
            <div className="left">
              <Link to={VARS.prefix + "/home"} className="name">Jenna Rajani</Link>
              <div className="bottom">
                <p>Web Developer</p>
                <a href="http://www.github.com/jjrajani" target="blank"><i className="fa fa-github" aria-hidden="true"/></a>
              </div>
            </div>
            <Nav />
          </div>
          <Switch>
            <Redirect exact from={VARS.redirect} to={VARS.prefix + "/home"}/>
            <Route exact path={VARS.prefix + "/home"} component={Home}/>
            <Route exact path={VARS.prefix + "/resume"} component={Resume}/>
            <Route exact path={VARS.prefix + "/projects"} component={Projects}/>
            <Route exact path={VARS.prefix + "/project/:projectName"} component={Detail}/>
            <Route exact path={VARS.prefix + "/contact"} component={Contact}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
