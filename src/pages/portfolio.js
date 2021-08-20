import React, { Component, Fragment } from "react";
export default class Portfolio extends Component {
  render() {
    return (
      <Fragment>
        <div className="portfolio">
          <div className="container">
            <div className="row">
              <div className="title">
                <h2>Portfolio</h2>
                <span>Portfolio</span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4  ">
                <div className="px-4 containerBx rounded">
                  <div className="imgBx">
                    <img src="/img/projects/autoliya.png" alt="" srcset="" />
                  </div>
                  <div className="contentBx">
                    <div className="content">
                    <a  href="https://www.autoliya.com" target="_blank"><h3>Autoliya.com</h3></a>
                      <p>
                        Website for buying and selling new and used cars
                        (made with laravel,bootstrap,js,AWS...)
                        we also create tool for scrapping and maping data dailly from other websites
                        (by Python)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="px-4 containerBx rounded">
                  <div className="imgBx">
                    <img src="/img/projects/resal.png" alt="" srcset="" />
                  </div>
                  <div className="contentBx">
                    <div className="content">
                    <a  href="https://www.resal.me" target="_blank"><h3>Resal.me</h3></a>
                      <p>
                      I was member in resal devlopement team
                      Resal is a digital gift cards and rewards solution. 
                      It is to improve The experience for both businesses and consumers.
                      (Larvel,Vue js,React,AWS,Docker)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="px-4 containerBx rounded">
                  <div className="imgBx">
                    <img src="/img/projects/elitesoccer.png" alt="" srcset="" />
                  </div>
                  <div className="contentBx">
                    <div className="content">
                    <a  href="https://www.elite5soccer.com" target="_blank"><h3>www.elite5soccer.com</h3></a>
                      <p>
                        Stadium  reservation system (wordpress)
                      </p> 
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="px-4 containerBx rounded text-white">
                  <div className="imgBx">
                    <img src="/img/projects/qoloc.png" alt="" srcset="" />
                  </div>
                  <div className="contentBx">
                    <div className="content">
                    <a  href="https://apps.apple.com/fr/app/qoloc/id1562341991#?platform=iphone" target="_blank"><h3>Qoloc.com (En cours)</h3></a>
                      <p>
                       Qoloc is The student social network allowing students to help each other,
                       improve their social interactions, and meet exclusive people.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* 
            <div className="row">
              <div className="col-md-4  overflow-hidden">
                <a href="https://www.autoliya.com/" target="_blank">
                  <div className="bg-white  img-box  rounded">
                    <div className="overlay text-center">
                      <p className="text-white z-10">
                        <strong>Autoliya.com</strong> website for car ads
                      </p>
                    </div>
                    <img
                      src="/img/projects/autoliya.png"
                      className="w-100 hover-img"
                    />
                  </div>
                </a>
              </div>
              <div className="col-md-4  overflow-hidden">
                <div className="bg-white img-box  rounded">
                  <a href="https://www.autoliya.com/" target="_blank">
                    <div className="overlay text-center">
                      <p className="text-white ">My portfolio</p>
                    </div>
                    <img
                      src="/img/projects/portfolio.png"
                      className="w-100 hover-img"
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-4  overflow-hidden">
                <div className="bg-white img-box  rounded">
                  <a href="https://www.elite5soccer.com/" target="_blank">
                    <div className="overlay text-center">
                      <p className="text-white ">
                        website for terrain reservation
                      </p>
                    </div>
                    <img
                      src="/img/projects/elitesoccer.png"
                      className="w-100 hover-img"
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-4 mt-4">
                <div className="bg-white img-box  rounded">
                  <a href="https://www.resal.me/" target="_blank">
                    <div className="overlay text-center">
                      <p className="text-white text-center w-100">
                        saudite website for gifting
                        i was in devlopement team for this big project
                      </p>
                    </div>
                    <img
                      src="/img/projects/resal.png"
                      className="w-100 hover-img"
                    />
                  </a>
                </div>
              </div>
            </div>
           */}
          </div>
        </div>
      </Fragment>
    );
  }
}
