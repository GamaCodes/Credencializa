import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function Footer() {
  return (
    <>
      <div className="footer-containt">
        <section>
          <div className="footer">
            <img src="./white.png" alt="Logo vacunamex blanco" />
            <section>
              <p className="footer-number"> Llámanos (55) 6820 2119</p>
              <p>info@credencializatuvacuna.mx </p>
            </section>
          </div>
          <div className="footer-div-download">
            <a
              href="https://cvcovid.salud.gob.mx/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./boton.jpeg"
                alt="Descargar certificado de vacunacion"
                className="footer-download"
              />
            </a>
          </div>
          <div className="footer-text">
            <section>
              Credencializa Tu Vacuna MX | Todos los derechos reservados.
            </section>
          </div>
        </section>
        <section>
          <img
            src="./pvcDiagonalVariant.png"
            alt="Credencial de vacunacion"
            className="img-card"
          />
        </section>
        <section className="footer-places">
          <h4>OFICINAS EN MÉXICO</h4>
          <div>
            <p className="footer-cities">Ciudad de México</p>
            <p>Juan Vázquez de Mella 481 piso 2</p>
            <p>Col. Los Morales Polanco, 11510</p>
            <p>Tel. (55) 6820 2119</p>
          </div>
          <div>
            <p className="footer-cities">Guadalajara</p>
            <p>Providencia. Bogotá 2825</p>
            <p>Col. Providencia 4ta sección, 44639</p>
            <p>Tel. (55) 6820 2119</p>
          </div>
          <div>
            <p className="footer-cities">Baja California</p>
            <p>Blvd. benito Juárez 4325</p>
            <p>Ex-Ejido Coahuila, 21360</p>
            <p>Tel. (55) 6820 2119</p>
          </div>
        </section>
        <section className="footer-mobile">
          Credencializa Tu Vacuna MX | Todos los derechos reservados.
        </section>
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
