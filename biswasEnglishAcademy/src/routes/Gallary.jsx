import React, { forwardRef } from "react";
import "./Gallary.css";
function Gallary({ gallaryRef }) {
  return (
    <>
      {/* <div ref={gallaryRef} className="gallary-container">
        <div className="card">
          <img src="/images/1.jpg" alt="" className="card-img" />
        </div>
        <div className="card">
          <img src="/images/2.jpg" alt="" className="card-img" />
        </div>

        <div className="card">
          <img src="/images/3.jpg" alt="" className="card-img" />
        </div>
        <div className="card">
          <img src="/images/4.jpg" alt="" className="card-img" />
        </div>
        <div className="card">
          <img src="/images/5.jpg" alt="" className="card-img" />
        </div>
        <div className="card">
          <img src="/images/6.jpg" alt="" className="card-img" />
        </div>
      </div> */}
    </>
  );
}
export default forwardRef(Gallary);
