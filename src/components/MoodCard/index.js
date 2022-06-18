import React, { useState } from "react";
import Modal from "../Modal/index";

const MoodCard = () => {
  const photos = [
    {
      mood: "ANGRY",
      description:
        "Welcome to SYNTAX! Hire, Connect & Collaborate in our world of coding!",
      stack:
        "ReactJS, MySelect-React, CSS, MongoDB Atlas, Debugging, Heroku Deployment",
      role: "ReactJS, MySelect-React, CSS, Debugging",
      caption: "😡 ANGRY",
      github: "https://github.com/karmadog72/Syntax",
      deployment: "https://syntax-uofu.herokuapp.com",
    },
    {
      mood: "SAD",
      description:
        "AL-Together helps people with memory loss navigate daily life, with use of our website",
      stack:
        "HTML CSS JavaScript and CSS library 'Bulma'. 'Jquery' was also used for a JavaScript library along side that, MomentJs was included to help with time. Finally we included 2 API's. 1 being a COVID API to keep the user updated with the current active cases in the US. The other API is a weather so that the user can have the ease of checking the weather on the landing page.",
      role:
        "HTML, Bulma, MomentJs, COVID API . (Footer & Medication Schedule page)",
      caption: "😢 SAD",
      github: "https://github.com/karmadog72/AL-together",
      deployment:
        "https://lannylopez.github.io/AL-together/secondary-pages/meds.html",
    },
    {
      mood: "DEPRESSED",
      description:
        "A user-friendly allergen filtered grocery application created for those who struggle with finding grocery products excluding their allergies",
      stack:
        "Node, Express, Handlebars, MySQL, Rapid API-Spoonacular, Sequelize, Heroku.",
      role: "Handlebars & CSS",
      caption: "😞 DEPRESSED",
      github: "https://github.com/karmadog72/Allergy-Finder",
      deployment: "https://whispering-chamber-78611.herokuapp.com/",
    },
    {
      mood: "ANXIOUS",
      description:
        "A tech blog to publish articles, comment on / post thoughts, opinions and general information",
      stack:
        "Express-handlebars, MySQL2, Sequelize, dotenv, bcrypt, express-session, connect-session-sequelize, Heroku",
      role: "Developed entire application",
      caption: "😨 ANXIOUS",
      github: "https://github.com/karmadog72/CMS-BLOG",
      deployment: "https://murmuring-meadow-54235.herokuapp.com/",
    },
    {
      mood: "SICK",
      description: "An app to help people generate a random password",
      stack: "Script.js, CSS, HTML",
      role: "Developed entire application",
      caption: "🤢 SICK",
      github: "https://github.com/karmadog72/JavaScript-Password-Challenge-",
      deployment:
        "https://github.com/karmadog72/JavaScript-Password-Challenge-",
    },

    {
      mood: "MALAISE/uneasy?",
      description: "My 1st ever web developer portfolio.",
      stack: "HTML, CSS",
      role: "Developed entire application",
      caption: "☹️ MALAISE",
      github: "https://github.com/karmadog72/portfolio-challenge-",
      deployment: "https://karmadog72.github.io/portfolio-challenge-/",
    },
    {
      mood: "STRESSED / OVERWHELMED",
      description: "My 1st ever web developer portfolio.",
      stack: "HTML, CSS",
      role: "Developed entire application",
      caption: "😵‍💫 STRESSED / OVERWHELMED",
      github: "https://github.com/karmadog72/portfolio-challenge-",
      deployment: "https://karmadog72.github.io/portfolio-challenge-/",
    },
    {
      mood: "PANIC ATTACK",
      description: "My 1st ever web developer portfolio.",
      stack: "HTML, CSS",
      role: "Developed entire application",
      caption: "PANIC ATTACK",
      github: "https://github.com/karmadog72/portfolio-challenge-",
      deployment: "https://karmadog72.github.io/portfolio-challenge-/",
    },
    {
      mood: "ANXIETY ATTACK",
      description: "My 1st ever web developer portfolio.",
      stack: "HTML, CSS",
      role: "Developed entire application",
      caption: "ANXIETY ATTACK",
      github: "https://github.com/karmadog72/portfolio-challenge-",
      deployment: "https://karmadog72.github.io/portfolio-challenge-/",
    },
    {
      mood: "SUICIDAL",
      description: "My 1st ever web developer portfolio.",
      stack: "HTML, CSS",
      role: "Developed entire application",
      caption: "SUICIDAL",
      github: "https://github.com/karmadog72/portfolio-challenge-",
      deployment: "https://karmadog72.github.io/portfolio-challenge-/",
    },
    {
      mood: "HAPPY / CONTENT",
      description: "My 1st ever web developer portfolio.",
      stack: "HTML, CSS",
      role: "Developed entire application",
      caption: " 😁 HAPPY / CONTENT ",
      github: "https://github.com/karmadog72/portfolio-challenge-",
      deployment: "https://karmadog72.github.io/portfolio-challenge-/",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [currentPhoto, setCurrentPhoto] = useState();

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section>
      <p>WHATS YOUR MOOD RIGHT NOW?</p>
      <div>
        {isModalOpen && (
          <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
        )}
      </div>
      <div className="project-row">
        {photos.map((image, i) => (
          <div className="project-img" key={i}>
            <p className="mood-name" onClick={() => toggleModal(image, i)}>
              {image.caption}
            </p>

            {/* <img
              src={require(`../../assets/projects/${i}.jpg`).default}
              alt={image.name}
            /> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MoodCard;
