import React from "react";
import Me from "../../assets/me.png";

const Affirmations = (props) => {
  const { setContactSelected } = props;

  return (
    <section className="mood-container">
      <div>
        <p>AFFIRMATIONS</p>
        <ul className="mood-list">
          <li>I am enough</li>
          <li>I love myself for who I am</li>
          <li>Tough times allow me to appreciate the good times.</li>
          <li>I am beautiful just the way I am</li>
          <li>My past is not a reflection of my future.</li>
          <li>I deserve to be happy and feel joy</li>
          <li>I am worthy of love.</li>
          <li>I have the right to feel and be safe.</li>
          <li>I choose not to criticize myself or others around me.</li>
          <li>I’m doing my best and that is enough.</li>
          <li>I’m worthy of respect and acceptance.</li>
          <li>My needs and wants are important.</li>
          <li>
            I can do anything I put my mind to, I create the life I desire.
          </li>
          <li>No amount of worrying can change the future.</li>
          <li>Negative thoughts only have the power I allow them.</li>
          <li>
            Changing is never simple but it’s easier if I stop being hard on
            myself.
          </li>
        </ul>
        <p>affirmation meditaion?</p>
        <ul>
          <li>ICON IMage</li>png
          <a href="">
            <img src="data:image" className="Logo" alt="Logo" />
            text
          </a>
        </ul>
      </div>
      <div>
        <img src={Me} className="selfie" alt="selfie" />
      </div>
    </section>
  );
};

export default Affirmations;
