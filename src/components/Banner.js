import React from "react";
import Navbar from "./Navbar";

export default function Banner(props) {
  console.log(props, "props");
  return (
    <div>
      <div className="navbar-s">
        <Navbar />
      </div>
      {props && props.home ? (
        <div className="banner">
          <img src="./banner.jpeg" alt="Logo vacunamex" className="" />
          <div class="bannercontent">
            <div class="container">
              <div class="bannercaption">
                <div class="banner_heading">
                  <h3>Credencializa tu Certificado de Vacunación</h3>
                </div>
                <div class="banner_sub_heading"></div>
                <div class="banner_button">
                  <a
                    class="button bannerbutton"
                    href="https://forms.gle/ommbikjhejM5p6aXA"
                  >
                    SOLICÍTALA EN LÍNEA
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="banner">
          <img src="./banner2.jpeg" alt="Logo vacunamex" className="" />
        </div>
      )}
    </div>
  );
}
