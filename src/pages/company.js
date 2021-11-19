import React from "react";
import Banner from "../components/Banner";

export default function company() {
  return (
    <>
      <Banner home={false} />
      <div className="page-body">
        <div className="left-section">
          <h1 className="title">
            Nuestra <br /> <span>Empresa</span>
          </h1>
          <div className="terms-contain">
            <section>
              <h2 className="subtitle-product">Misión</h2>
              <p>
                Nuestro compromiso es facilitar la movilidad del{" "}
                <span className="terms-name">certificado de vacunación </span>{" "}
                completo contra la COVID-19 a los mexicanos.
              </p>
            </section>
            <section>
              <h2 className="subtitle-product">Visión </h2>
              <p>
                Promover la seguridad sanitaria de las y los mexicanos en todo
                el mundo.
              </p>
              <p>
                Somos una empresa 100% mexicana con presencia en las principales
                ciudades del territorio nacional. Nuestro objetivo es imprimir
                credenciales que acreditan el certificado de vacunación contra
                la COVID-19, en PVC.{" "}
              </p>
            </section>
            <section>
              <h3 className="subtitle-product">Valores </h3>
              <p>Calidad, seguridad, compromiso y responsabilidad social.</p>
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
          <div className="right-terms-img">
            <img
              src="./post.png"
              alt="Logo vacunamex"
              className="post-vacuna"
            />
          </div>
        </div>
      </div>
    </>
  );
}
