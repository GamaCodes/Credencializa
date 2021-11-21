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
        <div className="banner banner-mobile">
          <img src="./banner.jpeg" alt="Logo vacunamex" className="" />
          <div className="bannercontent">
            <div className="container">
              <div className="bannercaption">
                <div className="banner_heading">
                  <h3>Credencializa tu Certificado de Vacunación</h3>
                </div>
                <div className="banner_sub_heading"></div>
                <div>
                  <a
                    className="button bannerbutton"
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

      {props && props.home ? (
        <>
          <div className="banner banner-display">
            <img src="./banner.jpeg" alt="Logo vacunamex" className="" />
          </div>
          <div className="banner-button">
            <a
              className="button bannerbutton"
              href="https://forms.gle/ommbikjhejM5p6aXA"
            >
              SOLICÍTALA EN LÍNEA
            </a>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
