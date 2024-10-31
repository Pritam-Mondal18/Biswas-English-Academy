import React, { useState } from "react";
import "./Header.css";
// import { NavLink as ScrollNavLink } from "react-scroll";
// import { Link } from "react-scroll";
// import { NavLink as RouterNavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { NavLink as RouterLink } from "react-router-dom";
import { IoPersonCircleSharp, IoClose, IoHome } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPhone, FaMoon, FaSearch } from "react-icons/fa";
import Home from "../routes/Home";
import About from "../routes/About";
// import { MdInsertPhoto, MdOutlineWork } from "react-icons/md";
// import { AiOutlineFileUnknown } from "react-icons/ai";

const Header = ({ homeRef, aboutRef, contactRef, gallaryRef, servicesRef }) => {
  // const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const showSidebar = () => setSidebarVisible(true);
  const closeSidebar = () => setSidebarVisible(false);

  //scroll To Components

  const scrollToElement = (elementRef) => {
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="navbar">
        <span>
          <RouterLink to="/">
            <img src="/images/Final-logo.jpg" alt="" className="logo" />
          </RouterLink>
        </span>
        <h3 className="heading">Biswas English Academy</h3>
        <ul>
          <ScrollLink
            onClick={() => scrollToElement(homeRef)}
            to="/"
            smooth={true}
            duration={500}
            className="action_container"
          >
            <span>Home</span>
          </ScrollLink>
          <ScrollLink
            onClick={() => scrollToElement(aboutRef)}
            to="/about"
            smooth={true}
            duration={500}
            className="action_container"
          >
            <span>About</span>
          </ScrollLink>
          <ScrollLink
            onClick={() => scrollToElement(servicesRef)}
            to="/services"
            smooth={true}
            duration={500}
            className="action_container"
          >
            <span>Services</span>
          </ScrollLink>

          <ScrollLink
            onClick={() => scrollToElement(gallaryRef)}
            to="/gallery"
            smooth={true}
            duration={500}
            className="action_container"
          >
            <span>Gallery</span>
          </ScrollLink>
          <ScrollLink
            onClick={() => scrollToElement(contactRef)}
            to="/contact"
            smooth={true}
            duration={500}
            className="action_container"
          >
            <span>Contact</span>
          </ScrollLink>
          <ScrollLink className="action_container">Reviews</ScrollLink>
        </ul>
        {/* <div className="search-box">
          <input type="text" placeholder="search" />
          <FaSearch className="search-icon" />
        </div> */}
        <FaMoon onClick={toggle_mode} className="toggle-icon" />
        <IoPersonCircleSharp className="toggle-icon" />
        <div className="menu showSidebar" onClick={showSidebar}>
          <GiHamburgerMenu />
        </div>
      </div>
      {/*sidebar*/}
      {/* <div className={`navbar sidebar ${isSidebarVisible ? "visible" : ""}`}>
        <div className="menu closeSidebar" onClick={closeSidebar}>
          <IoClose />
        </div>
        <ul>
          <RouterNavLink to="/" className="action_container_of_sidebar">
            <div className="icons">
              <IoHome />
              <span className="span">Home</span>
            </div>
          </RouterNavLink>
          <RouterNavLink to="/about" className="action_container_of_sidebar">
            <div className="icons">
              <AiOutlineFileUnknown />
              <span className="span">About</span>
            </div>
          </RouterNavLink>
          <RouterNavLink to="/contact" className="action_container_of_sidebar">
            <div className="icons">
              <FaPhone />
              <span className="span">Contact</span>
            </div>
          </RouterNavLink>
          <RouterNavLink to="/gallery" className="action_container_of_sidebar">
            <div className="icons">
              <MdInsertPhoto />
              <span className="span">Gallery</span>
            </div>
          </RouterNavLink>
          <RouterNavLink to="/services" className="action_container_of_sidebar">
            <div className="icons">
              <MdOutlineWork />
              <span className="span">Services</span>
            </div>
          </RouterNavLink>
        </ul>
      </div> */}
    </>
  );
};
export default Header;
