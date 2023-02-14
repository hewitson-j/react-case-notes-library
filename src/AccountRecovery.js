import React from "react";
import Notes from "./Notes";
import "./AccountRecovery.css";

function AccountRecovery() {
  return (
    <div id="account-recovery-body">
      <div className="row ar-row">
        <Notes />
        <Notes />
        <Notes />
        <Notes />
      </div>
      <div className="row ar-row">
        <Notes className="item" />
        <Notes className="item" />
        <Notes className="item" />
        <Notes className="item" />
      </div>
    </div>
  );
}

export default AccountRecovery;
