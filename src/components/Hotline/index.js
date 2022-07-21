import React, { useState } from "react";
import { validateEmail } from "../../utils/emailValidate";

const Hotline = (props) => {
  const { setHotlineSelected } = props;

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
    setHotlineSelected(false);
  };

  return (
    <section className="hotline-container">
      <div className="hotline-header">
        <div>
          <h2>
            <a
              className="resume-button"
              target="_blank"
              rel="noreferrer"
              href="https://youtu.be/Z6IRLZs4FVM"
            >
              Puppies!!! 🔗
            </a>
          </h2>
        </div>
        <button
          className="close-button"
          onClick={() => setHotlineSelected(false)}
        >
          X
        </button>
      </div>
      <form id="hotline" onSubmit={handleSubmit}></form>
      <h2>NATIONAL ALLIANCE on MENTAL ILLNESS </h2>
      <p>
        {" "}
        <a href="tel: +1-800-950-6264" aria-hidden="true">
          1-800-950-NAMI (6264) 📞
        </a>
      </p>
      <p>
        {" "}
        <a
          target="_blank"
          href="mailto:danika.m.pearson@gmail.m"
          rel="noreferrer"
        >
          Moar stuff 📩
        </a>
      </p>
      <p>
        {" "}
        <a
          target="_blank"
          href="https://linkedin.com/in/danika-pearson"
          rel="noreferrer"
        >
          Not sure yet🔗
        </a>
      </p>
      <p>⭐More cool stuff in the footer⭐</p>
    </section>
  );
};

export default Hotline;