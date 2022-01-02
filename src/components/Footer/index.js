import React from "react";
import footerImage from "./footer.png";

export default function Footer() {
  return (
    <footer>
      <a href="/">
        <img src={footerImage} alt="static footer img" />
      </a>
    </footer>
  );
}
