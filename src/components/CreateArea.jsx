import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [inputNote, setInputNote] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setIsExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setInputNote((preNote) => {
      return {
        ...preNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.callAddNote(inputNote);

    setInputNote({ title: "", content: "" });

    event.preventDefault();
  }

  function expand() {
    setIsExpanded(true)
  }

  return (
    <div>
      <form className="create-note">

        {/* Used ternary operator below to show the input field only when user clicks on the "textarea" field */}
        {isExpanded ? <input
          name="title"
          onChange={handleChange}
          value={inputNote.title}
          placeholder="Title"
        /> : null}

        <textarea
          name="content"
          onChange={handleChange}
          onClick={expand}
          value={inputNote.content}
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
        />

        {/* Used "Zoom" component (as below) to create a zoom in effect when website loads or refreshes when the "in" props is set to "true" */}
        <Zoom in={isExpanded}>
          {/* Used "Fab" component (as below) to create an effect of Floating Action Button */}
          <Fab onClick={submitNote}>
            {/* Used "AddIcon" component from the material ui package to display a "+" icon */}
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
