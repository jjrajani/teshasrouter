import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './projects.scss';
const culturaLink = require("../../assets/culturalink.png");
const ADP = require("../../assets/ADP.png");
const mailChimp = require("../../assets/mail-chimp.png");
const PSP = require("../../assets/PSP.png");
const myGarden = require("../../assets/my-garden-ss.png");
const cageSmash = require("../../assets/cage-smash-ss.png");
const laptop = `https://placeit.net/uploads/stage/stage_image/288/default_apple-2012-15-inch-macbook-pro-retina-big.png`;

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      professional: true,
      personal: true,
      frontend: true,
      fullstack: true,
    }
  }

  render() {
    console.log("state", this.state)
    return (
      <div className="main-content">
        <div id="projects">
          <div className="sub-content left">
            <div className="sub-header">
            <p>Projects</p>
            <p>Here are my projects and personal work.</p>
            </div>
            {this.state.professional}
            <div className="sub-nav">
              <p
                className={this.state.professional ? "bright" : "dim"}
                onClick={this._toggleVisible.bind(this, "professional")}
              >Professional
              </p>
              <p
                className={this.state.personal ? "bright" : "dim"}
                onClick={this._toggleVisible.bind(this, "personal")}
              >Personal
              </p>
              <p
                className={this.state.frontend ? "bright" : "dim"}
                onClick={this._toggleVisible.bind(this, "frontend")}
              >Frontend
              </p>
              <p
                className={this.state.fullstack ? "bright" : "dim"}
                onClick={this._toggleVisible.bind(this, "fullstack")}
              >Full-stack
              </p>
            </div>
          </div>
          <div className="sub-content right">
            <div className="projects">
              <div className="project">
                <Link to="/project/ADP">
                  <div className="screen-shot">
                    <div className={this.state.professional || this.state.frontend ? "bright" : "dim"}></div>
                    <img className="image" src={ADP} alt="CulturaLink screen shot"/>
                    <img className="laptop" src={laptop} alt="Laptop"/>
                  </div>
                  <p className="title">ADP Monitoring Services</p>
                  <p className="language">ReactJS</p>
                </Link>
              </div>
              <div className="project">
                <Link to="/project/culturaLink">
                  <div className="screen-shot">
                    <div className={this.state.professional || this.state.fullstack || this.state.frontend ? "bright" : "dim"}></div>
                    <img className="image" src={culturaLink} alt="CulturaLink screen shot"/>
                    <img className="laptop" src={laptop} alt="Laptop"/>
                  </div>
                  <p className="title">CulturaLink Interpretation</p>
                  <p className="language">ReactJS</p>
                </Link>
              </div>
              <div className="project">
                <Link to="/project/mailChimp">
                  <div className="screen-shot">
                    <div className={this.state.professional || this.state.frontend ? "bright" : "dim"}></div>
                    <img className="image" src={mailChimp} alt="CulturaLink screen shot"/>
                    <img className="laptop" src={laptop} alt="Laptop"/>
                  </div>
                  <p className="title">MailChimp Annual Report</p>
                  <p className="language">Ruby on Rails</p>
                </Link>
              </div>
              <div className="project">
                <Link to="/project/PSP">
                  <div className="screen-shot">
                    <div className={this.state.professional || this.state.frontend ? "bright" : "dim"}></div>
                    <img className="image" src={PSP} alt="CulturaLink screen shot"/>
                    <img className="laptop" src={laptop} alt="Laptop"/>
                  </div>
                  <p className="title">PSP Printing</p>
                  <p className="language">Angular2</p>
                </Link>
              </div>
              <div className="project">
                <Link to="/project/myGarden">
                  <div className="screen-shot">
                    <div className={this.state.personal || this.state.frontend || this.state.fullstack ? "bright" : "dim"}></div>
                    <img className="image" src={myGarden} alt="myGarden screen shot"/>
                    <img className="laptop" src={laptop} alt="Laptop"/>
                  </div>
                  <p className="title">myGarden</p>
                  <p className="language">Angular</p>
                </Link>
              </div>
              <div className="project">
                <Link to="/project/cageSmash">
                  <div className="screen-shot">
                    <div className={this.state.personal || this.state.frontend ? "bright" : "dim"}></div>
                    <img className="image" src={cageSmash} alt="cageSmash screen shot"/>
                    <img className="laptop" src={laptop} alt="Laptop"/>
                  </div>
                  <p className="title">cageSmash</p>
                  <p className="language">Javascript</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
     </div>
    );
  }

  _toggleVisible = (key, e) => {
    let state = this.state;
    let fresh = true;
    Object.keys(state).forEach((k) => {
      if (state[k] === false) { fresh = false }
    });
    if (this.state[key] === true && !fresh) {
      Object.keys(state).forEach((k) => { state[k] = true; });
    } else {
      state = this._switchVisibile(state, key);
    }
    this.setState(state);
  }
  _switchVisibile = (state, key) => {
    Object.keys(state).forEach((k) => {
      k === key
      ? state[k] = true
      : state[k] = false;
    });
    return state;
  }
}

export default Projects;
