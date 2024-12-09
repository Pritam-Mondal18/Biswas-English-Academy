import React, { forwardRef } from "react";
import "./Services.css";
function Services({ servicesRef }) {
  return (
    <>
      <div ref={servicesRef} className="services-container">
        {/* <h1>Services page</h1> */}
        <div className="sub-heading-servicePage">
          <h1>
            <i>Spoken English Classes for Seniors:</i>
          </h1>
        </div>
        <div className="service-box-container">
          <div className="service-box">
            <div className="box-container">
              <h2>Spoken English</h2>
              <span>
                <h4>(for Seniors)</h4>
              </span>
              <ul>
                <li>Zero Admission Fee</li>
                <li>Free Demo Classes</li>
                <li>Course Duration: 6 months</li>
                <li>Monday & Thursday</li>
                <li>Time: 6:30pm to 8pm</li>
                <li>Course Fee: ₹2999/-</li>
              </ul>
            </div>
          </div>
          <div className="service-box">
            <div className="box-container">
              <h2>Spoken English</h2>
              <span>
                <h4>(for Seniors)</h4>
              </span>
              <ul>
                <li>Zero Admission Fee</li>
                <li>Free Demo Classes</li>
                <li>Course Duration: 6 months</li>
                <li>Tuesday & Friday</li>
                <li>Time: 6:30pm to 8pm</li>
                <li>Course Fee: ₹2999/-</li>
              </ul>
            </div>
          </div>
          <div className="service-box">
            <div className="box-container">
              <h2>Spoken English</h2>
              <span>
                <h4>(for Seniors)</h4>
              </span>
              <ul>
                <li>Zero Admission Fee</li>
                <li>Free Demo Classes</li>
                <li>Course Duration: 6 months</li>
                <li>Sunday</li>
                <li>Time: 10:30am to 1:30pm</li>
                <li>Course Fee: ₹2999/-</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sub-heading-servicePage">
          <h1>
            <i>Spoken English Classes for Juniors:</i>
          </h1>
        </div>
        <div className="service-box-container">
          <div className="service-box">
            <div className="box-container">
              <h2>Spoken English</h2>
              <span>
                <h4>(Age Group: 10-15 years)</h4>
              </span>
              <ul>
                <li>Zero Admission Fee</li>
                <li>Free Demo Classes</li>
                <li>Course Duration: 6 months</li>
                <li>Wednessday & Saturday</li>
                <li>Time: 6:30pm to 8pm</li>
                <li>Course Fee: ₹2999/-</li>
              </ul>
            </div>
          </div>
          <div className="service-box">
            <div className="box-container">
              <h2>Spoken English</h2>
              <span>
                <h4>(Age Group: 10-15 years)</h4>
              </span>
              <ul>
                <li>Zero Admission Fee</li>
                <li>Free Demo Classes</li>
                <li>Course Duration: 6 months</li>
                <li>Sunday</li>
                <li>Time: 07:00am to 10:30am</li>
                <li>Course Fee: ₹2999/-</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sub-heading-servicePage">
          <h1>
            <i>CBSE Board</i>
          </h1>
        </div>
        <div className="service-box-container">
          <div className="service-box">
            <div className="box-container">
              <h2>Class-5</h2>
              <span>
                <h4>CBSE Board</h4>
              </span>
              <ul>
                <li>Monday & Thursday</li>
                <li>Time: 6:30pm to 8pm</li>
                <li>Course Fee: ₹250/month</li>
              </ul>
            </div>
          </div>
          <div className="service-box">
            <div className="box-container">
              <h2>Class-6</h2>
              <span>
                <h4>CBSE Board</h4>
              </span>
              <ul>
                <li>Wednessday & saturday</li>
                <li>Time: 6:30pm to 8pm</li>
                <li>Course Fee: ₹250/month</li>
              </ul>
            </div>
          </div>
          <div className="service-box">
            <div className="box-container">
              <h2>Class-7</h2>
              <span>
                <h4>CBSE Board</h4>
              </span>
              <ul>
                <li>Monday & Thursday</li>
                <li>Time: 8:00pm to 9:30pm</li>
                <li>Course Fee: ₹250/month</li>
              </ul>
            </div>
          </div>
          <div className="service-box">
            <div className="box-container">
              <h2>Class-8</h2>
              <span>
                <h4>CBSE Board</h4>
              </span>
              <ul>
                <li>Tuesday & Friday</li>
                <li>Time: 8:00pm to 9:30pm</li>
                <li>Course Fee: ₹300/month</li>
              </ul>
            </div>
          </div>
          <div className="service-box">
            <div className="box-container">
              <h2>Class-9</h2>
              <span>
                <h4>CBSE Board</h4>
              </span>
              <ul>
                <li>Wednessday & Saturday</li>
                <li>Time: 8:00pm to 9:30pm</li>
                <li>Course Fee: ₹300/month</li>
              </ul>
            </div>
          </div>
          <div className="service-box">
            <div className="box-container">
              <h2>Class-10</h2>
              <span>
                <h4>CBSE Board</h4>
              </span>
              <ul>
                <li>Monday & Thursday</li>
                <li>Time: 6:30am to 8:00am</li>
                <li>Course Fee: ₹300/month</li>
              </ul>
            </div>
          </div>
          <div className="service-box">
            <div className="box-container">
              <h2>Class-11</h2>
              <span>
                <h4>CBSE Board</h4>
              </span>
              <ul>
                <li>Tuesday & Friday</li>
                <li>Time: 6:30am to 8:00am</li>
                <li>Course Fee: ₹350/month</li>
              </ul>
            </div>
          </div>
          <div className="service-box">
            <div className="box-container">
              <h2>Class-12</h2>
              <span>
                <h4>CBSE Board</h4>
              </span>
              <ul>
                <li>Wednessday & Saturday</li>
                <li>Time: 6:30am to 8:00am</li>
                <li>Course Fee: ₹350/month</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sub-heading-servicePage">
          <h1>
            <i>ICSE Board</i>
          </h1>
        </div>
        <div className="service-box-container">
          <div className="service-box">
            <div className="box-container">
              <h2>Class-5</h2>
              <span>
                <h4>ICSE Board</h4>
              </span>
              <ul>
                <li>Tuesday & Friday</li>
                <li>Time: 6:30pm to 8pm</li>
                <li>Course Fee: ₹250/month</li>
              </ul>
            </div>
          </div>
          <div className="service-box">
            <div className="box-container">
              <h2>Class-6</h2>
              <span>
                <h4>ICSE Board</h4>
              </span>
              <ul>
                <li>Wednessday & saturday</li>
                <li>Time: 6:30pm to 8pm</li>
                <li>Course Fee: ₹250/month</li>
              </ul>
            </div>
          </div>
          <div className="service-box">
            <div className="box-container">
              <h2>Class-7</h2>
              <span>
                <h4>ICSE Board</h4>
              </span>
              <ul>
                <li>Monday & Thursday</li>
                <li>Time: 8:00pm to 9:30pm</li>
                <li>Course Fee: ₹250/month</li>
              </ul>
            </div>
          </div>
          <div className="service-box">
            <div className="box-container">
              <h2>Class-8</h2>
              <span>
                <h4>ICSE Board</h4>
              </span>
              <ul>
                <li>Tuesday & Friday</li>
                <li>Time: 8:00pm to 9:30pm</li>
                <li>Course Fee: ₹300/month</li>
              </ul>
            </div>
          </div>
          <div className="service-box">
            <div className="box-container">
              <h2>Class-9</h2>
              <span>
                <h4>ICSE Board</h4>
              </span>
              <ul>
                <li>Wednessday & Saturday</li>
                <li>Time: 8:00pm to 9:30pm</li>
                <li>Course Fee: ₹300/month</li>
              </ul>
            </div>
          </div>
          <div className="service-box">
            <div className="box-container">
              <h2>Class-10</h2>
              <span>
                <h4>ICSE Board</h4>
              </span>
              <ul>
                <li>Monday & Thursday</li>
                <li>Time: 6:30am to 8:00am</li>
                <li>Course Fee: ₹300/month</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sub-heading-servicePage">
          <h1>
            <i>ISC Board</i>
          </h1>
        </div>
        <div className="service-box-container">
          <div className="service-box">
            <div className="box-container">
              <h2>Class-11</h2>
              <span>
                <h4>ISC Board</h4>
              </span>
              <ul>
                <li>Tuesday & Friday</li>
                <li>Time: 6:30am to 8:00am</li>
                <li>Course Fee: ₹350/-</li>
              </ul>
            </div>
          </div>
          <div className="service-box">
            <div className="box-container">
              <h2>Class-12</h2>
              <span>
                <h4>ISC Board</h4>
              </span>
              <ul>
                <li>Wednessday & Saturday</li>
                <li>Time: 6:30am to 8:00am</li>
                <li>Course Fee: ₹350/-</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sub-heading-servicePage">
          <h1>
            <i>WBBSE Board</i>
          </h1>
        </div>
        <div className="service-box-container">
          <div className="service-box">
            <div className="box-container">
              <h2>Class-5</h2>
              <span>
                <h4>WBBSE Board</h4>
              </span>
              <ul>
                <li>Monday & Thursday</li>
                <li>Time: 6:30pm to 8pm</li>
                <li>Course Fee: ₹250/month</li>
              </ul>
            </div>
          </div>
          <div className="service-box">
            <div className="box-container">
              <h2>Class-6</h2>
              <span>
                <h4>WBBSE Board</h4>
              </span>
              <ul>
                <li>Tuesday & Friday</li>
                <li>Time: 6:30pm to 8:00pm</li>
                <li>Course Fee: ₹250/month</li>
              </ul>
            </div>
          </div>
          <div className="service-box">
            <div className="box-container">
              <h2>Class-7</h2>
              <span>
                <h4>WBBSE Board</h4>
              </span>
              <ul>
                <li>Monday & Thursday</li>
                <li>Time: 6:30am to 8:00am</li>
                <li>Course Fee: ₹250/month</li>
              </ul>
            </div>
          </div>
          <div className="service-box">
            <div className="box-container">
              <h2>Class-8</h2>
              <span>
                <h4>WBBSE Board</h4>
              </span>
              <ul>
                <li>Tuesday & Friday</li>
                <li>Time: 6:30am to 8:00am</li>
                <li>Course Fee: ₹300/month</li>
              </ul>
            </div>
          </div>
          <div className="service-box">
            <div className="box-container">
              <h2>Class-9</h2>
              <span>
                <h4>WBBSE Board</h4>
              </span>
              <ul>
                <li>Monday & Thursday</li>
                <li>Time: 8:00pm to 9:30pm</li>
                <li>Course Fee: ₹300/month</li>
              </ul>
            </div>
          </div>
          <div className="service-box">
            <div className="box-container">
              <h2>Class-10</h2>
              <span>
                <h4>WBBSE Board</h4>
              </span>
              <ul>
                <li>Wednessday & Saturday</li>
                <li>Time: 6:30am to 8:00am</li>
                <li>Course Fee: ₹300/month</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sub-heading-servicePage">
          <h1>
            <i>WBCHSE Board</i>
          </h1>
        </div>
        <div className="service-box-container">
          <div className="service-box">
            <div className="box-container">
              <h2>Class-11</h2>
              <span>
                <h4>WBCHSE Board</h4>
              </span>
              <ul>
                <li>Wednessday & Saturday</li>
                <li>Time: 8:00pm to 9:30pm</li>
                <li>Course Fee: ₹350/-</li>
              </ul>
            </div>
          </div>
          <div className="service-box">
            <div className="box-container">
              <h2>Class-12</h2>
              <span>
                <h4>WBCHSE Board</h4>
              </span>
              <ul>
                <li>Tuesday & Friday</li>
                <li>Time: 8:00pm to 9:30pm</li>
                <li>Course Fee: ₹350/-</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default forwardRef(Services);
