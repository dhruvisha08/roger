import React from "react";
import Banner from "../Banner/Banner.jsx";
import video from "../../assets/video.mp4";
import "./introduction.scss";

const Introduction = () => {
  return (
    <>
      <Banner />
      <div className="introduction-container">
        <video controls="controls" autoplay="true" src={video}></video>
        <div className="tagline-text">
          <div className="title">SOME MOTIVATIONAL LINE</div>
          <div className="sub-title">FOLLOWED BY SOMETHING POWERFUL</div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
