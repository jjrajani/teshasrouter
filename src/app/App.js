import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './app.scss';

import { Contact, Home, Projects, Resume, Nav, Footer } from "./components";

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
            <Redirect exact from ="/portfolio" to="home"/>
            <Route exact path="/portfolio/home" component={Home}/>
            <Route path="/portfolio/resume" component={Resume}/>
            <Route path="/portfolio/projects" component={Projects}/>
            <Route path="/portfolio/contact" component={Contact}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
