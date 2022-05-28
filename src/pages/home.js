import React, { Component } from "react";


export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-content text-center">
          <h1 className="name">
            hi,i'am <span>abdelhaq fouad</span>
          </h1>
          <p>
          I'm an experienced, full-time freelance developer (5 years) with a wide cross-section of knowledge in both backend, frontend and mobile tech-stack.
My expertise are:
PHP Web development, MVC frameworks(Larvel,Symfony), Wordpress theme & plugins development, HTML5, CSS3, Javascript,Vue js,React ,React native, APIs, Payment Gateways Integration, AWS (Amazon Web Services).
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
      </div>
    );
  }
}
