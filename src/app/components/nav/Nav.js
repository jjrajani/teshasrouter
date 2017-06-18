import React, { Component } from 'react';
import './nav.scss';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
       <div id="nav">
         <NavLink to="/portfolio/home" activeClassName="active">Home</NavLink>
         <NavLink to="/portfolio/resume" activeClassName="active">Resum&#233;</NavLink>
           <NavLink to="/portfolio/projects" activeClassName="active">Projects</NavLink>
         <NavLink to="/portfolio/contact" activeClassName="active">Contact</NavLink>
       </div>
    );
  }
}

export default Nav;
