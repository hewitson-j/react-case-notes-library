import React from "react";
import "./Notes.css";

function Notes({ head = "Head", body = "Body - Notes go here..." }) {
  return (
    <div className="notes-container">
      <h3>{head}</h3>
      <p>{body}</p>
    </div>
  );
}

export default Notes;
