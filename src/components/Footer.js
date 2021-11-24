import React from "react";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function Footer() {
  return (
    <>
      <div className="footer-containt">
        <div className="footer">
          <img src="./white.png" alt="Logo vacunamex blanco" />
        </div>
        <div className="footer-variant">
          <div className="footer-variant-div">
            <HiPhone />
            <p>  3330612330  </p>
          </div>
          <div className="footer-variant-div">
            <HiLocationMarker />
            <p>
              Calle Bogota 2825 Piso 4 Colonia Providencia, Guadalajara, Jalisco
              44630
            </p>
          </div>
          <div className="footer-variant-div">
            <HiMail /> <p>info@credencializatuvacuna.mx </p>
          </div>
        </div>
        <div className="footer">
          <section>Credencializa Tu Vacuna MX</section>
          <section>Todos los derechos reservados.</section>
        </div>
      </div>
      <div className="wa-button">
        <a
          className="wa-button-so"
          href="https://api.whatsapp.com/send?phone=5216647319891&text=M%C3%A1s%20informaci%C3%B3n."
          target="_blank"
          rel="noreferrer"
        >
          <IconContext.Provider
            value={{ className: "wa-social", size: "3rem" }}
          >
            <BsWhatsapp />
          </IconContext.Provider>
        </a>
      </div>
    </>
  );
}
