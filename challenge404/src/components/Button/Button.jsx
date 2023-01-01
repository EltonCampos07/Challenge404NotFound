import React from "react";
import "./style.css"

function Button({ children }) {
  return <button className="btn-backToHomepage"><span>{children}</span></button>;
}

export default Button;
