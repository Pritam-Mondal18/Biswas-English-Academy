import React, { useRef } from "react";
// import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Gallary from "./Gallary";
import Services from "./Services";
import Footer from "../components/Footer";
import Review from "./Review";

const App = () => {
  const [theme, setTheme] = useState("light");
  // Refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const gallaryRef = useRef(null);
  const reviewRef = useRef(null);
  const servicesRef = useRef(null);

  return (
    <>
      <div className={`container ${theme}`}>
        <Header
          homeRef={homeRef}
          aboutRef={aboutRef}
          servicesRef={servicesRef}
          gallaryRef={gallaryRef}
          contactRef={contactRef}
          reviewRef={reviewRef}
          theme={theme}
          setTheme={setTheme}
        />
        {/* <Outlet /> */}
      </div>
      {/* <Header ref={homeRef} /> */}
      <Home homeRef={homeRef} />
      <About aboutRef={aboutRef} />
      <Services servicesRef={servicesRef} />
      <Gallary gallaryRef={gallaryRef} />
      <Review reviewRef={reviewRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </>
  );
};

export default App;
