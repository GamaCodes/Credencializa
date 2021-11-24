import React from "react";
import { HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";

export default function Footer() {
  return (
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
  );
}
