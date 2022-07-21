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
              href="https://www.nami.org/help"
            >
              National Alliance on Mental Illness 🔗
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
      <p>
        {" "}
        <a
          target="_blank"
          href="https://www.crisistextline.org/"
          rel="noreferrer"
        >
          🔗<b>Crisis Text Line:</b> <br /> Text HOME to 741741📲
        </a>
      </p>
      <p>
        {" "}
        <a href="tel: +1-800-950-6264" aria-hidden="true">
          <b>Talk</b> to someone @ the NAMI hotline: <br /> 1-800-950-NAMI
          (6264) 📞
        </a>
      </p>
      <p>
        {" "}
        <a target="_blank" href="mailto:helpline@nami.org" rel="noreferrer">
          <b>Email</b> someone through the NAMI HelpLine 📩
        </a>
      </p>

      <p>
        <b>National Suicide Prevention Lifeline:</b>{" "}
        <a href="tel: +1-800-950-6264" aria-hidden="true">
          <b>Call</b> 1-800-273-TALK (8255) 📞 <br /> <br />
          *If you or someone you know is in crisis, whether they are considering
          suicide or not, please call the toll-free Lifeline.*
        </a>
      </p>
    </section>
  );
};

export default Hotline;
