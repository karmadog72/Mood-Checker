import React from "react";

const Navbar = (props) => {
  const { setMoodsSelected, setContactSelected } = props;

  return (
    <header>
      <p>MOOD CHECKER</p>
      <nav>
        <ul>
          <li className="mx-2">
            <a href="#moods">
              <span onClick={() => setMoodsSelected(true)}>MOODS</span>
            </a>
          </li>
          <li>
            <a href="#projects">
              <span onClick={() => setMoodsSelected(false)}>PROJECTS</span>
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
