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
              <div className="footer-cdmx">
                <p className="footer-cdmx-title">Ciudad de México</p>
                <p className="footer-cdmx-add">
                  Juan Vázquez de Mella 481 piso 2
                </p>
                <p className="footer-cdmx-add">
                  Col. Los Morales Polanco, 11510
                </p>
              </div>
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
            <section>VACUNAMEX | Todos los derechos reservados.</section>
            <section>
              <p className="footer-email">corporativos@vacunamex.com </p>
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
          <h4>OFICINAS EN INTERIOR DE LA REPUBLICA</h4>
          <div>
            <p className="footer-cities">Guadalajara</p>
            <p>Patria 2085, fracc. Puerta de Hierro,</p>
            <p>Zapopan, Jalisco 45116 Piso Mezzanine</p>
            <p>Tel. (33) 2803 2857</p>
          </div>
          <div>
            <p className="footer-cities">Baja California</p>
            <p>Blvd. benito Juárez 4325</p>
            <p>Ex-Ejido Coahuila, 21360</p>
            <p>Tel. (686) 695 3880</p>
          </div>
          <div>
            <p className="footer-cities">Sinaloa</p>
            <p>Gral. Angel Flores 370 Ote.</p>
            <p>Colonia Centro, 80000</p>
            <p>Culiacán, Sinaloa.</p>
            <p>Tel. (686) 695 3880</p>
          </div>
        </section>
        <section className="footer-mobile">
          <p>VACUNAMEX | Todos los derechos reservados.</p>
          <p>corporativos@vacunamex.com</p>
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
