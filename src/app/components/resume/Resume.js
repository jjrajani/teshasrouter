import React, { Component } from 'react';
import './resume.scss';
const resume = require("../../assets/Resume.pdf");

class Resume extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="main-content">
        <div id="resume">
          <div className="sub-content left">
            <div className="sub-header">
              <p>Resum&#233;</p>
              <a href={resume} target="blank"><i className="fa fa-file-pdf-o" aria-hidden="true"></i>Dowload PDF</a>
            </div>
            <div className="sub-nav">
              <a href="#frontend">Frontend</a>
              <a href="#design">Design</a>
              <a href="#backend">Backend</a>
              <a href="#frameworks">Frameworks</a>
              <a href="#environments">Environments</a>
              <a href="#education">Education</a>
              <a href="#travels">Travels</a>
            </div>
          </div>
          <div className="right">
            <div id="frontend" className="sub-content">
              <p className="title">Frontend</p>
              <p>JavaScript, TypeScript, jQuery, AJAX, REST api</p>
            </div>
            <div id="design" className="sub-content">
              <p className="title">Design</p>
              <p>Responsive Web Design, HTML, CSS3, SASS, Bootstrap</p>
            </div>
            <div id="backend" className="sub-content">
              <p className="title">Backend</p>
              <p>Node.js, Express, Sequelize, Jade, MySQL, Postgres</p>
            </div>
            <div id="frameworks" className="sub-content">
              <p className="title">Frameworks</p>
              <p>ReactJS, AngularJS, Ruby on Rails, D3.js, HighCharts</p>
            </div>
            <div id="environments" className="sub-content">
              <p className="title">Environments</p>
              <p>Webpack, Git, Gulp, Agile, SCRUM, Waterfall</p>
            </div>
            <div id="education" className="sub-content">
              <p className="title">Education</p>
              <p>
                <span className="bold">Montessori Beginnings </span>
                <a href="http://www.opmontessori.com" target="blank">Old Peachtree </a>
                 - until 6th grade
              </p>
              <p>
                <span className="bold">All Things Considered </span>
                <a href="http://www.hunter.cuny.edu/main/" target="blank">CUNY Hunter </a>
                 - NYC, 2005-2008
              </p>
              <p>
                <span className="bold">Front–End Engineering </span>
                <a href="http://www.theironyard.com" target="blank">The Iron Yard </a>
                 - Atlanta, 2016
              </p>
            </div>
            <div id="travels" className="sub-content">
              <p className="title">Travels</p>
              <p>30 US States, Costa Rica, France, UK, Uganda, Rwanda</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
