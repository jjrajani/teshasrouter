import React, { Component } from 'react';
import './footer.scss';
import { NavLink } from "react-router-dom";

let github = true;
let prefix = github === true ? "/portfolio" : "";

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="left">
          <a href="http://www.github.com/jjrajani" target="blank"><i className="fa fa-github-square" aria-hidden="true"/>Github</a>
          <a href="https://www.linkedin.com/in/jenna-rajani/" target="blank"><i className="fa fa-linkedin-square" aria-hidden="true"/>Linkedin</a>
        </div>
        <div className="center">
          <a href="#app"><i className="fa fa-long-arrow-up"></i></a>
        </div>
        <div className="right">
          <div className="footer_inner_right">
            <NavLink to={prefix + "/home"} activeClassName="active">Home</NavLink>
            <NavLink to={prefix + "/projects"} activeClassName="active">Projects</NavLink>
          </div>
          <div className="footer_inner_left">
            <NavLink to={prefix + "/resume"} activeClassName="active">Resum&#233;</NavLink>
            <NavLink to={prefix + "/contact"} activeClassName="active">Contact</NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
