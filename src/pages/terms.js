import React from "react";
import Banner from "../components/Banner";
import FeedInstagram from "../components/FeedInstagram";

export default function terms() {
  return (
    <>
      <Banner home={false} />
      <div className="page-body">
        <div className="left-section">
          <h1 className="title">
            Terminos <br /> <span>y Condiciones</span>
          </h1>
          <div className="terms-contain">
            <section>
              <p>
                Términos y condiciones (en lo sucesivo los “Términos y
                Condiciones Generales”) que son aplicables a la publicidad e
                impresión en formatos “pvc” de los documentos que sean
                requeridos por los clientes en dicho formato (en lo sucesivo
                “tarjetas pvc”) ofertados al público en general bajo la marca{" "}
                <span className="terms-name">
                  “CREDENCIALIZA TU VACUNA. MX”
                </span>{" "}
                a través de su página de internet{" "}
                <span className="terms-url">www.credencializatuvacuna.mx</span>{" "}
                (en lo sucesivo el “Sitio”) y demás redes sociales de momento en
                momento.
              </p>
            </section>
            <section>
              <h3 className="subtitle">Definiciones:</h3>
              <p>
                Firma electrónica: el conjunto de datos y caracteres que permite
                la identificación del firmante, que ha sido creada por medios
                electrónicos bajo su exclusivo control, de manera que está
                vinculada únicamente al mismo y a los datos a los que se
                refiere, lo que permite que sea detectadle cualquier
                modificación ulterior de éstos, la cual produce los mismos
                efectos jurídicos que la firma autógrafa.
              </p>
              <p>
                Documentos gubernamentales: son documentos memoriales,
                documentos que reflejan el ejercicio de las facultades que la
                Soberanía Nacional ha conferido a instituciones Públicos y por
                ello tienen (deben tener) una inevitable vocación pública: la
                sociedad debe acceder a ellos.
              </p>
              <p>
                Certificado: que es una tarjeta de identidad y contiene el
                nombre, RFC y CURP. También se llama llave pública, ya que
                cualquier persona puede tener acceso a ella.
              </p>
              <p>
                Autenticidad: a la certeza que en un documento digital
                electrónico determinado fue emitido por el titular y que, por lo
                tanto, el contenido y las consecuencias jurídicas que del mismo
                deriven, le son atribuibles a este en tanto se consideración
                expresión de su voluntad.
              </p>
              <p>
                Documento electrónico: al soporte escrito con caracteres
                alfanuméricos, archivos de imagen, video, audio, o cualquier
                otro formato tecnológico disponible que contenga información en
                lenguaje natural o convencional, intercambiado por medios
                electrónicos, con el que sea posible dar constancia de un hecho
                y que se este signado con la firma electrónica avanzada y/o en
                el que se encuentre plasmado el sello electrónico.
              </p>
              <p>
                Llave privada: se encuentra protegida con su contraseña de
                acceso y asegura que sólo tú puedes usar tu FIEL/FEA firma.
              </p>
            </section>
            <section>
              <h3 className="subtitle">Características del servicio:</h3>
              <ol>
                <li>
                  Los servicios que prestamos de impresión son cualquier
                  documento que los clientes pretendan o deseen adquirir en
                  formatos “pvc”.
                </li>
                <li>
                  Los documentos electrónicos que no sean proporcionados por su
                  impresión, será conforme el cliente lo solicite bajo un diseño
                  especializado o replica de los formatos, que deseen, a
                  elección del solicitante, pero bajo ninguna circunstancia se
                  modificará la información.
                </li>
                <li>
                  Para el caso en que el cliente desee la impresión de algún
                  documento oficial de forma alterada, delictiva o no, daremos
                  aviso a las autoridades competentes.
                </li>
                <li>
                  Dentro de los servicios que ofrecemos, no se encuentra
                  prevista la posibilidad de acceder a información confidencial,
                  gubernamental o bases datos privadas.
                </li>
                <li>
                  La información personal a la que podremos acceder será por
                  medio de plataforma pública y en todo momento será bajo tu
                  consentimiento y sin realizar cambios o alternaciones.
                </li>
                <li>
                  No prestaremos el servicio a las personas que deseen cometer
                  delitos o falta la propiedad intelectual.
                </li>
                <li>
                  Nuestros servicios no dependen de ninguna autoridad
                  gubernamental, no partido político; ofrecemos los servicios al
                  público en general conforme a nuestra capacidad de impresión.
                </li>
                <li>
                  Para el caso en que la impresión de los documentos trate sobre
                  documentos oficiales digitales (cadenas de seguridad, cadenas
                  digitales, código QR, etc.…) en ningún momento haremos
                  variación alguna, se imprimirá con su total veracidad.
                </li>
                <li>
                  Los documentos digitales gubernamentales, institucionales,
                  empresariales, etc., que se impriman bajo el formato PVC, no
                  hará las veces de documento oficial, y no están cotejados por
                  dichas entidades, únicamente se imprime; la forma la cadena
                  digital o QR que se redirecciona al verificador/ usuario a la
                  página oficial/ bases de datos oficiales/portales en donde se
                  cuenta el documento digital oficial, original o con validez
                  para dichas instituciones.
                </li>
              </ol>
              <ol className="ol-letter">
                <li>
                  Se utiliza la impresión en formato "PVC" de las cadenas
                  digitales, como un medio de fácil comprobación de dicho
                  código/ cadenas digitales para quien desea utilizarlo o
                  cotejar la veracidad.
                </li>
                <li>
                  No se logra más comas filtros de seguridad es para control y
                  uso interno con el fin de garantizar al usuario nuestro
                  trabajo y distinguirlos frente al mercado/competidores.
                </li>
              </ol>
            </section>
            <section>
              <p>
                Los presentes "Términos y condiciones Generales" aplicarán para
                cualquier persona que acceda a nuestro portal o redes sociales
                disponibles de momento el momento, y para los contratantes de
                los servicios de impresión de formatos digitales en material
                PVC.
              </p>
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
