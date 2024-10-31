import React, { forwardRef } from "react";
import "./About.css";
function About({ aboutRef }) {
  return (
    <>
      <div ref={aboutRef} className="about-container">
        <div className="about-img">
          <img src="/images/roadmap.jpg" alt="" className="roadmap" />
        </div>
        <div className="about-paragraph">
          <span className="paragraph about">
            <b> BISWAS ENGLISH ACADEMY</b> Established in 2013, BISWAS ENGLISH
            ACADEMY is a government-registered and ISO 9001:2015 certified
            institution dedicated to transforming lives through the power of the
            English language. Located in the heart of Rishra, Hooghly district,
            West Bengal, we have been serving the local community and beyond for
            over a decade with a singular mission—to help individuals overcome
            their struggles with English and unlock their true potential. At
            BISWAS ENGLISH ACADEMY, we understand the challenges faced by
            learners, whether it’s gaining fluency in spoken English or
            mastering academic English for success in exams. Our faculty
            members, known for their care, friendliness, and expertise, are
            committed to guiding each student with personalized attention,
            ensuring that learning is not just effective but also enjoyable.
            What sets us apart is not just our long-standing experience but our
            dedication to solving the real problems faced by students of all
            ages and backgrounds. We offer a range of programs designed for
            teens, adults, homemakers, and professionals, as well as specialized
            academic English classes for students from 5th to 12th standard
            across all boards. When you choose BISWAS ENGLISH ACADEMY, you’re
            choosing a path to success, backed by a proven institution with a
            history of excellence and a team of passionate educators. Join us,
            and let’s take your English skills to the next level!
          </span>
        </div>
      </div>
    </>
  );
}
export default forwardRef(About);
