// src/components/Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "30px 20px",
        backgroundColor: "#111",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <a
          href="mailto:hermantorayyan@gmail.com"
          style={{ margin: "0 10px", color: "#fff" }}
        >
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </a>
        <a
          href="https://github.com/RayyanHermanto"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px", color: "#fff" }}
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          href="https://www.linkedin.com/in/rayyan-hermanto/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px", color: "#fff" }}
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/her.man.too/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: "0 10px", color: "#fff" }}
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>

      <div style={{ fontSize: "14px", opacity: 0.6 }}>
        &copy; {new Date().getFullYear()} Rayyan Hermanto. All rights reserved.
      </div>
    </footer>
  );
}
