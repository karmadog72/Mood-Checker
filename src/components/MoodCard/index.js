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
        "DEFINITION: In a state of general unhappiness or despondency, a mood disorder that causes a persistent feeling of sadness worthlessness, hopelessness, helplessness, pessimism, guilt and or loss of interest. If you are experiencing symptoms of depression such as: Persistent sadness, decreased energy and sleep, irritability or loss of interest in pleasurable activities, please seek help from a mental health professional. ",
      solutions:
        "While there are no quick fixes to cure depression, there are ways to help ease symptoms and boost your mood as seen below.",
      list:
        "1. Exercise - Temporarily boosts endorphins. Getting into a routine of regular exercise can help rewire the brain into more positive thinking. Yoga & Walking are a great way to start! ",
      list2:
        "2. Eating Healthy - Aim to eat fruits and veggies everyday. Foods with omega-3 fatty acids (tuna & salmon) & folic Acid (spinach & avocado) may help ease depression.",
      list3:
        "3. Sleep - Aim for 7-8 hrs each night. Make small adjustments if you struggle to sleep, such as : Going to bed & getting up around the same time each day, No Napping, No electronics in the bedroom (TV, Phone etc.). ",
      list4:
        "4. Try Something New - Listen to a new genre of music, try painting, do a puzzle, knitting, dog walking, take a cooking class, explore a new place, play a new sport.",
      list5:
        "5. Friends Family or Support group- Hang with a friend or family member. Find a support group, it can be helpful to express your feelings with relatable individuals.",
      caption: "😞 DEPRESSED",
      guide: "https://www.psychologytoday.com/us/basics/depression",
      meditate: "https://youtu.be/Sxddnugwu-8",
    },
    {
      mood: "ANXIOUS",
      description:
        "DEFINITION: Both a mental and physical state of negative expectation, experiencing worry, unease, or nervousness, feelings of dread in anticipation of some bad outcome, jitteriness & racing heart.",
      solutions:
        "Below are a few quick ways to help ease yourself when feeling anxious. If you are experiencing persistent feelings of anxiety, worry or dread, that interferes with your daily life, please seek help from a mental health professional.",
      list:
        "1. 3-3-3 RULE - The 3-3-3 rule is a mindfulness technique, name 3 things you can see, 3 sounds & move 3 different body parts.  ",
      list2:
        "2. 5-4-3-2-1 RULE - The 5-4-3-2-1 rule is a more advanced mindfulness technique, Name 5 things you can see, 4 things to touch, 3 sounds, 2 smells & 1 thing to taste.",
      list3:
        "3. Music -Listening to soothing music, or singing to your favorite song.",
      list4:
        "4. 4-7-8 Breathing - Inhale through your nose 4 seconds. Hold your breath for 7 seconds. Slowly exhale from your mouth for 8 seconds. Repeat 5- 10 times.",
      list5:
        "5. Laughter - Laughing is similar to deep breathing in its ability to increase the oxygen in our bodies. Watch a funny video, listen to a funny story from a friend or family member, goof off with your pet, read a funny comic",
      caption: "😨 ANXIOUS",
      guide: "https://www.psychologytoday.com/us/basics/anxiety",
      meditate: "https://youtu.be/TXNECaIJPDI",
    },
    // {
    //   mood: "SICK",
    //   description:
    //     "DEFINITION: Affected with disease or ill health, unwell feeling",
    //   solutions: "Script.js, CSS, HTML",
    //   list: "stuff and things",
    //   list2: "junk & stuff",
    //   list3: "stuf",
    //   list4: "sthings",
    //   list5: "stuff an",
    //   caption: "🤢 SICK",
    //   guide: "https://github.com/karmadog72/JavaScript-Password-Challenge-",
    //   meditate: "https://github.com/karmadog72/JavaScript-Password-Challenge-",
    // },

    {
      mood: "AGITATED/ RESTLESS",
      description:
        "DEFINITION: An abnormal mental state of feeling troubled, irritated, annoyed, nervous, unable to rest or relax.",
      solutions:
        "Below are a few quick ways to help ease your agitation and or feelings of restlessness. If you are experiencing persistent feelings of agitation & restlessness, that interferes with your daily life, please seek help from a mental health professional.",
      list:
        "1. Learn to relax - try meditation, breathing exercises, gentle exercise like yoga or walking in nature & Progressive Muscle Relaxation.",
      list2:
        "2. Reframe negative thoughts. - Realize that not everything that is happening around you has anything to do with you. Instead, understand that things happen and you cant always control their outcome. Try to think of something more pleasant than the current situation surrounding you. ",
      list3:
        "3. Chew Gum. - Chewing gum may help relieve stress. It helps people feel less anxious & stressed an improved their focus and attention.",
      list4:
        "4. Take a Break. - Step away from your current situation and do something pleasant to help recharge your batteries. Listening to music, watching a funny video short on youtube, or even quick walk are all great examples.",
      list5:
        "5. Friend or Family - Talk to a friend or family member about any increasing feelings of agitation or restlessness, as they may be able to help ease your situation. ",
      caption: "😫 UNEASY / AGITATED",
      guide:
        "https://www.psychologytoday.com/us/blog/troubles-in-mind/201104/agitation-situation#:~:text=Agitation%20refers%20to%20an%20abnormal,mentally%2C%20and%20is%20emotionally%20volatile.",
      meditate: "https://youtu.be/ClqPtWzozXs",
    },
    {
      mood: "STRESSED / OVERWHELMED",
      description:
        "DEFINITION: Experiencing mental or emotional strain or tension; an overpowering or excessive amount of anything:",
      solutions:
        "Below are a few quick ways to help you feel less overwhelmed and stressed. If you are frequently feeling overwhelmed and or stressed, so much that it interferes with your daily life, please seek help from a mental health professional.",
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
      list:
        "1. Activate the Mammalian Dive Response - Submerging your face (or forehead) in a bowl of cold water, for up to 30 seconds. This tricks your brain into thinking you're diving under water and activates your parasympathetic nervous system (PNS), effectively slowing down your heart rate. This can be very helpful when having a panic attack and your heart is racing.",
      list2:
        "Bilateral stimulation, or side-to-side stimulation, is a technique used in EMDR therapy that can help to induce a relaxation response. Sophia V., 26, who has OCD and anxiety, says she’s had success by tapping her hands on opposite shoulders in an alternating pattern. You can tap alternate arms or legs as well.",
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
