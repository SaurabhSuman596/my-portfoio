import React from "react";
import "./Description.css";

const Description = () => {
  return (
    <div className="description" id="about">
      <div className="description__left">
        <h3 className={"description__leftHead"}>About Me</h3>
        <div className="description__leftDesc">
          <p>
            My name is Saurabh Suman , i am a fullstack web developer who like
            to programme and make highly complex and scalable websites
          </p>
          <p>
            I use HTML ,CSS, JavaScript ,React,Node,MongoDb and many mone . i am
            constantly learning new technology such as web3.0 and machine
            learning using python
          </p>
          <p>
            I am passionate about my work and constantly chasing my dream , i am
            always ready to help my friend and ready to accept my fault so that
            i can fix it.
          </p>
        </div>
        <p className="descriptionFooter">Technology i use :</p>
        <p className="description__footerimg">
          <img
            src="https://joaotulio.vercel.app/static/media/react-icon.f1484e295933af0e748d6a01b05a8361.svg"
            alt=""
          />
          <img
            src="https://joaotulio.vercel.app/static/media/js-icon.ffcf56dc5498f7bbbec802191c740e5f.svg"
            alt=""
          />
          <img
            src="https://joaotulio.vercel.app/static/media/html-icon.ebfc51e406097a90691ab82f1aa72db3.svg"
            alt=""
          />
          <img
            src="https://joaotulio.vercel.app/static/media/css-icon.60a6c50d5a470990f63ee17a3bbd9178.svg"
            alt=""
          />
          <img
            src="https://joaotulio.vercel.app/static/media/node-icon.3dc364b8e9beb3561620274aea4f0844.svg"
            alt=""
          />
        </p>
      </div>
      <div className="description__right">
        <img src="./image/index.jpg" alt="" />
      </div>
    </div>
  );
};

export default Description;
