import React from "react";
import "./Notes.css";

function Notes({ head = "Head", body = "Body - Notes go here..." }) {
  return (
    <div
      className="notes-container col "
      onClick={() => {
        // Copy the text inside the text field
        navigator.clipboard.writeText(body);

        // Alert the copied text
        alert("Copied the text: " + body);
      }}
    >
      <h5>{head}</h5>
      <p>{body}</p>
    </div>
  );
}

export default Notes;
