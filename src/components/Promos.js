import React from "react";
import FeedInstagram from "./FeedInstagram";

export default function Promos() {
  return (
    <div>
      <div className="right-section">
        <div className="right-terms-img">
          <img
            src="./boton.jpeg"
            alt="Logo vacunamex"
            className="logotexto-vacuna"
          />
        </div>
        <FeedInstagram />
        <div className="right-terms-img">
          <img src="./post.png" alt="Logo vacunamex" className="post-vacuna" />
        </div>
        <div className="right-terms-img">
          <img
            src="./usacer.png"
            alt="Logo vacunamex"
            className="post-vacuna"
          />
        </div>
      </div>
    </div>
  );
}
