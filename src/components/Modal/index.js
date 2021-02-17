import React from "react";

const Modal = ({
  header,
  children,
  onSubmit,
  onClose,
  firstButtonElement,
  secondButtonElement,
  isForm,
}) => {
  return (
    <div className="overlay">
      <div onClick={onClose} className="modal-close">
        ✕
      </div>
      <div className="dialog">
        <div className="header">
          <h2 className="h2 light">{header}</h2>
        </div>
        {isForm ? (
          <form onSubmit={onSubmit}>
            {children}
            <div className="footer">
              {firstButtonElement}
              {secondButtonElement}
            </div>
          </form>
        ) : (
          <>
            {children}
            <div className="footer">
              {firstButtonElement}
              {secondButtonElement}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Modal;
