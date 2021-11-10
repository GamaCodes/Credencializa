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
      <div className="icon-contain-mobile">
        <IconContext.Provider
          value={{ className: "icon-social", size: "1.3rem" }}
        >
          <ImFacebook />
          <ImTwitter />
          <ImYoutube />
          <ImLinkedin2 />
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
                navigate("/producto");
                closeMobileMenu();
              }}
            >
              Nuestro Producto
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
            <ImFacebook />
            <ImTwitter />
            <ImYoutube />
            <ImLinkedin2 />
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
