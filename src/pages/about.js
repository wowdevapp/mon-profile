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
          <div className="row py-5">
            <div className="col-md-6 my-image">
              <img className="img-fluid" src="/img/about-image.jpg" alt="" />
            </div>
            <div className="col-md-6">
              <div className="details-content">
                <h2>
                  I am <span>Fouad Abdelhaq</span>
                </h2>
                <p>
                  I am a frontend web developer. I can provide clean code and
                  pixel perfect design. I also make website more & more
                  interactive with web animations.
                </p>
                <ul className="identification">
                  <li>
                    <b>Full Name</b> Devid Chester
                  </li>
                  <li>
                    <b>Age</b> 26
                  </li>
                  <li>
                    <b>Nationality </b>marocain
                  </li>
                  <li>
                    <b> Languages</b> french,English,Arabic
                  </li>
                  <li>
                    <b>Address </b>idrissia,hay almowadafine tanger
                  </li>
                </ul>
                <button className="cv btn">DOWNLOAD CV</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
