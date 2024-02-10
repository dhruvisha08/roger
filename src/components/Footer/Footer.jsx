import React from "react";
import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { ImLocation } from "react-icons/im";
import { MdCopyright } from "react-icons/md";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="info-container d-flex">
          <div className="info-links w-25">
            Your one-stop shop for the latest sports shoes and active wear. From
            cutting-edge tech to must-have accessories, we've got you covered.
          </div>
          <div className="info-links">
            <div className="link">GET HELP</div>
            <div className="link">HOME</div>
            <div className="link">CONTACT US</div>
          </div>
        </div>
        <div className="handle-container">
          <div className="handle-icon-container">
            <RiFacebookCircleLine className="icon" />
          </div>
          <div className="handle-icon-container">
            <FaInstagram className="icon" />
          </div>
          <div className="handle-icon-container">
            <HiOutlineMail className="icon" />
          </div>
        </div>
      </div>
      <div className="copyright-container d-flex">
        <div>
          <ImLocation />
        </div>
        <div className="margin">India</div>
        <div className="copyright-content">
          <MdCopyright /> Roger, Inc. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
