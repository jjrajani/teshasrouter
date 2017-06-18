import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './app.scss';

import { Contact, Detail, Home, Projects, Resume, Nav, Footer } from "./components";

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
            <Route exact path="/home" component={Home}/>
            <Route exact path="/resume" component={Resume}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/project/:projectName" component={Detail}/>
            <Route exact path="/contact" component={Contact}/>
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
