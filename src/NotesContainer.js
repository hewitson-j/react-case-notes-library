import React from "react";
import Notes from "./Notes";
import "./NotesContainer.css";

function NotesContainer() {
  return (
    <div className="container-body">
      <h3>Make a selection and the Notes will appear here!</h3>
      <div className="notes-container">
        <div className="row">
          {/* <Notes className="notes"></Notes>
          <Notes className="notes"></Notes>
          <Notes className="notes"></Notes> */}
        </div>
      </div>
    </div>
  );
}

export default NotesContainer;
