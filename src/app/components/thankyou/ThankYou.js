import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { VARS } from "../../VARS";
import './thankyou.scss';

class ThankYou extends Component {
  render() {
    return (
      <div className="main-content">
        <div id="thankyou">
          <div className="sub-content top">
            <div className="sub-header">
              <Link to={VARS.routePrefix + "/home"}><i className="fa fa-angle-left" aria-hidden="true"></i> Home</Link>
              <p>Thank You</p>
            </div>
            <div className="message">
              <h2>Thank you for you message.</h2>
              <h2>I will get back to you as soon as possible.</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThankYou;
