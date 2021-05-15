/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState } from "react";
import { firestore } from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { timestamp } from "../../firebase/firestore";
import ItemTile from "../ItemTile";
import Modal from "../Modal";
import { ModalContext } from "../../contexts/ModalContext";
import { signOut } from "../../firebase/auth";

const HomePage = ({ user }) => {
  const {
    isModalOpen,
    openModal,
    closeModal,
    isOptionsModalOpen,
    openOptionsModal,
    closeOptionsModal,
  } = useContext(ModalContext);
  const [content, setContent] = useState("");
  const [isPriority, setIsPriority] = useState(false);
  
  const handleContent = (e) => setContent(e.target.value);
  
  const itemRef = firestore.collection("items");
  const query = itemRef.orderBy("createdAt");
  const [items] = useCollectionData(query, { idField: "id" });

  const addItem = async (e) => {
    e.preventDefault();
    await itemRef
      .add({
        createdAt: timestamp,
        content: content,
        priority: isPriority,
        createdBy: user.displayName,
        owner: user.uid,
      })
      .then(() => setContent(""))
      .catch((error) => alert(error))
      .finally(() => closeModal());
  }

  return (
    <>
      <div className="item-container">
        {items &&
          items.map((item) => {
            return <ItemTile item={item} key={item.id} />;
          })}
      </div>
      <button onClick={openOptionsModal} className="sign-out-button">
        <svg width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
          <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646l.087.065-.087-.065z" />
        </svg>
      </button>
      <button onClick={openModal} className="new-item-button">
        <svg width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </button>

      {isModalOpen && (
        <Modal
          header="🔥 New item"
          onSubmit={addItem}
          isForm="true"
          onClose={closeModal}
          firstButtonElement={
            <button type="submit" className="save-button">
              Save
            </button>
          }
          secondButtonElement={
            <button type="button" className="close-button" onClick={closeModal}>
              Close
            </button>
          }
        >
          <input
            className="modal-input"
            inputMode="text"
            enterKeyHint="done"
            type="text"
            value={content}
            onChange={handleContent}
          />

          <div
            style={{
              display: `flex`,
              margin: `3rem auto 2rem auto`,
              alignItems: `center`,
            }}
          >
            <input
              type="checkbox"
              name="is-private"
              onChange={() => setIsPriority(!isPriority)}
              value={isPriority}
              checked={isPriority}
            />
            <h3 className="check-button-text">High priority</h3>
          </div>
        </Modal>
      )}

      {isOptionsModalOpen && (
        <Modal
          header="⚙️ Menu"
          onSubmit={addItem}
          isForm="false"
          onClose={closeOptionsModal}
          firstButtonElement={
            <button type="button" onClick={signOut} className="signout-button">
              Sign out
            </button>
          }
          secondButtonElement={
            <button
              type="button"
              className="close-button"
              onClick={closeOptionsModal}
            >
              Close
            </button>
          }
        >
          <div
            style={{
              display: `flex`,
              flexDirection: `column`,
              margin: `3rem auto 2rem auto`,
              alignItems: `center`,
            }}
          >
            <h3 className="email-text">
              <small>Welcome,</small>
            </h3>
            <h3 className="email-text">
              <b>{user.displayName}!</b>
            </h3>
            <br />
            <h3 className="email-text">
              <small>Email:</small>
            </h3>
            <h3 className="email-text">
              <b>{user.email}</b>
            </h3>
          </div>
        </Modal>
      )}
    </>
  );
};

export default HomePage;
