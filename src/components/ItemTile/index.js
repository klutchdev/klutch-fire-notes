/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { firestore } from "../../firebase";
import Checkbox from "../Checkbox";

const ItemTile = ({ item }) => {
  const [completed, setCompleted] = useState(false);

  const deleteCompleted = async () => {
    if (completed === true) {
      setTimeout(async () => {
        await firestore
          .collection("items")
          .doc(item.id)
          .delete()
          .catch((error) => alert(error));
      }, 3000);
    }
  };

  useEffect(() => {
    deleteCompleted();
  }, [completed]);

  return (
    <div onClick={() => setCompleted(!completed)} className="item-tile">
      <Checkbox completed={completed} />
      <CenterContent content={item.content} completed={completed} />
    </div>
  );
};

const CenterContent = ({ completed, content }) => {
  return (
    <div className={completed ? "center-content-completed" : "center-content"}>
      <h2>{content}</h2>
    </div>
  );
};

export default ItemTile;
