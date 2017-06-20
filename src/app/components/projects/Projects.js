import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { VARS } from "../../VARS";
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
      mode: "All"
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="main-content">
        <div id="projects">
          <div className="sub-content top">
            <div className="sub-header">
              <p>Projects</p>
              <Link to={VARS.prefix + "/contact"}>Contact <i className="fa fa-angle-right" aria-hidden="true"></i></Link>
              <p>Here are some of my projects and personal work.</p>
            </div>
          </div>
          <div className="sub-content left">
            <div className="sub-nav">
              <p
                className={this.state.mode === "All" ? "bright" : "dim"}
                onClick={this._toggleVisible.bind(this, "All")}
              >All
              </p>
              <p
                className={this.state.mode === "professional" ? "bright" : "dim"}
                onClick={this._toggleVisible.bind(this, "professional")}
              >Professional
              </p>
              <p
                className={this.state.mode === "personal" ? "bright" : "dim"}
                onClick={this._toggleVisible.bind(this, "personal")}
              >Personal
              </p>
              <p
                className={this.state.mode === "frontend" ? "bright" : "dim"}
                onClick={this._toggleVisible.bind(this, "frontend")}
              >Frontend
              </p>
              <p
                className={this.state.mode === "fullstack" ? "bright" : "dim"}
                onClick={this._toggleVisible.bind(this, "fullstack")}
              >Fullstack
              </p>
            </div>
          </div>
          <div className="sub-content right">
            <div className="sub-header">
              <Link to="/portfolio/contact">Contact <i className="fa fa-angle-right" aria-hidden="true"></i></Link>
            </div>
            <div className="projects">
              <div className="project">
                <Link to={VARS.prefix + "/project/ADP"}>
                  <div className="screen-shot">
                    <div className={this.state.mode !== "personal" ? "bright" : "dim"}></div>
                    <img className="image" src={ADP} alt="CulturaLink screen shot"/>
                    <img className="laptop" src={laptop} alt="Laptop"/>
                  </div>
                  <p className="title">ADP Monitoring Services</p>
                  <p className="language">React</p>
                </Link>
              </div>
              <div className="project">
                <Link to={VARS.prefix + "/project/culturaLink"}>
                  <div className="screen-shot">
                    <div className={this.state.mode === "All" || this.state.mode === "professional" || this.state.mode === "fullstack" || this.state.mode === "frontend" ? "bright" : "dim"}></div>
                    <img className="image" src={culturaLink} alt="CulturaLink screen shot"/>
                    <img className="laptop" src={laptop} alt="Laptop"/>
                  </div>
                  <p className="title">CulturaLink Interpretation</p>
                  <p className="language">React</p>
                </Link>
              </div>
              <div className="project">
                <Link to={VARS.prefix + "/project/mailChimp"}>
                  <div className="screen-shot">
                    <div className={this.state.mode === "All" || this.state.mode === "professional" || this.state.mode === "frontend" ? "bright" : "dim"}></div>
                    <img className="image" src={mailChimp} alt="CulturaLink screen shot"/>
                    <img className="laptop" src={laptop} alt="Laptop"/>
                  </div>
                  <p className="title">MailChimp Annual Report</p>
                  <p className="language">JavaScript</p>
                </Link>
              </div>
              <div className="project">
                <Link to={VARS.prefix + "/project/PSP"}>
                  <div className="screen-shot">
                    <div className={this.state.mode === "All" || this.state.mode === "professional" || this.state.mode === "frontend" ? "bright" : "dim"}></div>
                    <img className="image" src={PSP} alt="CulturaLink screen shot"/>
                    <img className="laptop" src={laptop} alt="Laptop"/>
                  </div>
                  <p className="title">PSP Printing</p>
                  <p className="language">Angular2</p>
                </Link>
              </div>
              <div className="project">
                <Link to={VARS.prefix + "/project/myGarden"}>
                  <div className="screen-shot">
                    <div className={this.state.mode === "All" || this.state.mode === "personal" || this.state.mode === "frontend" || this.state.mode === "fullstack" ? "bright" : "dim"}></div>
                    <img className="image" src={myGarden} alt="myGarden screen shot"/>
                    <img className="laptop" src={laptop} alt="Laptop"/>
                  </div>
                  <p className="title">myGarden</p>
                  <p className="language">Angular</p>
                </Link>
              </div>
              <div className="project">
                <Link to={VARS.prefix + "/project/cageSmash"}>
                  <div className="screen-shot">
                    <div className={this.state.mode === "All" || this.state.mode === "personal" || this.state.mode === "frontend" ? "bright" : "dim"}></div>
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
    state.mode = key;
    this.setState(state);
  }
}

export default Projects;
