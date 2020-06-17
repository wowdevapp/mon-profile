import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="about-me">
        <div className=" container">
          <div className="title">
            <h2>about me</h2>
            <span>ABOUT</span>
          </div>
          <div className="row py-4">
            <div className="col-md-6">title</div>
            <div className="col-md-6">details</div>
          </div>
        </div>
      </div>
    );
  }
}
