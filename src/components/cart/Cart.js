import React from "react";

const Modal = (props) => {
  const { closeModal } = props;

  return (
    <div className="overlay">
      <div className="content">
        <span onClick={closeModal} className="close">
          &times;
        </span>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
