import React from "react";
import Frame145 from "../Frame145";
import Close from "../Close";
import Frame15902 from "../Frame15902";
import Group2122 from "../Group2122";
import "./X11FAQsPageMobile.css";

function X11FAQsPageMobile(props) {
  const {
    place,
    overlapGroup,
    rectangle77,
    text117,
    text118,
    frame145Props,
    closeProps,
    frame15902Props,
    frame159022Props,
    frame159023Props,
    frame159024Props,
    frame159025Props,
    frame159026Props,
    group2122Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="x11-faq-s-page-mobile screen">
        <Frame145 group86Props={frame145Props.group86Props} iconMenuProps={frame145Props.iconMenuProps} />
        <h1 className="place valign-text-middle typographyheadlineh4-extrabold-24">{place}</h1>
        <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <img className="rectangle-77" src={rectangle77} />
        </div>
        <div className="frame-1653">
          <div className="frame-1589 border-1px-black-2">
            <div className="frame-1591">
              <div className="text-3 valign-text-middle overpass-bold-shark-16px">{text117}</div>
              <Close src={closeProps.src} />
            </div>
            <p className="text-4 typographybodysmall-12-regular">{text118}</p>
          </div>
          <Frame15902 text119={frame15902Props.text119} plusProps={frame15902Props.plusProps} />
          <Frame15902 text119={frame159022Props.text119} plusProps={frame159022Props.plusProps} />
          <Frame15902 text119={frame159023Props.text119} plusProps={frame159023Props.plusProps} />
          <Frame15902 text119={frame159024Props.text119} plusProps={frame159024Props.plusProps} />
          <Frame15902 text119={frame159025Props.text119} plusProps={frame159025Props.plusProps} />
          <Frame15902 text119={frame159026Props.text119} plusProps={frame159026Props.plusProps} />
        </div>
        <Group2122
          group862Props={group2122Props.group862Props}
          group872Props={group2122Props.group872Props}
          group322Props={group2122Props.group322Props}
          frame5Props={group2122Props.frame5Props}
        />
      </div>
    </div>
  );
}

export default X11FAQsPageMobile;
