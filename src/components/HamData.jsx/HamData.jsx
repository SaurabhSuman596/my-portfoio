import React from "react";
import "./HamData.css";
import CloseIcon from "@mui/icons-material/Close";
import { HashLink as Link } from "react-router-hash-link";
import pdf from "../../saurabh.pdf";

const HamData = ({ sidebar, sidebarSet }) => {
  return (
    <div className="hamdata">
      {sidebar && (
        <CloseIcon
          className="header__close"
          onClick={() => sidebarSet(false)}
        />
      )}
      <p onClick={() => sidebarSet(false)}>
        <Link smooth to="#home" className="link">
          Home
        </Link>
      </p>
      <p onClick={() => sidebarSet(false)}>
        <Link smooth to="#about" className="link">
          About Me
        </Link>
      </p>
      <p onClick={() => sidebarSet(false)}>
        <Link smooth to="#projects" className="link">
          Projects
        </Link>
      </p>
      <p onClick={() => sidebarSet(false)}>
        <Link smooth to="#my-contact" className="link">
          Contact
        </Link>
      </p>
      <p className="hamData__CV" onClick={() => sidebarSet(false)}>
        <a href={pdf} target="_blank" rel="noreferrer">
          CV
        </a>
      </p>
    </div>
  );
};

export default HamData;
