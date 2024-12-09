import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { NavLink as RouterNavLink } from "react-router-dom";
// import { NavLink as ScrollNavLink } from "react-scroll";
import { CiRoute } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { GrMap } from "react-icons/gr";
import { FaPhoneVolume } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

import "./Footer.css";
const Footer = ({ homeRef, aboutRef, contactRef, gallaryRef, servicesRef }) => {
  const [showMenu, setShowMenu] = useState(false);
  // Scroll to the referenced section
  const scrollToElement = (elementRef) => {
    if (elementRef?.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="footer-container">
        <div className="social-links-container">
          <img src="/images/logoFinal.png" alt="Logo" className="logo" />
          <h4>
            <b>
              <i>Biswas English Academy</i>
            </b>
          </h4>
          <p>
            Welcome to <i>Biswas English Academy</i> where excellence in English
            education meets to decades of unwavering dedication.
          </p>
          <div className="social-links">
            <div className="facebook">
              <a
                href="https://www.facebook.com/AtanuBiswasCC/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="icon" />
              </a>
            </div>
            <div className="whatsapp">
              <a
                href="https://api.whatsapp.com/send?phone=7059904029&text=Hello!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoWhatsapp className="icon" />
              </a>
            </div>
            <div className="insta">
              <a
                href="https://www.instagram.com/biswas_english_academy/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="icon" />
              </a>
            </div>
            <div className="youtube">
              <a
                href="https://www.youtube.com/@Biswas_English_Academy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-details">
          <h4>
            <i>ADDRESS</i>
          </h4>

          <div className="adress-details">
            <div className="icon-map">
              <GrMap />
            </div>
            <p>
              80 Laxmipally, Rishra, Hooghly, WB, India, Rishra, India, West
              Bengal
            </p>
          </div>
          <div className="contact-number-details">
            <div className="icon-map">
              <FaPhoneVolume />
            </div>
            <p>+91 7439885351</p>
          </div>
          <div className="email-details">
            <div className="icon-map">
              <TfiEmail />
            </div>
            <p>biswasenglishacademy@gmail.com</p>
          </div>
        </div>
        <div className="courses">
          <h4>
            <i>COURSES</i>
          </h4>
          <div className="course">
            <ul className={showMenu ? "menu-open" : "menu-closed"}>
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
          </div>
        </div>
      </div>
      <div className="end-footer">
        <p>Copyright © 2024 biswasenglishacademy.com</p>
      </div>
    </>
  );
};

export default Footer;
