import React, { Component } from "react";
import { Link } from "react-router-dom";
class SideBar extends Component {
  getSideBar = () => {
    document.querySelector(".sidebar").classList.toggle("hide-side");
  };
  render() {
    return (
      <div className="sidebar hide-side">
        <div className="sd-button" onClick={this.getSideBar}>
          <i className="fa fa-bars"></i>
        </div>
        <div className="my-image text-center">
          <img src="/img/me.jpg" alt="me"></img>
        </div>
        <div className="my-navbar">
          <ul className="text-center">
            <li>
              <Link to="/">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="/portfolio">
                <span>portfolio</span>
              </Link>
            </li>
            <li>
              <Link to="/resume">
                <span>resume</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span>contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBar;
