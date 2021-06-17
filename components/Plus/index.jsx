import React from "react";
import "./Plus.css";

function Plus(props) {
  const { src } = props;

  return (
    <div className="plus">
      <img className="vector-4" src={src} />
    </div>
  );
}

export default Plus;
