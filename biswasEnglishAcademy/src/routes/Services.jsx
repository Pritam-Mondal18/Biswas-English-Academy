import React, { forwardRef } from "react";
import "./Services.css";
function Services({ servicesRef }) {
  return (
    <>
      <div ref={servicesRef} className="services-container">
        <h1>Services page</h1>
      </div>
    </>
  );
}
export default forwardRef(Services);
