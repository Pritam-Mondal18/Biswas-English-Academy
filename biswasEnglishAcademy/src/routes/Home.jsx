import React, { forwardRef, useState } from "react";
import "./Home.css";
import { FaBusinessTime } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Home({ homeRef }) {
  const [counterStart, setcounterStart] = useState(false);
  return (
    <>
      <div ref={homeRef} className="home-container">
        <div className="banner">
          {" "}
          <img src="/images/banner.jpg" alt="" className="banner-img" />
        </div>
        <div className="home-heading">
          <p>
            <h1>
              <i>
                <b>Welcome to BISWAS ENGLISH ACADEMY </b>
              </i>
            </h1>
            <span className="sub-heading">
              – Your Gateway to Mastering the English Language!
            </span>
          </p>
        </div>
        {/*<div className="paragraph-animation">
          <span className="paragraph">
            <pre>
              At BISWAS ENGLISH ACADEMY, we believe that language is the bridge
              to endless <br />
              opportunities. career, or excel in academics, our carefully
              crafted English courses
              <br /> cater to every learner’s needs. Are you a teen preparing
              for the future? A professional <br />
              aiming to impress? A homemaker ready to conquer new horizons? Or a
              student striving <br />
              for academic excellence? You’ve come to the right place. Our
              dynamic spoken English
              <br /> programs for teens, adults, homemakers, and professionals
              are designed to give you <br />
              the confidence and skillset to thrive in today’s fast-paced world.
              For students from 5th
              <br /> to 12th standard, our academic English classes ensure that
              you’re not just learning to
              <br /> pass exams but mastering the language for life. We support
              you through every stage of
              <br /> your learning journey, building the foundation for a bright
              future. Step into a world
              <br /> where learning English is not just about grammar and
              vocabulary—it’s about empower-
              <br />
              ment, growth, and transformation. Let’s embark on this journey
              together, where each <br />
              lesson brings you closer to success, and every word you speak
              becomes a stepping stone
              <br /> toward your goals.
            </pre>
          </span>
          <div className="animation">
            <div className="numberAnimation">
              <div className="animationIcon">
                <FaBusinessTime size={100} />
              </div>
              <ScrollTrigger
                onEnter={() => setcounterStart(true)}
                onExit={() => setcounterStart(false)}
                threshold={0.1}
              >
                <div className="animationText">
                  <h2>Experience</h2>
                  <h4 className="scrollNumber">
                    {counterStart && (
                      <CountUp
                        start={0}
                        end={11}
                        duration={2}
                        delay={0}
                      ></CountUp>
                    )}
                    Years+
                  </h4>
                </div>
              </ScrollTrigger>
            </div>
            <div className="numberAnimation">
              <div className="animationIcon">
                <PiStudentFill size={100} />
              </div>
              <ScrollTrigger
                onEnter={() => setcounterStart(true)}
                onExit={() => setcounterStart(false)}
                threshold={0.1}
              >
                <div className="animationText">
                  <h2>Students</h2>
                  <h4 className="scrollNumber">
                    {counterStart && (
                      <CountUp
                        start={0}
                        end={15}
                        duration={2}
                        delay={0}
                      ></CountUp>
                    )}
                    K+
                  </h4>
                </div>
              </ScrollTrigger>
            </div>
          </div>
        </div>*/}
      </div>
    </>
  );
}
export default forwardRef(Home);
