import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import FeedInstagram from "../components/FeedInstagram";

export default function Product() {
  const navigate = useNavigate();
  return (
    <>
      <Banner home={false} />
      <div className="page-body">
        <div className="left-section-variant">
          <h1 className="title">
            Tu <span>Credencial</span>
          </h1>
          <div className="product-contain">
            <div>
              <section>
                <h3 className="subtitle-product">
                  Tu certificado de vacunación en credencial
                </h3>
                <p>
                  Es la primera credencial en México que, gracias a su código
                  QR, certifica que recibiste tus dos dosis de vacuna contra el
                  COVID-19.*
                </p>
              </section>
              <section>
                <h3 className="subtitle-product">Viaja seguro</h3>
                <p>
                  Imprime tu certificado en credencial; viaja por todo México y
                  el mundo. Con tu credencial evita perder tiempo en tus
                  traslados ya que siempre estará al alcance de tu mano.
                </p>
              </section>
              <section>
                <h3 className="subtitle-product">Hologramas de validez</h3>
                <p>
                  Cuenta con hologramas de seguridad que garantizan su validez y
                  evitan su falsificación o clonación.
                </p>
              </section>
              <section>
                <h2 className="subtitle-product subtitle-product-variant">
                  Ventajas
                </h2>
              </section>
              <section>
                <h3 className="subtitle-product">Portabilidad</h3>
                <p>
                  Imprime tu certificado de vacunación en formato credencial y
                  llévalo siempre contigo en tu celular, cartera, bolsa o tu
                  mochila.
                </p>
              </section>
              <section>
                <h3 className="subtitle-product">Durabilidad</h3>
                <p>
                  Hecha con PVC de alta resistencia para evita deformaciones o
                  roturas.
                </p>
              </section>
              <section>
                <h3 className="subtitle-product">
                  Uso nacional e internacional
                </h3>
                <p>
                  Gracias a su código QR y a sus hologramas de validez certifica
                  que has recibido tus dos dosis de vacunas en México con
                  validez en todo el mundo.**
                </p>
              </section>
              <section className="product-others">
                <p>
                  * Uso exclusivo para personas vacunadas
                  <p>
                    **El ingreso al país destino depende de qué marca de vacuna
                    tengas, no del certificado de vacunación.
                  </p>
                </p>
              </section>
            </div>
            <div className="product-body-video">
              <video
                src="./video3.mp4"
                className="product-video"
                autoPlay
                preload
                muted
                loop
              ></video>
              <img
                src="./pvcDiagonalVariant.png"
                alt="Credencial de vacunacion"
                className="img-card"
              />
            </div>
          </div>
          <div>
            <video
              src="./video2.mp4"
              className="banner-video-company"
              autoPlay
              preload
              muted
              loop
              onClick={() => {
                navigate("/corporativo");
                window.scrollTo(0, 0);
              }}
            ></video>
          </div>
        </div>

        <div className="right-section-variant">
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
