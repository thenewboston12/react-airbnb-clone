import React from "react";
import airLogo from "../images/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav>
      <img src={airLogo} className="nav--logo" />
    </nav>
  );
}
