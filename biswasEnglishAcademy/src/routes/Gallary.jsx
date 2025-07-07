import React, { forwardRef } from "react";
import "./Gallary.css";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";

// import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";

const images = [
  { src: "/Biswas-English-Academy/images/1.jpg", alt: "1" },
  { src: "/Biswas-English-Academy/images/2.jpg", alt: "2" },
  { src: "/Biswas-English-Academy/images/3.jpg", alt: "3" },
  { src: "/Biswas-English-Academy/images/4.jpg", alt: "4" },
  { src: "/Biswas-English-Academy/images/5.jpg", alt: "5" },
  { src: "/Biswas-English-Academy/images/6.jpg", alt: "6" },
];

function Gallary({ gallaryRef }) {
  const onInit = () => {};
  return (
    <>
      <div ref={gallaryRef} className="gallary-container">
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[
            lgThumbnail,
            lgZoom,
            lgAutoplay,
            lgFullscreen,
            lgShare,
            lgRotate,
          ]}
        >
          {images.map((image, index) => {
            return (
              <a href={image.src} key={index}>
                <img alt={image.alt} src={image.src} className="gallary" />
              </a>
            );
          })}
        </LightGallery>
      </div>
    </>
  );
}
export default forwardRef(Gallary);
