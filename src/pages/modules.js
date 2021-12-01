import React from "react";
import Banner from "../components/Banner";
import FeedInstagram from "../components/FeedInstagram";

export default function modules() {
  return (
    <>
      <Banner home={false} />
      <div className="page-body">
        <div className="left-section">
          <h1 className="title">
            Módulos <br /> <span>de Impresión</span>
          </h1>

          <div className="module-img-contain">
            <img
              src="./mexico.png"
              alt="Modulos de impresion"
              className="module-img"
            />
          </div>

          <h2 className="title">Ubicaciones</h2>
          <div className="locations">
            <section>
              <p>Baja California</p>
              <p>
                <span>Mexicali</span>
              </p>
              <p>
                <span>Tijuana</span>
              </p>
            </section>
            <section>
              <p>Sinaloa</p>
              <p>
                <span>Culiacán</span>
              </p>
              <p>
                <span>Mazatlán</span>
              </p>
            </section>
            <section>
              <p>Jalisco</p>
              <p>
                <span>Guadalajara</span>
              </p>
            </section>
            <section>
              <p>Sonora</p>
              <p>
                <span>Hermosillo</span>
              </p>
            </section>
            <section>
              <p>CDMX</p>
            </section>
          </div>
        </div>
        <div className="right-section">
          <div className="right-terms-img">
            <img
              src="./logotexto.png"
              alt="Logo vacunamex"
              className="logotexto-vacuna"
            />
          </div>
          <FeedInstagram />
          <div className="right-terms-img">
            <img
              src="./post.png"
              alt="Logo vacunamex"
              className="post-vacuna"
            />
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
    </>
  );
}
