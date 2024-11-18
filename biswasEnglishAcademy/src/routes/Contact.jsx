import React, { forwardRef } from "react";
import "./Contact.css";
import { FaHome } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
function Contact({ contactRef }) {
  const googleMapsUrl = "https://maps.app.goo.gl/EHPM36NnWUgL2mF79";
  return (
    <>
      <div ref={contactRef} className="contact-container">
        <div className="contact">
          <div className="contact-Social">
            <div className="detailes">
              <div className="icon">
                <a href={googleMapsUrl}>
                  <FaHome />
                </a>
              </div>
              <div className="detailes-heading">
                <h3>Adress</h3>
              </div>
              <div className="detailes-paragraph">
                <p>
                  80 Laxmipally, Rishra, Hooghly, WB, India, Rishra, India, West
                  Bengal
                </p>
              </div>
            </div>
            <div className="detailes">
              <div className="icon">
                <a href="mailto:atanu92.biswas@gmail.com?subject=Hello&body=Hi%20there!">
                  <IoIosMail />
                </a>
              </div>
              <div className="detailes-heading">
                <h3>Email</h3>
              </div>
              <div className="detailes-paragraph">
                <p>atanu92.biswas@gmail.com</p>
              </div>
            </div>
            <div className="detailes">
              <div className="icon">
                <a href="tel:+91 7059904029">
                  <FaPhone />
                </a>
              </div>
              <div className="detailes-heading">
                <h3>Contact No</h3>
              </div>
              <div className="detailes-paragraph">
                <p>+91 7059904029</p>
              </div>
            </div>
            <div className="detailes-icon">
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
                  <FaInstagramSquare className="icon" />
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

          {/* <div className="contact-Map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.1669492879546!2d88.3373443!3d22.7220353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89b3815689f15%3A0x8ffa65a5fb97e85c!2sBiswas%20English%20Academy!5e0!3m2!1sen!2sin!4v1730216544062!5m2!1sen!2sin"
              width="600"
              height="600"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> */}
        </div>
        <div className="contact-from">
          <div className="contact-from-img">
            <img src="/images/man.jpg" alt="" className="man-img" />
          </div>
          {/* <div className="contact-from-info">
            <h2>Get In Touch</h2>
            <form type="submit">
              <label>
                <input
                  type="text"
                  placeholder="Your Name"
                  // name="name"
                  // value={formData.name}
                  // onChange={handleChange}
                  required
                />
              </label>
              <label>
                <input
                  type="email"
                  placeholder="Email Address"
                  // name="name"
                  // value={formData.name}
                  // onChange={handleChange}
                  required
                />
              </label>
              <label>
                <input
                  type="adress"
                  placeholder="Address"
                  // name="name"
                  // value={formData.name}
                  // onChange={handleChange}
                />
              </label>
              <label>
                <input
                  type="tel"
                  placeholder="Contact Number"
                  // name="contactNumber"
                  // value={formData.contactNumber}
                  // onChange={handleChange}
                  pattern="[0-9]{10}" // Adjust as needed for validation
                  required
                />
              </label>
              <label>
                <textarea
                  name="message"
                  placeholder="Message"
                  // value={formData.message}
                  // onChange={handleChange}
                  // rows="5"
                  required
                />
              </label>
              <button>Submit</button>
            </form>
          </div>*/}
        </div>
      </div>
    </>
  );
}
export default forwardRef(Contact);
