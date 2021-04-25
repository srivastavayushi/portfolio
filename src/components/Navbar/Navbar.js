import React from "react";
import styled from "styled-components";

export default function Navbar() {
  return (
    <NavBar>
      <nav className="navbar navbar-expand-lg mx-5 mt-3">
        <a className="navbar-brand ml-5" href="/">
          A
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item mx-2">
              <a className="nav-link" href="/">
                <span className="number">01.</span> About
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="/">
                <span className="number">02.</span> Experience
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="/">
                <span className="number">03.</span> Work
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="/">
                <span className="number">04.</span> Contact
              </a>
            </li>
            <li className="nav-item mx-2 mr-5 border rounded">
              <a
                className="nav-link"
                href="/"
                style={{ color: "var(--green)" }}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </NavBar>
  );
}

const NavBar = styled.div`
  font-family: "Fira Code", monospace;
  font-family: "Fira Mono", monospace;
  font-size: 14px;

  a {
    color: #ccd7f6;
  }
  .number {
    color: #64ffda;
  }
  .border {
    border-color: #64ffda;
  }
`;
