import React from "react";

import "./Footer.css";
// icons
import Whatsapp from "../../assets/whatsapp.svg";
import Instagram from "../../assets/instagram.svg";
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";

const Footer = () => {
  return (
    <div className="contact" id="contact">
      <h2 className="contact-title">Entre em contato!</h2>
      <div className="cardContact">
        <a
          className="social-link1"
          href="https://www.instagram.com/guiligeski_/"
          target="_blank"
        >
          <img src={Instagram} alt="" />
        </a>
        <a
          className="social-link2"
          href="https://www.linkedin.com/in/guilherme-ligeski-saldanha/"
          target="_blank"
        >
          <img src={Linkedin} alt="" srcSet="" />
        </a>
        <a
          className="social-link3"
          href="https://github.com/GuiLigeskee"
          target="_blank"
        >
          <img src={Github} alt="" />
        </a>
        <a
          className="social-link4"
          href="https://wa.me/5541987240654"
          target="_blank"
        >
          <img src={Whatsapp} alt="" />
        </a>
      </div>
      <p className="copy">Feito por Guiligeskee&copy; 2024</p>
    </div>
  );
};

export default Footer;
