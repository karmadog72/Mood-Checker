import React from "react";
import Me from "../../assets/me.jpg";

const Moods = (props) => {
  const { setContactSelected } = props;

  return (
    <section className="moods-container">
      <div>
        <p>WHATS YOUR MOOD RIGHT NOW?</p>
        <ul className="mood-list">
          <li>HAPPY 😁</li>
          <li>ANGRY 😡</li>
          <li>SAD 😢</li>
          <li>DEPRESSED 😞</li>
          <li>ANXIOUS 😨</li>
          <li>MANIC 😵‍💫</li>
          <li>SICK 🤢</li>
          <li>IDK, BUT NOT GOOD ☹️</li>
          <li>PANICKY 😖</li>
          <li>PANIC ATTACK 😱</li>
          <li>ANXIETY ATTACK 😭</li>
          <li>
            SUICIDAL 💀{" "}
            <a href="https://suicidepreventionlifeline.org/talk-to-someone-now/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKTz3I5wTAhPq2q6A5KSKwkLmzcXwZoDi0WQ&usqp=CAU"
                className="Logo"
                alt="Logo"
              />
              Verified on Credly
            </a>
          </li>
        </ul>
        <p>EDUCATION:</p>
        <ul>
          <li>
            The University of Utah <br />
            Certificate - Full Stack Web Development
          </li>
          <a href="">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX////MAADIAAD98vLfhobmnJz01tbSLy//+vr99vbdfHz87u7fhITjkJDRIyPTMzPooqLyy8vz0dHpp6f229v55eXuubnOExPPHR3RKCjqrKz34uLvvr7ww8Pll5fyzMzgbKszAAAB9UlEQVR4nO3cS1PUQBSA0WtmVGAYXj5ABfn//1LdkakKkM7th1Xn26Zyu09lkfQmEZIkSZIkSZIkSZIkSYN0vkvrZHLe4PNNwosprcNs8CFv8MUm4f5DWvOHuMsbvCckzIqwOELCtAiLIyRMi7A4QsK0CIsjJEyLsDhCwrQIiyMkTIuwOELCtAiLIyRMi7A4QsK0CIsjfL3LvI1UE15uEh6vPr/sYc3K1/NbT4QPs6vXq0w/Xt56ddwkPOlmzT5WTV4zePqaaZr3cQzhp0q8ICR8LULCrAgJlyMkzIqQcDlCwqwICZcjJMyKkHA5QsKsCAmXIyTMipBwOULCrAgJlyMkzIqQcDlCwqwICZcjJMyKkHA5QsKsCOfCs/f3fwqrRUhI2D9CQsL+ERIS9o9wSz+n3rp/Tb/qCWM/AHF6rAgcgTg9VQVGHDsTqwN7ExsA+xKn2wbAiN/diI2A/YjTcyPg3zd/F2JDYB/idNcQGHHTntgW2J5Y82N0DGJ7YMSXlsQewKbEPsCGh6mKP2gbg9gP2IjYE9iEWPNE/56+1yb2BlYnfuvti8rEEYBViWMAKxJHAUY81iEe3l65WVWIIwEjntKJ92MBKxBHA0bcphLvd2+v2LznROKQwIi7KatBgRFnu6R6QyRJkiRJkiRJkiRJksr6AxK4VGr/2e3qAAAAAElFTkSuQmCC"
              className="Logo"
              alt="Logo"
            />
            Verified on Credly
          </a>
        </ul>
      </div>
      <div>
        <img src={Me} className="selfie" alt="selfie" />
      </div>
    </section>
  );
};

export default Moods;
