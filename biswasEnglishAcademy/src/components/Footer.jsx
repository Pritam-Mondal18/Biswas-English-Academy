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
        {/* form section */}
        <section className="footer-subscription">
          <p className="footer-subscription-heading">
            Are you looking for a new environment? Would you like to expllore
            new context in life?
          </p>
          <div className="input-areas">
            <form action="submit">
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="footer-input"
              />
              <button className="footer-btn">Save</button>
            </form>
          </div>
        </section>

        {/* form section end */}

        {/* footer links */}
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Videos</h2>
              <RouterNavLink to="/">Submit Video</RouterNavLink>
              <RouterNavLink to="/">Ambassadors</RouterNavLink>
              <RouterNavLink to="/">Agency</RouterNavLink>
              <RouterNavLink to="/">Influencer</RouterNavLink>
            </div>
            <div className="footer-link-items">
              <h2>Social Media</h2>
              <RouterNavLink to="/">Instagram</RouterNavLink>
              <RouterNavLink to="/">Facebook</RouterNavLink>
              <RouterNavLink to="/">Youtube</RouterNavLink>
              <RouterNavLink to="/">Whatsapp</RouterNavLink>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>About Us</h2>
              <RouterNavLink to="/">How it works</RouterNavLink>
              <RouterNavLink to="/">Testimonials</RouterNavLink>
              <RouterNavLink to="/">Careers</RouterNavLink>
              <RouterNavLink to="/">Terms of Service</RouterNavLink>
            </div>
            <div className="footer-link-items">
              <h2>Contact Us</h2>
              <RouterNavLink to="/">Contact</RouterNavLink>
              <RouterNavLink to="/">Support</RouterNavLink>
              <RouterNavLink to="/">Destinations</RouterNavLink>
              <RouterNavLink to="/">Sponserships</RouterNavLink>
            </div>
          </div>
        </div>
        {/* social media section */}
        <section className="social-media">
          <div className="footer-links">
            <div className="social-media-wrap">
              {/* <div className="footer-logo">
                <NavLink to="/" className="social-logo">
                  BRIGHT-SIDE &nbsp;
                  <CiRoute />
                </NavLink>
              </div> */}
              {/* End footer logo */}
              {/* <small className="website-rights">Bright-Side @ 2020</small> */}
              {/* copy right area */}
              <div className="social-icons">
                <RouterNavLink
                  className="social-icon-link facebook"
                  to="/"
                  target="_blank"
                  aria-lable="Facebook"
                >
                  <FaFacebook />
                </RouterNavLink>
                <RouterNavLink
                  className="social-icon-link instagram"
                  to="/"
                  target="_blank"
                  aria-lable="instagram"
                >
                  <FaInstagram />
                </RouterNavLink>
                <RouterNavLink
                  className="social-icon-link youtube"
                  to="/"
                  target="_blank"
                  aria-lable="youtube"
                >
                  <FaYoutube />
                </RouterNavLink>
                <RouterNavLink
                  className="social-icon-link whatsapp"
                  to="tel:9432971576"
                  target="_blank"
                  aria-lable="whatsapp"
                >
                  <IoLogoWhatsapp />
                </RouterNavLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
