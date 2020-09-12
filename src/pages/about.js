import React, { Component } from "react";
import Service from "../components/Service.js";

export default class About extends Component {
  state = {
    name: "Fouad Abdelhaq",
    age: 26,
    nationality: "Marocain",
  };

  render() {
    return (
      <div className="about-me">
        <div className=" container">
          <div className="title">
            <h2>about me</h2>
            <span>ABOUT</span>
          </div>
          <div className="row py-5">
            <div className="d-none d-md-block col-md-6 my-image">
              <img className="img-fluid" src="/img/about-image.jpg" alt="" />
            </div>
            <div className="col-md-6">
              <div className="details-content">
                <h2>
                  I am <span>{this.state.name}</span>
                </h2>
                <p>
                  I am Designer fullstack web devoloper and with more than 3
                  years of experience i use laravel vue react on my works i can
                  provide clean and propre work .
                </p>
                <ul className="identification">
                  <li>
                    <b>Full Name</b>
                    {this.state.name}
                  </li>
                  <li>
                    <b>Age</b>
                    {this.state.age}
                  </li>
                  <li>
                    <b>Nationality</b>
                    {this.state.nationality}
                  </li>
                  <li>
                    <b> Languages</b>French,English,Arabic
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
        <div className="services">
          <div className="container">
            <div className="title">
              <h2>Srvices</h2>
              <span>Services</span>
            </div>
            <div className="row py-5">
              <Service
                head="web design"
                text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
                       quibusdam, dolorum voluptatem hic consectetur"
              />
              <Service
                head="web dev"
                text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
                       quibusdam, dolorum voluptatem hic consectetur"
              />
              <Service
                head="Mobile  Dev"
                text=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
                       quibusdam, dolorum voluptatem hic consectetur"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
