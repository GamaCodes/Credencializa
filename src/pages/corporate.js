import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import FeedInstagram from "../components/FeedInstagram";

export default function Privacy() {
  const navigate = useNavigate();
  return (
    <>
      <Banner home={false} />
      <div className="page-body">
        <div className="left-section">
          <h1 className="title">
            Formulario <br /> <span>Corporativo</span>
          </h1>
          <div>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSebrIvtiOX2NjtBxTzRp5BSYyHG7HQM5l6knSreizBYGYjxWQ/viewform?embedded=true"
              className="corporate-form"
              title="Google Forms - Credencializa"
            >
              Cargando…
            </iframe>
          </div>
          <div>
            <video
              src="./video2.mp4"
              className="banner-video-company"
              onClick={() => {
                navigate("/corporativo");
                window.scrollTo(0, 0);
              }}
              autoPlay
              preload
              muted
              loop
            ></video>
          </div>
        </div>
        <div className="right-section">
          <div className="right-terms-img">
            <a
              href="https://cvcovid.salud.gob.mx/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="./boton.jpeg"
                alt="Descargar certificado de vacunacion"
                className="logotexto-vacuna"
              />
            </a>
          </div>
          <FeedInstagram />
          <div className="right-terms-img">
            <video
              src="./video1.mp4"
              className="post-vacuna"
              autoPlay
              preload
              muted
              loop
            ></video>
          </div>
          <div className="right-terms-img">
            <img
              src="./paypal.jpg"
              alt="Metodo de pago Paypal"
              className="post-vacuna"
            />
          </div>
        </div>
      </div>
    </>
  );
}
