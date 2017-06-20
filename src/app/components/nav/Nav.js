import React, { Component } from 'react';
import './nav.scss';
import { VARS } from "../../VARS";
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
       <div id="nav">
         <NavLink to={VARS.prefix + "/home"} activeClassName="active">Home</NavLink>
         <NavLink to={VARS.prefix + "/resume"} activeClassName="active">Resum&#233;</NavLink>
         <NavLink to={VARS.prefix + "/projects"} activeClassName="active">Projects</NavLink>
         <NavLink to={VARS.prefix + "/contact"} activeClassName="active">Contact</NavLink>
       </div>
    );
  }
}

export default Nav;
