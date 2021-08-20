import React from "react";
import { BsDisplay } from 'react-icons/bs';
import { AiFillCode } from 'react-icons/ai';
import { ImMobile } from 'react-icons/im';
const Service = (props) => {
  return (
    <div className="col-md-4">
      <div className="w-design">      
         {props.icon=="BsDisplay" && <BsDisplay size={50}/>}
         {props.icon=="AiFillCode" && <AiFillCode size={50}/>}
         {props.icon=="ImMobile" && <ImMobile size={50}/>}
        {/* <img
          className=""
          src="/img/design.svg"
          alt=""
          style={{ width: "50px", height: "50px" }}
        /> */}

        <h4 className="py-3">{props.head}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Service;
