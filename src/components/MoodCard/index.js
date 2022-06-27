import React, { useState } from "react";
import Modal from "../Modal/index";

const MoodCard = () => {
  const photos = [
    {
      mood: "ANGRY",
      description:
        "DEFINITION: Feeling or showing strong annoyance, displeasure, or hostility; full of anger.",
      solutions:
        "Count down from 100 | Breathe 3-9-6/ Breathe in through your nose for 3 counts, hold for 9 counts, exhale through mouth 9 counts.) | Take a timeout, typically in a quite space away from others. | Call a trusted friend or family member, to help provide a new perspective | Take a walk ",
      list: "stuff and things",
      list2: "junk & stuff",
      list3: "stuf",
      list4: "sthings",
      list5: "stuff an",
      resources: "ReactJS, MySelect-React, CSS, Debugging",
      caption: "😡 ANGRY",
      github: "https://github.com/karmadog72/Syntax",
      deployment: "https://syntax-uofu.herokuapp.com",
    },
    {
      mood: "SAD",
      description:
        "DEFINITION: Feeling down or unhappy in response to grief, discouragement, or disappointment",
      solutions:
        "HTML CSS JavaScript and CSS library 'Bulma'. 'Jquery' was also used for a JavaScript library along side that, MomentJs was included to help with time. Finally we included 2 API's. 1 being a COVID API to keep the user updated with the current active cases in the US. The other API is a weather so that the user can have the ease of checking the weather on the landing page.",
      list: "stuff and things",
      list2: "junk & stuff",
      list3: "stuf",
      list4: "sthings",
      list5: "stuff an",
      resources:
        "HTML, Bulma, MomentJs, COVID API . (Footer & Medication Schedule page)",
      caption: "😢 SAD",
      github: "https://github.com/karmadog72/AL-together",
      deployment:
        "https://lannylopez.github.io/AL-together/secondary-pages/meds.html",
    },
    {
      mood: "DEPRESSED",
      description:
        "DEFINITION: In a state of general unhappiness or despondency,a mood disorder that causes a persistent feeling of sadness and loss of interest. ",
      solutions:
        "Node, Express, Handlebars, MySQL, Rapid API-Spoonacular, Sequelize, Heroku.",
      list: "stuff and things",
      list2: "junk & stuff",
      list3: "stuf",
      list4: "sthings",
      list5: "stuff an",
      resources: "Handlebars & CSS",
      caption: "😞 DEPRESSED",
      github: "https://github.com/karmadog72/Allergy-Finder",
      deployment: "https://whispering-chamber-78611.herokuapp.com/",
    },
    {
      mood: "ANXIOUS",
      description:
        "DEFINITION: Experiencing worry, unease, or nervousness, typically about an imminent event or something with an uncertain outcome.",
      solutions: "3-3-3 RULE",
      list: "stuff and things",
      list2: "junk & stuff",
      list3: "stuf",
      list4: "sthings",
      list5: "stuff an",
      resources: "Developed entire application",
      caption: "😨 ANXIOUS",
      github: "https://github.com/karmadog72/CMS-BLOG",
      deployment: "https://murmuring-meadow-54235.herokuapp.com/",
    },
    {
      mood: "SICK",
      description:
        "DEFINITION: Affected with disease or ill health, unwell feeling",
      solutions: "Script.js, CSS, HTML",
      list: "stuff and things",
      list2: "junk & stuff",
      list3: "stuf",
      list4: "sthings",
      list5: "stuff an",
      resources: "Developed entire application",
      caption: "🤢 SICK",
      github: "https://github.com/karmadog72/JavaScript-Password-Challenge-",
      deployment:
        "https://github.com/karmadog72/JavaScript-Password-Challenge-",
    },

    {
      mood: "UNEASY / AGITATED",
      description:
        "DEFINITION: Causing or feeling anxiety or nervousness; troubled or uncomfortable.",
      solutions: "HTML, CSS",
      list: "stuff and things",
      list2: "junk & stuff",
      list3: "stuf",
      list4: "sthings",
      list5: "stuff an",
      resources: "Developed entire application",
      caption: "☹️ UNEASY / AGITATED",
      github: "https://github.com/karmadog72/portfolio-challenge-",
      deployment: "https://karmadog72.github.io/portfolio-challenge-/",
    },
    {
      mood: "STRESSED / OVERWHELMED",
      description:
        "DEFINITION: Experiencing mental or emotional strain or tension; an overpowering or excessive amount of anything:",
      solutions: "HTML, CSS",
      list: "stuff and things",
      list2: "junk & stuff",
      list3: "stuf",
      list4: "sthings",
      list5: "stuff an",
      resources: "Developed entire application",
      caption: "😖 STRESSED / OVERWHELMED",
      github: "https://github.com/karmadog72/portfolio-challenge-",
      deployment: "https://karmadog72.github.io/portfolio-challenge-/",
    },
    {
      mood: "PANIC ATTACK",
      description:
        "DEFINITION: Is a sudden episode of intense fear that triggers severe physical reactions when there is no real danger or apparent cause. Can cause increased heart rate, shortness of breath, trembling and muscle tension. ",
      solutions: "HTML, CSS",
      list: "stuff and things",
      list2: "junk & stuff",
      list3: "stuf",
      list4: "sthings",
      list5: "stuff an",
      resources: "Developed entire application",
      caption: "😱 PANIC ATTACK",
      github: "https://github.com/karmadog72/portfolio-challenge-",
      deployment: "https://karmadog72.github.io/portfolio-challenge-/",
    },
    {
      mood: "ANXIETY ATTACK",
      description:
        "DEFINITION: An anxiety attack is a sudden and intense episode of fear and anxiety. These anxiety attacks can sometimes occur unexpectedly for no apparent reason, but they can also be linked to specific triggers.",
      solutions: "HTML, CSS",
      list: "stuff and things",
      list2: "junk & stuff",
      list3: "stuf",
      list4: "sthings",
      list5: "stuff an",
      resources: "Developed entire application",
      caption: "😵‍💫 ANXIETY ATTACK",
      github: "https://github.com/karmadog72/portfolio-challenge-",
      deployment: "https://karmadog72.github.io/portfolio-challenge-/",
    },
    {
      mood: "SUICIDAL",
      description:
        "DEFINITION: Thinking about or planning suicide; Deeply unhappy or depressed and likely to commit suicide.",
      solutions: "HTML, CSS",
      list: "stuff and things",
      list2: "junk & stuff",
      list3: "stuf",
      list4: "sthings",
      list5: "stuff an",
      resources: "Developed entire application",
      caption: "💀 SUICIDAL",
      github: "https://github.com/karmadog72/portfolio-challenge-",
      deployment: "https://karmadog72.github.io/portfolio-challenge-/",
    },
    {
      mood: "HAPPY / CONTENT",
      description:
        "DEFINITION: Feeling or showing pleasure or contentment; A state of satisfaction.",
      solutions: "HTML, CSS",
      list: "stuff and things",
      list2: "junk & stuff",
      list3: "stuf",
      list4: "sthings",
      list5: "stuff an",
      resources: "Developed entire application",
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
      <p className="mood-header">WHATS YOUR MOOD RIGHT NOW?</p>
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
