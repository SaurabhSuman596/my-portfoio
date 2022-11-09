import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__logo">
        <span>S</span>Saurabh
      </p>
      <p className="footer__socialLink">
        <img
          src="https://joaotulio.vercel.app/static/media/linkedin.f249b38224ca41a0b909.png"
          alt=""
        />
        <img
          src="https://joaotulio.vercel.app/static/media/github.a855c3975c028d8069f5.png"
          alt=""
        />
        <img
          src="https://joaotulio.vercel.app/static/media/instagram.75e0546a6b5abe4c0506.png"
          alt=""
        />
        <img
          src="https://joaotulio.vercel.app/static/media/discord.ef8d9c88e020507818c2.png"
          alt=""
        />
      </p>
    </div>
  );
};

export default Footer;
