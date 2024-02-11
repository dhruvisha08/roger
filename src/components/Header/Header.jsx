import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo"></div>
      <div className="header-cta-container">
        <div className="dropdown dropleft">
          <div
            className="cta-text  dropdown-toggle"
            id="helpDropdownMenu"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Help
          </div>
          <ul className="dropdown-menu" aria-labelledby="helpDropdownMenu">
            <li className="mb-2">
              <a className="dropdown-item heading" href="#">
                Help
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Order Status
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Dispatch and Delivery
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Returns
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                ContactUs
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Terms of sale
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Terms of Use
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Send Us Feedback
              </a>
            </li>
          </ul>
        </div>
        <div className="divider">|</div>
        <div className="cta-text">Sign In</div>
      </div>
    </div>
  );
};

export default Header;
