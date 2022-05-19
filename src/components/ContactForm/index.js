import React, { useState } from "react";
import { validateEmail } from "../../utils/emailValidate";

const ContactForm = (props) => {
  const { setContactSelected } = props;

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const { name, email, message } = formState;

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContactSelected(false);
  };

  return (
    <section className="contact-container">
      <div className="contact-header">
        <div>
          <h2>
            <a
              className="resume-button"
              target="_blank"
              rel="noreferrer"
              href="https://docs.google.com/document/d/10TNbdwt8S-v5pynfZDL_FST3l9nKzCNbYUIo45Ey65I/edit?usp=sharing"
            >
              RESUME 🔗
            </a>
          </h2>
        </div>
        <button
          className="close-button"
          onClick={() => setContactSelected(false)}
        >
          X
        </button>
      </div>
      <form id="contact-form" onSubmit={handleSubmit}></form>
      <h2>CONTACT ME: </h2>
      <p>
        {" "}
        <a href="tel: +1-801-999-0665" aria-hidden="true">
          (801) 999-0665 📞
        </a>
      </p>
      <p>
        {" "}
        <a
          target="_blank"
          href="mailto:danika.m.pearson@gmail.com"
          rel="noreferrer"
        >
          danika.m.pearson@gmail.com 📩
        </a>
      </p>
      <p>
        {" "}
        <a
          target="_blank"
          href="https://linkedin.com/in/danika-pearson"
          rel="noreferrer"
        >
          LinkedIn 🔗
        </a>
      </p>
      <p>⭐More cool stuff in the footer⭐</p>
    </section>
  );
};

export default ContactForm;
