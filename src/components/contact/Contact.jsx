import React, { useRef, useState } from "react";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import "./Contact.css";
import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import ReactLoading from "react-loading";

const Contact = () => {
  const emailRef = useRef();
  const textRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await setDoc(doc(db, "message", emailRef.current.value), {
        email: emailRef.current.value,
        message: textRef.current.value,
      });
      setLoading(false);
      emailRef.current.value = "";
      textRef.current.value = "";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="contact" id="my-contact">
      <div className="contact__head">
        <h1>Contact</h1>
        <p>If you like my work and see the potential you can contect me.</p>
      </div>
      <div className="contact__button">
        <button>
          <EmailOutlinedIcon />
          <span>saurabhsuman100t@gmail.com</span>
        </button>
        <button>
          <CallOutlinedIcon />
          <span>+91 6209048721</span>
        </button>
      </div>
      <div className="contact__form">
        <h2>Fill The form and press the Submit button</h2>
        <input
          type="email"
          className="contact__email"
          placeholder="Email"
          ref={emailRef}
        />
        <textarea
          className="contact__textArea"
          ref={textRef}
          placeholder="Enter your message..."
        ></textarea>
        <button onClick={handleSubmit}>
          {loading ? <ReactLoading type="bubbles" color="white" /> : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default Contact;
