import React from "react";

const Card = (props) => {
  return (
    <div className="parent">
      <div className="compaines">
        <h1>{props.companyName}</h1>
        <h2>{props.jobRole}</h2>
        <h4>{props.postedDate}</h4>
        <h5>{props.tag1}</h5>
        <h5>{props.salary}</h5>
      </div>
    </div>
  );
};

export default Card;
