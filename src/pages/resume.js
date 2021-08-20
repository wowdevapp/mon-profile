import React, { Component } from "react";
export default class About extends Component {
  state = {};

  render() {
    return (
      <div className="resume text-white">
        <div className="container">
          <div className="title">
            <h2>MY SKILLS</h2>
            <span>MY SKILLS</span>
          </div>
          <div className="row py-4">
            <div className="col-md-6">
              <div className="skill-one">
                <h4>JAVASCRIPT</h4>
                <div className="">
                  <div className="progress" style={{ height: "15px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      80%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="skill-two">
                <h4>PHP</h4>
                <div className="">
                  <div class="progress" style={{ height: "15px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      90%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 py-4">
              <div className="skill-three">
                <h4>REACT</h4>
                <div className="">
                  <div class="progress" style={{ height: "15px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "75%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      75%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 py-4">
              <div className="skill-four">
                <h4>LARAVEL</h4>
                <div className="">
                  <div class="progress" style={{ height: "15px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      90%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="skill-one">
                <h4>Vue</h4>
                <div className="">
                  <div className="progress" style={{ height: "15px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      80%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="skill-two">
                <h4>Symfony</h4>
                <div className="">
                  <div class="progress" style={{ height: "15px" }}>
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      60%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <div className="resume">
          <div className="container">
            <div className="title">
              <h2>RESUME</h2>
              <span>RESUME</span>
            </div>
            <div className="experience">
              <h2 className="py-4">
                <i class="fa fa-briefcase"></i> working experience
              </h2>
              <div className="timeline-exp">
              <div className="row py-2">
                  <div className="col-md-3">
                    <p className="exp-date">10/2020-present</p>
                  </div>
                  <div className="col-md-8">
                    <h4 style={{ color: "#02a4d3" }}>
                      Fullstack web devloper <span style={{ color: "#9097ad" }}>Tingisweb</span>
                    </h4>
                    <p style={{ fontSize: "16px" }}>
                      Conception and devlopement of website for car advertisment autoliya.com
                    </p>
                  </div>
                </div>
                <div className="row py-2">
                  <div className="col-md-3">
                    <p className="exp-date">2016-present</p>
                  </div>
                  <div className="col-md-8">
                    <h4 style={{ color: "#02a4d3" }}>
                      Designer and front end web developer
                    </h4>
                    <p style={{ fontSize: "16px" }}>
                      i work as freelancer Designer and front end web devoloper
                      in different platform and personnel project
                    </p>
                  </div>
                </div>
                <div className="row py-2">
                  <div className="col-md-3">
                    <p className="exp-date">06/2020-09/2020</p>
                  </div>
                  <div className="col-md-8">
                    <h4 style={{ color: "#02a4d3" }}>
                      fullstack web developer at
                      <span style={{ color: "#9097ad" }}> L'NKBOOT</span>
                    </h4>
                    <p style={{ fontSize: "16px" }}>
                      i work with company l'inkboot as fullstack web devoloper
                      fixing bugs for client and being part of team working on
                      the company website
                    </p>
                  </div>
                </div>
                <div className="row  py-2">
                  <div className="col-md-3">
                    <p className="exp-date">02/2020-06/2020</p>
                  </div>
                  <div className="col-md-8">
                    <h4 style={{ color: "#02a4d3" }}>
                      fullstack web developer at
                      <span className="ml-1" style={{ color: "#9097ad" }}>
                        DEVINWEB
                      </span>
                    </h4>
                    <p style={{ fontSize: "16px" }}>
                      i was being part in team of resal.me Resal is in the
                      business of digitizing gifting by offering end to end
                      solutions to consumers , corporate , and retailers i used
                      technologies like vue,react,laravel..
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="education">
              <h2 className="py-4">
                <i class="fa fa-book"></i> Educational Qualifications
              </h2>
              <div className="timeline-exp">
                <div className="row py-2">
                  <div className="col-md-3">
                    <p className="exp-date">2010/2011</p>
                  </div>
                  <div className="col-md-8">
                    <h4 style={{ color: "#02a4d3" }}>
                      Lycée Hassan 2,Tinejdad
                    </h4>
                    <p style={{ fontSize: "16px" }}>
                      Baccalaureat en science physique <br /> Mention : Bien
                    </p>
                  </div>
                </div>
                <div className="row py-2">
                  <div className="col-md-3">
                    <p className="exp-date">2013/2014</p>
                  </div>
                  <div className="col-md-8">
                    <h4 style={{ color: "#02a4d3" }}>
                      Faculté des Sciences et Techniques,Errachidia
                    </h4>
                    <p style={{ fontSize: "16px" }}>
                      Diplôme d'études universitaires en sciences et technique
                    </p>
                  </div>
                </div>
                <div className="row  py-2">
                  <div className="col-md-3">
                    <p className="exp-date">2015/2016</p>
                  </div>
                  <div className="col-md-8">
                    <h4 style={{ color: "#02a4d3" }}>
                      Faculté des Sciences et Techniques,Errachidia
                    </h4>
                    <p style={{ fontSize: "16px" }}>
                      Licence en sciences et technique
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
