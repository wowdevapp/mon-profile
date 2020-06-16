import React, { Component } from "react";
import Particles from "react-particles-js";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-content text-center">
          <h1 className="name">
            HI,I'M <span> ABDELHAQ FOUAD</span>
          </h1>
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
