import React from "react";

const Service = (props) => {
  return (
    <div className="col-md-4">
      <div className="w-design">
        <i className="fa fa-desktop fa-3x" aria-hidden="true"></i>
        <h4 className="py-3">{props.head}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Service;
