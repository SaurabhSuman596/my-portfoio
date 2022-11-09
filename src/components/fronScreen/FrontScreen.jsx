import React from "react";
import "./FrontScreen.css";
import { HashLink as Link } from "react-router-hash-link";

const FrontScreen = () => {
  return (
    <div className="frontScreen" id="home">
      <div className="frontScreen__left">
        <p className="frontScreen__welcome">Hii 👋, Welcome</p>
        <h1 className="frontScreen__name">Saurabh Suman</h1>
        <p className="frontScreen__fullStack">Full Stack Developer</p>
        <p className="frontScreen__para">
          I am a full stack developer making heighly complex and scaleble
          websites.
        </p>
        <button className="frontScreen__button">
          {" "}
          <Link className="linkDark" smooth to="#my-contact">
            Contact
          </Link>
        </button>
      </div>
      <div className="frontScreen__right">
        <img
          src="https://joaotulio.vercel.app/static/media/illustration.cf4b7a67f23b684549c4f797c62b527a.svg"
          alt=""
          className="animate__backInRight"
        />
      </div>
    </div>
  );
};

export default FrontScreen;
