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
            Aviso <br /> <span>de Privacidad</span>
          </h1>
          <div className="terms-contain">
            <section>
              <p>
                En en base a la normativa fijada por la “Ley Federal de
                protección de datos personales en posesión de particulares”
                (LEY) Y en el "Reglamento de la Ley Federal de Protección de
                Datos Personales en Posesión de Particulares" (REGLAMENTO), así
                como en las especificaciones y parámetros previstos en los
                lineamientos del aviso de privacidad publicados en el Diario
                Oficial de la Federación y por el modelo del aviso de privacidad
                corto para video vigilancia emitida por el Instituto Nacional de
                Transparencia, Acceso a la Información y Protección de Datos
                Personales (INAI). Alejandro Guerrero Bautista en lo en lo
                sucesivo LA RESPONSABLE, con domicilio en la Calle Ostia 2782
                Piso 4, en la colonia Providencia, en lacio de Guadalajara,
                Jalisco, México, código postal 44630; pone a disposición del
                público en general los términos y condiciones del aviso de
                privacidad simplificado para la protección de datos personales
                (Aviso de Privacidad).
              </p>
              <p>
                El responsable de la recepción manejo y salvaguarda de la
                información será Alejandro Guerrero Bautista, quien ejerce bajo
                la marca comercial “Credencializa Tu Vacuna MX”, toda la
                información será utilizada en base al tratamiento y finalidades
                que se proveen a lo largo del presente Aviso de Privacidad.
              </p>
              <p>
                Los datos personales solicitados y recabados tendrán como
                finalidad: identificar al titular de la información, brindarle
                información acerca de los productos y servicios que ofrecemos,
                para la impresión o reimpresión del documento personales, para
                realizar encuestas de control de calidad, integración del
                expediente de prospectos y/o clientes y/o prestador de servicios
                y/o proveedor, para dar cumplimiento a las obligaciones de
                carácter fiscal o comercial, para fines de comunicación con el
                titular, para la celebración de contratos o convenios ante el
                titular y terceros con los que se tenga relación directa.
              </p>
              <p>
                La responsable tiene ubicada su oficina en la Calle Ostia 2782
                Piso 4, en la colonia Providencia, en lacio de Guadalajara,
                Jalisco, México, código postal 44630; para la atención de dudas
                o reclamaciones, así como para los efectos revocación y negativa
                del consentimiento y para el seguimiento al procedimiento de
                derechos ARCO a favor del titular de los datos personales.
              </p>
              <p>
                Correo electrónico:{" "}
                <span className="terms-name">
                  info@credencializatuvacuna.mx{" "}
                </span>{" "}
              </p>
              <p>
                Teléfono: <span className="terms-name">3330612330</span>
              </p>
              <p>
                Para mayor información sobre el uso de tus datos personales,
                ponemos a tu disposición nuestro{" "}
                <span className="terms-name">AVISO DE PRIVACIDAD INTEGRAL</span>{" "}
                de forma digital al solicitarlo por correo electrónico y/o
                físicamente, en las elecciones que han señalado en el párrafo
                anterior, con el fin primordial de qué te enteres de su
                contenido, otorgues y/o niegues tu consentimiento.
              </p>
            </section>
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
