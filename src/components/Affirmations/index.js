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
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX////MAADIAAD98vLfhobmnJz01tbSLy//+vr99vbdfHz87u7fhITjkJDRIyPTMzPooqLyy8vz0dHpp6f229v55eXuubnOExPPHR3RKCjqrKz34uLvvr7ww8Pll5fyzMzgbKszAAAB9UlEQVR4nO3cS1PUQBSA0WtmVGAYXj5ABfn//1LdkakKkM7th1Xn26Zyu09lkfQmEZIkSZIkSZIkSZIkSYN0vkvrZHLe4PNNwosprcNs8CFv8MUm4f5DWvOHuMsbvCckzIqwOELCtAiLIyRMi7A4QsK0CIsjJEyLsDhCwrQIiyMkTIuwOELCtAiLIyRMi7A4QsK0CIsjfL3LvI1UE15uEh6vPr/sYc3K1/NbT4QPs6vXq0w/Xt56ddwkPOlmzT5WTV4zePqaaZr3cQzhp0q8ICR8LULCrAgJlyMkzIqQcDlCwqwICZcjJMyKkHA5QsKsCAmXIyTMipBwOULCrAgJlyMkzIqQcDlCwqwICZcjJMyKkHA5QsKsCOfCs/f3fwqrRUhI2D9CQsL+ERIS9o9wSz+n3rp/Tb/qCWM/AHF6rAgcgTg9VQVGHDsTqwN7ExsA+xKn2wbAiN/diI2A/YjTcyPg3zd/F2JDYB/idNcQGHHTntgW2J5Y82N0DGJ7YMSXlsQewKbEPsCGh6mKP2gbg9gP2IjYE9iEWPNE/56+1yb2BlYnfuvti8rEEYBViWMAKxJHAUY81iEe3l65WVWIIwEjntKJ92MBKxBHA0bcphLvd2+v2LznROKQwIi7KatBgRFnu6R6QyRJkiRJkiRJkiRJksr6AxK4VGr/2e3qAAAAAElFTkSuQmCC"
              className="Logo"
              alt="Logo"
            />
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
