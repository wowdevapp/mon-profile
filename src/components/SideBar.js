import React, { Component } from "react";
import { Link } from "react-router-dom";
class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sd-button">
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
              <Link to="/blog">
                <span>blog</span>
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
