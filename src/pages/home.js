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
        <br />
        <a href="https://coronavirus.gob.mx/" target="_blank" rel="noreferrer">
          <img
            src="./bannerpromo.jpeg"
            alt="Modulos de impresion"
            className="service-img"
          />
        </a>
      </section>
    </div>
  );
}
