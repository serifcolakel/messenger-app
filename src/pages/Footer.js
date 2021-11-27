import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <h3 className="footer">created by SERİF COLAKEL</h3>
      <div className="footer">
        <a
          className="icon"
          rel="noopener noreferrer"
          href="https://github.com/serifcolakel/"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          className="icon"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/serifcolakel/"
          target="_blank"
        >
          <FaLinkedin />
        </a>
      </div>
    </>
  );
}
