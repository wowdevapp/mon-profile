import React, { Component, Fragment } from "react";
import { FiMail } from 'react-icons/fi';
import { AiOutlinePhone } from 'react-icons/ai';
export default class Contact extends Component {
  render() {
    return (
      <Fragment>
        <div className="contact">
            <div className="p-4">
               <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                          <div className="contact-content px-4 py-4 d-flex align-items-center  w-100">
                            <div>
                              <FiMail size={50} /> 
                            </div> 
                            <div className="ml-2"><span>:</span> m.eng.abdelhaq@gmail.com</div>
                          </div>
                      </div>
                      <div className="col-md-6 ">
                      <div className="contact-content px-4 py-4 d-flex align-items-center  w-100">
                            <div>
                              <AiOutlinePhone size={50} /> 
                            </div> 
                            <div className="ml-2"><span>:</span> +212 608601262</div>
                          </div>
                      </div>
                  </div>
               </div>
            </div>
        </div>
      </Fragment>
    );
  }
}
