import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
// import { NavLink as ScrollNavLink } from "react-scroll";
import { CiRoute } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="social-links-container">
          <img src="/images/logoFinal.png" alt="Logo" className="logo" />
          <b>
            <i>Biswas English Academy</i>
          </b>
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
        <div className="contact-details">ADDRESS</div>
        <div className="courses">COURSES</div>
      </div>
      <div className="end-footer">footer last part</div>
    </>
  );
};

export default Footer;
