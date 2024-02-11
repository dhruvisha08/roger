import React from "react";
import Banner from "../Banner/Banner.jsx";
import "./introduction.scss";

const Introduction = () => {
  return (
    <>
      <Banner />
      <div className="introduction-container">
        <div className="video-container">
          VIDEO OR IMAGES SLIDER
        </div>
        <div className="tagline-text">
          <div className="title">SOME MOTIVATIONAL LINE</div>
          <div className="sub-title">FOLLOWED BY SOMETHING POWERFUL</div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
