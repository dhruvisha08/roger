import React from "react";
import navBarLogo from "../../assets/navbarLogo.jpg";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBag2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src={navBarLogo} height="70px" width="70px" />
      </div>
      <div className="categories-container">
        <ul className="nav-menu">
          <li>
            <NavLink
              to="/new-arrivals"
              key="new-arrivals"
              className="quick-link"
              activeClassName="active"
              title="New"
            >
              NEW
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shoes"
              key="shoes"
              className="quick-link"
              activeClassName="active"
              title="Shoes"
            >
              SHOES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/active-wear"
              key="active-wear"
              className="quick-link"
              activeClassName="active"
              title="Active Wear"
            >
              ACTIVE WEAR
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to="/about-us"
              key="about-us"
              className="quick-link"
              activeClassName="active"
              title="About Us"
            >
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              key="contact-us"
              className="quick-link"
              activeClassName="active"
              title="Contact Us"
            >
              CONTACT US
            </NavLink>
          </li> */}
        </ul>
      </div>
      <div className="cta-container">
        <div className="search-container margin-right">
          <FaMagnifyingGlass className="icon" />
          <input className="search-input" type="search" placeholder="Search" />
        </div>
        <div className="margin-right">
          <FaRegHeart className="icon" />
        </div>
        <div>
          <RiShoppingBag2Line className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
