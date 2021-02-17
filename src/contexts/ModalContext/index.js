import React, { createContext } from "react";
import useModal from "../../hooks/useModal";
import useOptionsModal from "../../hooks/useOptionsModal";

export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const {
    isOptionsModalOpen,
    openOptionsModal,
    closeOptionsModal,
  } = useOptionsModal();

  return (
    <>
      <ModalContext.Provider
        value={{
          isModalOpen,
          openModal,
          closeModal,
          isOptionsModalOpen,
          openOptionsModal,
          closeOptionsModal,
        }}
      >
        {children}
      </ModalContext.Provider>
    </>
  );
};

export default ModalContextProvider;
