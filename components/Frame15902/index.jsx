import React from "react";
import Plus from "../Plus";
import "./Frame15902.css";

function Frame15902(props) {
  const { text119, plusProps } = props;

  return (
    <div className="frame-159 border-1px-black-2">
      <div className="text valign-text-middle overpass-bold-shark-16px">{text119}</div>
      <Plus src={plusProps.src} />
    </div>
  );
}

export default Frame15902;
