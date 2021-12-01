import React from "react";

export default function FeedInsragram() {
  return (
    <div className="feed">
      <div className="feed-body">
        <section>
          <div className="feed-header">
            <img
              className="feed-logo"
              src="./perfil.png"
              alt="Credencializa Instagram"
            />
            <section className="feed-header-text">
              <p className="feed-header-title">credencializa_tu_vacuna</p>
              <button>
                <a
                  href="https://www.instagram.com/credencializa_tu_vacuna/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver Perfil
                </a>
              </button>
            </section>
          </div>
          <div className="feed-info">
            <section>
              <p className="feed-header-subtitle">
                Credencializa Tu Certificado
              </p>
              <p className="feed-header-company">Producto/servicio</p>
              <p className="feed-header-des">
                📍CDMX 📍GUADALAJARA 📍TIJUANA 📍CULIACÁN
              </p>
            </section>
          </div>
        </section>
        <section>
          <div className="feed-carousel">
            <img className="feed-img" src="./image1.jpg" alt="" />
            <img className="feed-img" src="./image2.jpg" alt="" />
            <img className="feed-img" src="./image3.jpg" alt="" />
          </div>
          <div className="feed-carousel">
            <img className="feed-img" src="./image4.jpg" alt="" />
            <img className="feed-img" src="./image5.jpg" alt="" />
            <img className="feed-img" src="./image6.jpg" alt="" />
          </div>
          <div className="feed-carousel">
            <img className="feed-img" src="./image7.jpg" alt="" />
            <img className="feed-img" src="./image8.jpg" alt="" />
            <img className="feed-img" src="./image9.jpg" alt="" />
          </div>
        </section>
      </div>
    </div>
  );
}
