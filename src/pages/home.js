import React, { Component } from "react";
import Particles from "react-particles-js";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-content text-center">
          <h1 className="name">
            hi,i'am <span>abdelhaq fouad</span>
          </h1>
          <p>
            I AM A FREELANCER GRAPHIC DESIGNER WEB DEVOLOPER FROM MORROCO I, I
            HAD STARTED MY CAREER AS A FREELANCER BACK IN 2015.
          </p>
          <ul className="sociale">
            <li>
              <i className="fa fa-facebook" aria-hidden="true"></i>
            </li>
            <li>
              <i className="fa fa-twitter" aria-hidden="true"></i>
            </li>
            <li>
              <a
                href="https://github.com/wowdevapp"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <Particles
          params={{
            particles: {
              number: {
                value: 100,
                density: {
                  enable: true,
                  value_area: 1000,
                },
              },
              line_linked: {
                enable: false,
              },
              size: {
                value: 5,
                random: true,
              },
              opacity: {
                value: 0.3,
                random: false,
                anim: {
                  enable: false,
                  speed: 4,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
            },
          }}
          height="100vh"
          width="100%"
        />
      </div>
    );
  }
}
