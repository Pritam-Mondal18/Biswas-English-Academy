import React, { useState } from "react";
import "./Header.css";
import { Link as ScrollLink } from "react-scroll";
import { NavLink as RouterLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";

const Header = ({
  homeRef,
  aboutRef,
  contactRef,
  gallaryRef,
  reviewRef,
  servicesRef,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  // Toggle menu visibility
  const handleMenuToggle = () => {
    setShowMenu((prev) => !prev);
  };

  // Scroll to the referenced section
  const scrollToElement = (elementRef) => {
    if (elementRef?.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  // Placeholder for dark mode toggle
  const [theme, setTheme] = useState("light");
  const toggleMode = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <RouterLink to="/">
          <img src="/images/Final-logo.jpg" alt="Logo" className="logo" />
        </RouterLink>
        <h3 className="heading">Biswas English Academy</h3>
        <ul className={`menu-items ${showMenu ? "menu-mobile" : "menu-web"}`}>
          <li>
            <ScrollLink
              onClick={() => {
                scrollToElement(homeRef);
                setShowMenu(false);
              }}
              smooth={true}
              duration={500}
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              onClick={() => {
                scrollToElement(aboutRef);
                setShowMenu(false);
              }}
              smooth={true}
              duration={500}
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              onClick={() => {
                scrollToElement(servicesRef);
                setShowMenu(false);
              }}
              smooth={true}
              duration={500}
            >
              Services
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              onClick={() => {
                scrollToElement(gallaryRef);
                setShowMenu(false);
              }}
              smooth={true}
              duration={500}
            >
              Gallery
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              onClick={() => {
                scrollToElement(reviewRef);
                setShowMenu(false);
              }}
              smooth={true}
              duration={500}
            >
              Review
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              onClick={() => {
                scrollToElement(contactRef);
                setShowMenu(false);
              }}
              smooth={true}
              duration={500}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
        <FaMoon onClick={toggleMode} className="toggle-icon" />
        <span className="menu-icon" onClick={handleMenuToggle}>
          {showMenu ? <IoCloseSharp /> : <GiHamburgerMenu />}
        </span>
      </div>
    </>
  );
};

export default Header;
