import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Banner home={true} />
      <section className="option-home">
        <div
          className="card first-card"
          onClick={() => {
            navigate("/privacidad");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src="./privacidad.jpg"
            alt="aviso de privacidad"
            className="option-img"
          />
          <div className="option-sec">
            <p className="option-p">Aviso de privacidad</p>
            <button className="option-button">Ver Más</button>
          </div>
        </div>
        <div
          className="card second-card"
          onClick={() => {
            navigate("/credencial");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src="./productVariant.png"
            alt="Nuestro Producto"
            className="option-img"
          />
          <div className="option-sec">
            <p className="option-p">Nuestro Producto</p>
            <button className="option-button">Ver Más</button>
          </div>
        </div>
        <div
          className="card third-card"
          onClick={() => {
            navigate("/modulos");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src="./modulee.jpg"
            alt="Modulos de impresion"
            className="option-img"
          />
          <div className="option-sec">
            <p className="option-p">Módulos de impresión</p>
            <button className="option-button">Ver Más</button>
          </div>
        </div>
      </section>
      <section className="service-option">
        <h1 className="title">
          Nuestro <span>Servicio</span>
        </h1>
        <img
          src="./mex.png"
          alt="Modulos de impresion"
          className="service-img"
        />
        <br />
        <img
          src="./usa.png"
          alt="Modulos de impresion"
          className="service-img"
        />
      </section>
      <section className="service-option">
        <h1 className="title">
          Más <span>Información</span>
        </h1>
        <div className="home-video">
          <section>
            <iframe
              src="https://www.youtube.com/embed/oOehXXrljrU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="home-video-body"
            ></iframe>
          </section>
          <section>
            <div className="footer-div-download">
              <a
                href="https://cvcovid.salud.gob.mx/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="./boton.jpeg"
                  alt="Descargar certificado de vacunacion"
                  className="home-download"
                />
              </a>
            </div>
          </section>
        </div>

        <br />
        <a href="https://coronavirus.gob.mx/" target="_blank" rel="noreferrer">
          <img
            src="./bannerpromo.jpeg"
            alt="Modulos de impresion"
            className="service-image"
          />
        </a>
      </section>
    </div>
  );
}
