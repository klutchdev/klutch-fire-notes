import { useState } from "react";

const useOptionsModal = () => {
  const [isOptionsModalOpen, setOptionsModalOpen] = useState(false);
  const openOptionsModal = () => setOptionsModalOpen(true);
  const closeOptionsModal = () => setOptionsModalOpen(false);

  return { isOptionsModalOpen, openOptionsModal, closeOptionsModal };
};

export default useOptionsModal;
