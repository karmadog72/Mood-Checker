import React from "react";

const Modal = ({ onClose, currentPhoto }) => {
  const {
    mood,
    description,
    caption,
    solutions,
    list,
    list2,
    list3,
    list4,
    list5,
    guide,
    meditate,
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
          QUICK SOLUTIONS: {solutions}
          <ul>
            <li>{list}</li>
            <li>{list2}</li>
            <li>{list3}</li>
            <li>{list4}</li>
            <li>{list5}</li>
          </ul>
        </p>
        <a
          className="modal-button"
          target="_blank"
          href={guide}
          rel="noreferrer"
        >
          Resources
        </a>
        <a
          className="modal-button"
          target="_blank"
          href={meditate}
          rel="noreferrer"
        >
          Meditation
        </a>
        <button type="button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
