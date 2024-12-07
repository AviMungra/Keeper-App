import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  function handleClick() {
    props.callDeleteNote(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        {/* Used "DeleteIcon" component from the material ui package to display a delete icon as below: */}
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
