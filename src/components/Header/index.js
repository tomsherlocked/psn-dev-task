import React from "react";
import headerImage from "./header.png";

export default function Header() {
  return (
    <header>
      <a href="/">
        <img src={headerImage} alt="static header img" />
      </a>
    </header>
  );
}
