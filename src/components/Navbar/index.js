import React from "react";

const Navbar = (props) => {
  const { setAffirmationsSelected, setContactSelected } = props;

  return (
    <header>
      <p>MOOD CHECKER</p>
      <nav>
        <ul>
          <li className="mx-2">
            <a href="#affirmations">
              <span onClick={() => setAffirmationsSelected(true)}>
                AFFIRMATIONS
              </span>
            </a>
          </li>
          <li>
            <a href="#projects">
              <span onClick={() => setAffirmationsSelected(false)}>MOODS</span>
            </a>
          </li>

          <li className="mx-1">
            <a href="#contact">
              <span onClick={() => setContactSelected(true)}>RESUME</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
