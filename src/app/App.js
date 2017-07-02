import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,

  Link
} from 'react-router-dom';
import './app.scss';
import { VARS } from "./VARS";
import { Contact, Detail, Home, Projects, Resume, ThankYou, Nav, Footer } from "./components";

class App extends Component {

  render() {
    return (
      <Router>
        <div id="app">
          <div className="app-header">
            <div className="left">
              <Link to={VARS.routePrefix + "/home"} className="name">Jenna Rajani</Link>
              <div className="bottom">
                <p>Web Developer</p>
                <a href="http://www.github.com/jjrajani" target="blank" alt="github link"><i className="fa fa-github" aria-hidden="true"/></a>
              </div>
            </div>
            <Nav />
          </div>
          <Switch>
            <Redirect exact from={VARS.redirect} to={VARS.routePrefix + "/home"}/>
            <Redirect exact from={"/portfolio"} to={VARS.routePrefix + "/home"}/>
            <Redirect exact from={"/portfolio/thankyou"} to={VARS.routePrefix + "/thankyou"}/>
            <Route exact path={VARS.routePrefix + "/home"} component={Home}/>
            <Route exact path={VARS.routePrefix + "/resume"} component={Resume}/>
            <Route exact path={VARS.routePrefix + "/projects"} component={Projects}/>
            <Route exact path={VARS.routePrefix + "/project/:projectName"} component={Detail}/>
            <Route exact path={VARS.routePrefix + "/contact"} component={Contact}/>
            <Route exact path={VARS.routePrefix + "/thankyou"} component={ThankYou}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
