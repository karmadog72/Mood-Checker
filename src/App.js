import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Waves from "./assets/waves.mp4";
import MoodCard from "./components/MoodCard";
import ContactForm from "./components/ContactForm";
import Affirmations from "./components/Affirmations";
import Footer from "./components/Footer";

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [affirmationsSelected, setAffirmationsSelected] = useState(false);

  return (
    <div>
      <Navbar
        affirmationsSelected={affirmationsSelected}
        setAffirmationsSelected={setAffirmationsSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      {!affirmationsSelected ? (
        <>
          <MoodCard />
        </>
      ) : (
        <>
          <Affirmations setContactSelected={setContactSelected} />
        </>
      )}

      {contactSelected ? (
        <>
          <ContactForm setContactSelected={setContactSelected} />
        </>
      ) : (
        <></>
      )}
      <Footer />
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "20%",
          height: "225%",
          objectFit: "fill",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={Waves} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
