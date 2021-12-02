import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImYoutube, ImLinkedin2, ImFacebook, ImTwitter } from "react-icons/im";
import { HiMenu, HiX } from "react-icons/hi";
import { IconContext } from "react-icons";

export default function Navbar() {
  const navigate = useNavigate();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <div className="logo-contain">
        <img
          src="./logovacuna.svg"
          alt="Logo vacunamex"
          onClick={() => navigate("/")}
          className="logo-vacuna"
        />
      </div>
      <div className="icon-contain-mobile">
        <IconContext.Provider
          value={{ className: "icon-social", size: "1.3rem" }}
        >
          <a
            href="https://www.facebook.com/CredencializaTuVacunaMX"
            target="_blank"
            rel="noreferrer"
          >
            <ImFacebook />
          </a>

          <a
            href="https://twitter.com/CredencializaMx"
            target="_blank"
            rel="noreferrer"
          >
            <ImTwitter />
          </a>

          <a
            href="https://www.youtube.com/channel/UCTHsyaig5ORSiDQ49_hgU2w"
            target="_blank"
            rel="noreferrer"
          >
            <ImYoutube />
          </a>

          <a
            href="https://www.instagram.com/credencializa_tu_vacuna/"
            target="_blank"
            rel="noreferrer"
          >
            <ImLinkedin2 />
          </a>
        </IconContext.Provider>
      </div>
      <div className="header">
        <div>
          <ul className={click ? "nav-options active" : "nav-options"}>
            <li
              className="option"
              onClick={() => {
                navigate("/");
                closeMobileMenu();
              }}
            >
              Home
            </li>
            <li
              className="option"
              onClick={() => {
                navigate("/modulos");
                closeMobileMenu();
              }}
            >
              Módulos de Impresión
            </li>
            <li
              className="option"
              onClick={() => {
                navigate("/credencial");
                closeMobileMenu();
              }}
            >
              Tu Credencial
            </li>
            <li
              className="option"
              onClick={() => {
                navigate("/empresa");
                closeMobileMenu();
              }}
            >
              Nuestra Empresa
            </li>
            <li
              className="option"
              onClick={() => {
                navigate("/terminos");
                closeMobileMenu();
              }}
            >
              Terminos y Condiciones
            </li>
          </ul>
        </div>
        <div className="icon-contain">
          <IconContext.Provider
            value={{ className: "icon-social", size: "1.3rem" }}
          >
            <a
              href="https://www.facebook.com/CredencializaTuVacunaMX"
              target="_blank"
              rel="noreferrer"
            >
              <ImFacebook />
            </a>

            <a
              href="https://twitter.com/CredencializaMx"
              target="_blank"
              rel="noreferrer"
            >
              <ImTwitter />
            </a>

            <a
              href="https://www.youtube.com/channel/UCTHsyaig5ORSiDQ49_hgU2w"
              target="_blank"
              rel="noreferrer"
            >
              <ImYoutube />
            </a>

            <a
              href="https://www.instagram.com/credencializa_tu_vacuna/"
              target="_blank"
              rel="noreferrer"
            >
              <ImLinkedin2 />
            </a>
          </IconContext.Provider>
        </div>

        <div className="mobile-menu" onClick={handleClick}>
          <IconContext.Provider value={{ color: "fff", size: "1.8rem" }}>
            {click ? <HiX /> : <HiMenu />}
          </IconContext.Provider>
        </div>
      </div>
    </>
  );
}
