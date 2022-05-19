import React from "react";

const Navbar = (props) => {
  const { setAboutSelected, setContactSelected } = props;

  return (
    <header>
      <p>DANIKA PEARSON</p>
      <nav>
        <ul>
          <li className="mx-2">
            <a href="#about">
              <span onClick={() => setAboutSelected(true)}>ABOUT</span>
            </a>
          </li>
          <li>
            <a href="#projects">
              <span onClick={() => setAboutSelected(false)}>PROJECTS</span>
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
