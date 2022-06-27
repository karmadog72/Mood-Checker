import React from "react";

const Modal = ({ onClose, currentPhoto }) => {
  const {
    mood,
    description,
    caption,
    solutions,
    list,
    resources,
    github,
    deployment,
    index,
  } = currentPhoto;

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <h3 className="modal-title">{mood}</h3>
        {/* <img
          src={require(`../../assets/projects/${index}.jpg`).default}
          alt={caption}
        /> */}
        <p>{description}</p>
        <p>
          SOLUTIONS - {solutions}
          <ul>
            <li>{list}</li>
            <li>{list}</li>
            <li>{list}</li>
            <li>{list}</li>
            <li>{list}</li>
          </ul>
        </p>
        <p>RESOURCES - {resources}</p>
        <a
          className="modal-button"
          target="_blank"
          href={github}
          rel="noreferrer"
        >
          GitHub Repo
        </a>
        <a
          className="modal-button"
          target="_blank"
          href={deployment}
          rel="noreferrer"
        >
          Deployed Application
        </a>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
