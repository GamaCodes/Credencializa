import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import FeedInstagram from "../components/FeedInstagram";

export default function Modules() {
  const navigate = useNavigate();
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
            <>
              <section>
                <p>Baja California</p>
                <p>
                  <span>Mexicali</span>
                </p>
                <ul>
                  <li>Centro Cívico | Palacio Federal sobre calle pioneros.</li>
                  <li>
                    Boulevard Benito Juárez aun costado de Pinturas COMEX.
                  </li>
                  <li>Estadio de Beisbol | Nido de los Águilas.</li>
                  <li>Plaza Cachanilla.</li>
                </ul>

                <p>
                  <span>Tijuana</span>
                </p>
                <ul>
                  <li>Zona Urbana Rio | Frente a Office Max.</li>
                  <li>Plaza Galerias.</li>
                </ul>
              </section>
              <section>
                <p>Sinaloa</p>
                <p>
                  <span>Culiacán</span>
                </p>

                <ul>
                  <li>Gral. Angel Flores 370 Ote. Colonia Centro 80000 </li>
                </ul>
              </section>

              <section>
                <p>Jalisco</p>
                <p>
                  <span>Guadalajara</span>
                </p>

                <ul>
                  <li>Estadio de Beisbol | Charros de Jalisco.</li>
                  <li>Providencia 4ta Sección | Bogotá 2825.</li>
                </ul>
              </section>

              <section>
                <p>CDMX</p>
                <ul>
                  <li>Polanco | Juan Vázquez de Mella 481 piso 2.</li>
                  <li>Basílica de Nuestra Sra. De Guadalupe.</li>
                  <li>Autódromo Hnos. Rodriguez Puerta 6 (Eventos)</li>
                  <li>Alcaldía Iztacalco</li>
                </ul>
              </section>
            </>
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
