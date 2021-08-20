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
                i'm an experienced, full-time freelance developer (5 years) with a wide cross-section of knowledge in both backend, 
                frontend and mobile tech-stack.(Larvel,Symfony,Vue,React,ReactNative)
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
                <a href="/cv/cv.pdf" download>
                   <button className="cv btn">DOWNLOAD CV</button>
                </a>                
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
                text="it is so important to have a website design that represents your brand values. We'll help you make that first impression a 
                good impression in the first seven seconds through analysis, design, implementation and deployment."
                icon="BsDisplay"
              />
              <Service
                head="web dev"
                text="From a simple presentation site to e-commerce sites and whatever the size of your project,
                    tell us your need and we will provide you with the solution you need!"
                       icon="AiFillCode"
              />
              <Service
                head="Mobile  Dev"
                text="Digitize your processes and be just a click away with our advanced web application solutions,
                IOS or Android mobile applications;"
                       icon="ImMobile"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
