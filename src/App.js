import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Waves from "./assets/waves.mp4";
import MoodCard from "./components/MoodCard";
import Hotline from "./components/Hotline";
import Affirmations from "./components/Affirmations";
import Footer from "./components/Footer";

function App() {
  const [hotlineSelected, setHotlineSelected] = useState(false);
  const [affirmationsSelected, setAffirmationsSelected] = useState(false);

  return (
    <div>
      <Navbar
        affirmationsSelected={affirmationsSelected}
        setAffirmationsSelected={setAffirmationsSelected}
        hotlineSelected={hotlineSelected}
        setHotlineSelected={setHotlineSelected}
      />
      {!affirmationsSelected ? (
        <>
          <MoodCard />
        </>
      ) : (
        <>
          <Affirmations setHotlineSelected={setHotlineSelected} />
        </>
      )}

      {hotlineSelected ? (
        <>
          <Hotline setHotlineSelected={setHotlineSelected} />
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
