import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X11FAQsPageMobile from "./components/X11FAQsPageMobile";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|11-faq-s-page-mobile)">
          <X11FAQsPageMobile {...x11FAQsPageMobileData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const whiteData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg",
};

const group86Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-3@2x.svg",
    whiteProps: whiteData,
};

const iconMenuData = {
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
};

const frame145Data = {
    group86Props: group86Data,
    iconMenuProps: iconMenuData,
};

const closeData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-118@2x.svg",
};

const plusData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-119@2x.svg",
};

const frame15902Data = {
    text119: "Lorem Ipsum passages ?",
    plusProps: plusData,
};

const plus2Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-119@2x.svg",
};

const frame159022Data = {
    text119: "Lorem Ipsum passages ?",
    plusProps: plus2Data,
};

const plus3Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-119@2x.svg",
};

const frame159023Data = {
    text119: "Lorem Ipsum passages ?",
    plusProps: plus3Data,
};

const plus4Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-119@2x.svg",
};

const frame159024Data = {
    text119: "Lorem Ipsum passages ?",
    plusProps: plus4Data,
};

const plus5Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-119@2x.svg",
};

const frame159025Data = {
    text119: "Lorem Ipsum passages ?",
    plusProps: plus5Data,
};

const plus6Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-119@2x.svg",
};

const frame159026Data = {
    text119: "Lorem Ipsum passages ?",
    plusProps: plus6Data,
};

const group8622Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-17@2x.svg",
};

const facebookAppSymbolData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/f-1-1@2x.svg",
};

const twitterData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-157@2x.svg",
};

const group872Data = {
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-154@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-19@2x.svg",
    facebookAppSymbolProps: facebookAppSymbolData,
    twitterProps: twitterData,
};

const group322Data = {
    place: "Contact",
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-20@2x.svg",
    phone: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-151@2x.svg",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-152@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-153@2x.svg",
    text165: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    text164: "+91 8976535221, +91 8755645342",
    contactWebuildCom: "contact@webuild.com",
};

const frame140Data = {
    aboutUs: "About Us",
    projects: "Projects",
};

const frame1402Data = {
    aboutUs: "Gallery",
    projects: "Knowledge Transfer",
    className: "frame-14-1",
};

const frame1403Data = {
    aboutUs: "Blogs",
    projects: "FAQ’s",
    className: "frame-14",
};

const frame5Data = {
    quickLinks: "Quick Links",
    frame140Props: frame140Data,
    frame1402Props: frame1402Data,
    frame1403Props: frame1403Data,
};

const group2122Data = {
    group862Props: group8622Data,
    group872Props: group872Data,
    group322Props: group322Data,
    frame5Props: frame5Data,
};

const x11FAQsPageMobileData = {
    place: "Contact",
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-76-4@2x.png",
    rectangle77: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-77@2x.png",
    text117: "Lorem Ipsum passages ?",
    text118: "There are many variations of passages of Lorem Ipsum available but the majority have suffered dummy alteration in that an some form by the injected humour or randomised words which don’t look even that slightly believable. If you are Lorem Ipsums your need to be sure there isn’t anything embarrassing.",
    frame145Props: frame145Data,
    closeProps: closeData,
    frame15902Props: frame15902Data,
    frame159022Props: frame159022Data,
    frame159023Props: frame159023Data,
    frame159024Props: frame159024Data,
    frame159025Props: frame159025Data,
    frame159026Props: frame159026Data,
    group2122Props: group2122Data,
};

