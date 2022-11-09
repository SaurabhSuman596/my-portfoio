import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Switch } from "@mui/material";
import HamData from "../HamData.jsx/HamData";
import CloseIcon from "@mui/icons-material/Close";
import { HashLink as Link } from "react-router-hash-link";
import pdf from "../../saurabh.pdf";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [light, setLight] = useState(false);
  const sidebarSet = (setSide) => {
    setSidebar(setSide);
  };

  if (light === true) {
    light && document.querySelector("body").classList.add("lightTheme");
    document.querySelector(".header").classList.add("headerLightTheme");
    document.querySelector(".header__sDark").classList.add("header__sLight");
    document.querySelector(".frontScreen").classList.add("frontScreenLight");
    document
      .querySelector(".frontScreen__name")
      .classList.add("frontScreen__nameLight");
    document.querySelector(".description").classList.add("descriptionLight");
    document
      .querySelector(".contact__email")
      .classList.add("contact__emailLight");
    document
      .querySelector(".contact__textArea")
      .classList.add("contact__textAreaLight");
  } else if (light === false) {
    document.querySelector("body").classList.remove("lightTheme");
    document.querySelector(".header")?.classList.remove("headerLightTheme");
    document
      .querySelector(".header__sDark")
      ?.classList.remove("header__sLight");
    document
      .querySelector(".frontScreen")
      ?.classList.remove("frontScreenLight");
    document
      .querySelector(".frontScreen__name")
      ?.classList.remove("frontScreen__nameLight");
    document
      .querySelector(".description")
      ?.classList.remove("descriptionLight");
    document
      .querySelector(".contact__email")
      ?.classList.remove("contact__emailLight");
    document
      .querySelector(".contact__textArea")
      ?.classList.remove("contact__textAreaLight");
  }

  return (
    <div className="header__wrapper">
      <div className="header">
        <div className="header__left">
          <Link smooth to="#home" className="linkDark">
            <span>S </span>
            <span className="header__sDark ">Saurabh</span>
          </Link>
        </div>
        <div className="header__right">
          <Switch onClick={() => setLight(!light)} />
          <div className="nav__wrapper">
            <div className="header__nav">
              <p>
                <Link smooth to="#home" className="linkDark">
                  Home
                </Link>
              </p>
              <p>
                <Link smooth to="#about" className="linkDark">
                  About Me
                </Link>
              </p>
              <p>
                <Link smooth to="#projects" className="linkDark">
                  Projects
                </Link>
              </p>
              <p>
                <Link smooth to="#my-contact" className="linkDark">
                  Contact
                </Link>
              </p>
              <p className="hamData__CV">
                <a href={pdf} target="_blank" rel="noreferrer">
                  CV
                </a>
              </p>
            </div>
          </div>

          {sidebar ? (
            <CloseIcon
              className="header__close"
              onClick={() => setSidebar(false)}
            />
          ) : (
            <MenuIcon
              className="header__cancle"
              onClick={() => setSidebar(true)}
            />
          )}
        </div>
      </div>
      {sidebar && <HamData sidebar={sidebar} sidebarSet={sidebarSet} />}
    </div>
  );
};

export default Header;
