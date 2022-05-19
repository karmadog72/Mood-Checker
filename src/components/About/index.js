import React from "react";
import Me from "../../assets/me.jpg";

const About = (props) => {
  const { setContactSelected } = props;

  return (
    <section className="about-container">
      <div>
        <p>
          Hi, my name is Danika Pearson, I've recently earned a certificate in
          Full Stack Web Development from The University of Utah. <br /> I’m
          excited to leverage my skills as part of a fast-paced, quality-driven
          team to build better experiences on the web.
        </p>

        <p>
          When I'm not coding, I enjoy painting, puzzles, going to concerts and
          hanging with dogs.
        </p>
        <p>LANGUAGES:</p>
        <ul className="stack-list">
          <li>HTML5, CSS and JavaScript</li>
          <li>MERN</li>
          <li>SQL/NoSQL</li>
          <li>Handlebars.JS</li>
          <li>Bootstrap</li>
          <li>Bulma</li>
          <li>jQuery</li>
          <li>Insomnia</li>
          <li>SPA</li>
          <li>PWA</li>
          <li>GitHub</li>
        </ul>
        <p>EDUCATION:</p>
        <ul>
          <li>
            The University of Utah <br />
            Certificate - Full Stack Web Development
          </li>
          <a href="https://www.credly.com/badges/add87d75-f7ab-4cac-8e52-c81fcf45b9d3/linked_in?t=r9kiqa">
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

export default About;
