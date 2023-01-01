import React from "react";
import Button from "../Button";
import "./style.css";

function LeftBox() {
  return (
    <section className="LeftBox-container">
      <h1 className="LeftBox-title">I have bad news for you</h1>
      <p className="LeftBox-paragraph">
        The page you are looking for might be removed or is temporarily
        unavailable
      </p>
      <Button>Back to homepage</Button>
    </section>
  );
}

export default LeftBox;
