import React, { forwardRef, useEffect } from "react";
import "./Review.css";

function Review({ reviewRef }) {
  useEffect(() => {
    // Dynamically load the Elfsight script
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Runs only once on component mount
  return (
    <>
      <div ref={reviewRef} className="review-container">
        <div
          className="elfsight-app-9806db2a-012d-4423-9503-12f04faf6b61"
          data-elfsight-app-lazy
        ></div>
      </div>
    </>
  );
}
export default forwardRef(Review);
