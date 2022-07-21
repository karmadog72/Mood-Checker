import React from "react";

const Navbar = (props) => {
  const { setAffirmationsSelected, setHotlineSelected } = props;

  return (
    <header>
      <p>MOOD CHECKER</p>
      <nav>
        <ul>
          <li>
            <a href="#projects">
              <span onClick={() => setAffirmationsSelected(false)}>MOODS</span>
            </a>
          </li>
          <li className="mx-2">
            <a href="#affirmations">
              <span onClick={() => setAffirmationsSelected(true)}>
                AFFIRMATIONS
              </span>
            </a>
          </li>
          <li className="mx-1">
            <a href="#hotline">
              <span onClick={() => setHotlineSelected(true)}>HELP HOTLINE</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
