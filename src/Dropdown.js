import React from "react";
import "./Dropdown.css";

function Dropdown() {
  return (
    <>
      <label>Select a Case Type:</label>
      <br></br>
      <select onChange={() => console.log("Clicked.")} id="dropdown-box">
        <option value={"none"} selected>
          Select...
        </option>
        <option value={"account-recovery"}>Account Recovery</option>
        <option value={"mfa"}>MFA Setup/Reset</option>
        <option value={"networking"}>Networking</option>
        <option value={"provisioning"}>Provisioning</option>
      </select>
    </>
  );
}

export default Dropdown;
