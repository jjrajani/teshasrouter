import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import './home.scss';
const logo = require("../../assets/lost-in-the-trees.png");
const culturaLink = require("../../assets/culturalink.png");
const ADP = require("../../assets/ADP.png");
const mailChimp = require("../../assets/mail-chimp.png");
const PSP = require("../../assets/PSP.png");
const laptop = `https://placeit.net/uploads/stage/stage_image/288/default_apple-2012-15-inch-macbook-pro-retina-big.png`;

class Home extends Component {
  render() {
    return (
      <div className="main-content">
        <div id="home">
          <div className="sub-content top">
            <div className="sub-header">
              <p>Home</p>
              <NavLink to="/portfolio/resume">Resum&#233; <i className="fa fa-angle-right" aria-hidden="true"></i></NavLink>
            </div>
            <div className="left">
              <div className="title-wrapper">
                <p className="title one">WEB DEVELOPER</p>
                <p className="title two">FRONT–END ENGINEER</p>
              </div>
              <div className="blurb-wrapper">
                <p className="blurb">I&#8216;m Jenna Rajani and love code for it&#8216;s endless possibility. I enjoy focusing on the user-experience as well as process efficiency while creating web applications.</p>
                <p className="blurb">I have contributed to more than 3 large-scale applications and many smaller, design centered, applications. When I&#8216;m not coding you&#8216;ll find me either playing paino or planning my next excurssion.</p>
              </div>
            </div>
            <div className="right">
              <div className="home-image">
                <img src={logo} alt="Lost in the trees"/>
              </div>
            </div>
          </div>
          <div className="sub-content">
            <div className="sub-header">
              <p>Projects</p>
              <NavLink to="/portfolio/projects">See more <i className="fa fa-angle-right" aria-hidden="true"></i></NavLink>
            </div>
            <div className="projects">
              <Link to="/portfolio/project/ADP">
                <div className="project">
                  <div className="screen-shot">
                    <img className="image" src={ADP} alt="CulturaLink screen shot"/>
                    <img className="laptop" src={laptop} alt="Laptop"/>
                  </div>
                  <p className="title">ADP Monitoring Services</p>
                  <p className="language">ReactJS</p>
                </div>
              </Link>
              <Link to="/portfolio/project/culturaLink">
                <div className="project">
                  <div className="screen-shot">
                    <img className="image" src={culturaLink} alt="CulturaLink screen shot"/>
                    <img className="laptop" src={laptop} alt="Laptop"/>
                  </div>
                  <p className="title">CulturaLink</p>
                  <p className="language">ReactJS</p>
                </div>
              </Link>
              <Link to="/portfolio/project/mailChimp">
                <div className="project">
                  <div className="screen-shot">
                    <img className="image" src={mailChimp} alt="CulturaLink screen shot"/>
                    <img className="laptop" src={laptop} alt="Laptop"/>
                  </div>
                  <p className="title">MailChimp</p>
                  <p className="language">Ruby on Rails</p>
                </div>
              </Link>
              <Link to="/portfolio/project/PSP">
                <div className="project">
                  <div className="screen-shot">
                    <img className="image" src={PSP} alt="CulturaLink screen shot"/>
                    <img className="laptop" src={laptop} alt="Laptop"/>
                  </div>
                  <p className="title">PSP Printing</p>
                  <p className="language">Angular2</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
