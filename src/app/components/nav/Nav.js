import React, { Component } from 'react';
import './nav.scss';
import { NavLink } from 'react-router-dom';

let github = true;
let prefix = github === true ? "/portfolio" : "";

class Nav extends Component {
  render() {
    return (
       <div id="nav">
         <NavLink to={prefix + "/home"} activeClassName="active">Home</NavLink>
         <NavLink to={prefix + "/resume"} activeClassName="active">Resum&#233;</NavLink>
         <NavLink to={prefix + "/projects"} activeClassName="active">Projects</NavLink>
         <NavLink to={prefix + "/contact"} activeClassName="active">Contact</NavLink>
       </div>
    );
  }
}

export default Nav;
