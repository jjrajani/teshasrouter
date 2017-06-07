import React, { Component } from 'react';
import './detail.scss';
import PROJECTS from "./projects";
const laptop = `https://placeit.net/uploads/stage/stage_image/288/default_apple-2012-15-inch-macbook-pro-retina-big.png`;

class Detail extends Component {
  constructor(props) {
    super(props);
    console.log('params', props.match.params.projectName);
    let projectName = props.match.params.projectName;
    this.state = {
      project: PROJECTS[projectName]
    }
  }

  render() {
    console.log('this.state', this.state);
    let project = this.state.project;
    return (
       <div id="detail">
         <div className="project">
           <p className="title">{project.title}</p>
           <p className="blurb">{project.blurb}</p>
           <p><span className="bold">Client: </span>{project.client}</p>
           <div className="screen-shot">
             <img className="image" src={project.img} alt="CulturaLink screen shot"/>
             <img className="laptop" src={laptop} alt="Laptop"/>
           </div>
           { this._projectDetails(project.details) }
           { this._projectTechnology(project.technology) }
         </div>
       </div>
    );
  }

  _projectDetails = (details) => {
    details = details.map((d, i) => {
      return <li key={i}><p className="list-item">{d}</p></li>;
    });
    return (
      <ul>
        <li className="list-head"><p className="title">Details</p></li>
        {details}
      </ul>
    );
  }

  _projectTechnology = (techs) => {
    techs = techs.map((t, i) => {
      return <li key={i}><p className="list-item">{t}</p></li>;
    });
    return (
      <ul>
        <li className="list-head"><p className="title">Technology</p></li>
        {techs}
      </ul>
    );
  }

}

export default Detail;
