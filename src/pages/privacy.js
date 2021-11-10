import React from "react";

export default function privacy() {
  return (
    <div className="page-body">
      <div className="left-section">
        <h1 className="title">
          Aviso <br /> <span>de Privacidad</span>
        </h1>
        <div className="terms-contain">
          <section>
            <p>
              Términos y condiciones (en lo sucesivo los “Términos y Condiciones
              Generales”) que son aplicables a la publicidad e impresión en
              formatos “pvc” de los documentos que sean requeridos por los
              clientes en dicho formato (en lo sucesivo “tarjetas pvc”)
              ofertados al público en general bajo la marca{" "}
              <span className="terms-name">“CREDENCIALIZA TU VACUNA. MX”</span>{" "}
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
              vinculada únicamente al mismo y a los datos a los que se refiere,
              lo que permite que sea detectadle cualquier modificación ulterior
              de éstos, la cual produce los mismos efectos jurídicos que la
              firma autógrafa.
            </p>
            <p>
              Documentos gubernamentales: son documentos memoriales, documentos
              que reflejan el ejercicio de las facultades que la Soberanía
              Nacional ha conferido a instituciones Públicos y por ello tienen
              (deben tener) una inevitable vocación pública: la sociedad debe
              acceder a ellos.
            </p>
            <p>
              Certificado: que es una tarjeta de identidad y contiene el nombre,
              RFC y CURP. También se llama llave pública, ya que cualquier
              persona puede tener acceso a ella.
            </p>
            <p>
              Autenticidad: a la certeza que en un documento digital electrónico
              determinado fue emitido por el titular y que, por lo tanto, el
              contenido y las consecuencias jurídicas que del mismo deriven, le
              son atribuibles a este en tanto se consideración expresión de su
              voluntad.
            </p>
            <p>
              Documento electrónico: al soporte escrito con caracteres
              alfanuméricos, archivos de imagen, video, audio, o cualquier otro
              formato tecnológico disponible que contenga información en
              lenguaje natural o convencional, intercambiado por medios
              electrónicos, con el que sea posible dar constancia de un hecho y
              que se este signado con la firma electrónica avanzada y/o en el
              que se encuentre plasmado el sello electrónico.
            </p>
            <p>
              Llave privada: se encuentra protegida con su contraseña de acceso
              y asegura que sólo tú puedes usar tu FIEL/FEA firma.
            </p>
          </section>
        </div>
      </div>
      <div className="right-section">
        <input className="input-section" type="text"></input>
        <button className="button-section">Search</button>
      </div>
    </div>
  );
}
