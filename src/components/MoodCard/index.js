import React, { useState } from "react";
import Modal from "../Modal/index";

const MoodCard = () => {
  const photos = [
    {
      mood: "ANGRY",
      description:
        "DEFINITION: Feeling or showing strong annoyance, displeasure, or hostility; full of anger.",
      solutions:
        "Below are a few quick ways to help calm you down when you're feeling anger. If you are experiencing ongoing anger and or struggle to maintain a sense of calm consistently, please seek help from a mental health professional.",
      list: "1. Count down from 100",
      list2: "2. Take a walk",
      list3:
        "3. Call a trusted friend or family member, to help provide a new perspective ",
      list4: "4. Take a timeout, typically in a quite space away from others.",
      list5:
        "5. Breathe 3-9-6/ Breathe in through your nose for 3 counts, hold for 9 counts, exhale through mouth 9 counts.)",
      caption: "😡 ANGRY",
      guide:
        "https://www.psychologytoday.com/us/blog/click-here-happiness/202104/managing-anger-tips-techniques-and-tools",
      meditate: "https://youtu.be/oMLUcL__KI8",
    },
    {
      mood: "SAD",
      description:
        "DEFINITION: Feeling down or unhappy in response to grief, discouragement, or disappointment. If you are experiencing ongoing sadness that you just cant seem to shake, or struggle to maintain a sense of happy or contentment, please seek help from a mental health professional.",
      solutions:
        "Below are a few quick ways to help you ease your feelings of sadness.",
      list:
        "1. Cry it out - Studies show that crying may have a relaxing effect, by releasing 'feel-good' endorphins.",
      list2:
        "2. Listen to music - Choose music that you find beautiful or uplifting, such as classical.",
      list3:
        "3. Take a warm bath / shower - Warmth has a comforting effect on the body. ",
      list4: "4. Write down your feelings in a journal or diary ",
      list5: "5. Hang out with an upbeat family member, friend or even a pet.",
      caption: "😢 SAD",
      guide:
        "https://www.psychologytoday.com/us/blog/click-here-happiness/202011/how-deal-sad-feelings",
      meditate: "https://youtu.be/ug26l-2ktxA",
    },
    {
      mood: "DEPRESSED",
      description:
        "DEFINITION: In a state of general unhappiness or despondency,a mood disorder that causes a persistent feeling of sadness worthlessness, hopelessness, helplessness, pessimism, guilt and or loss of interest. ",
      solutions:
        "Node, Express, Handlebars, MySQL, Rapid API-Spoonacular, Sequelize, Heroku.",
      list: "stuff and things",
      list2: "junk & stuff",
      list3: "stuf",
      list4: "sthings",
      list5: "stuff an",
      caption: "😞 DEPRESSED",
      guide: "https://www.psychologytoday.com/us/basics/depression",
      meditate: "https://youtu.be/xRxT9cOKiM8",
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
      caption: "😨 ANXIOUS",
      guide: "https://github.com/karmadog72/CMS-BLOG",
      meditate: "https://murmuring-meadow-54235.herokuapp.com/",
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
      caption: "🤢 SICK",
      guide: "https://github.com/karmadog72/JavaScript-Password-Challenge-",
      meditate: "https://github.com/karmadog72/JavaScript-Password-Challenge-",
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
      caption: "☹️ UNEASY / AGITATED",
      guide: "https://github.com/karmadog72/portfolio-challenge-",
      meditate: "https://karmadog72.github.io/portfolio-challenge-/",
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
      caption: "😖 STRESSED / OVERWHELMED",
      guide: "https://github.com/karmadog72/portfolio-challenge-",
      meditate: "https://karmadog72.github.io/portfolio-challenge-/",
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
      caption: "😱 PANIC ATTACK",
      guide: "https://github.com/karmadog72/portfolio-challenge-",
      meditate: "https://karmadog72.github.io/portfolio-challenge-/",
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
      caption: "😵‍💫 ANXIETY ATTACK",
      guide: "https://github.com/karmadog72/portfolio-challenge-",
      meditate: "https://karmadog72.github.io/portfolio-challenge-/",
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
      caption: "💀 SUICIDAL",
      guide: "https://github.com/karmadog72/portfolio-challenge-",
      meditate: "https://karmadog72.github.io/portfolio-challenge-/",
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
      caption: " 😁 HAPPY / CONTENT ",
      guide: "https://github.com/karmadog72/portfolio-challenge-",
      meditate: "https://karmadog72.github.io/portfolio-challenge-/",
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
