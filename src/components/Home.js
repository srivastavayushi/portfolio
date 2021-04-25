import React from "react";
import styled from "styled-components";

export default function Home() {
  return (
    <HomeComp
      className="container border border-success"
      style={{ paddingTop: "7rem" }}
    >
      <div className="py-auto">
        <div className="initial">Hi, my name is</div>
        <div className="middle font-weight-bold">
          Ayushi Srivastava.
          <br />
          <span className="light">I build things for the web.</span>
        </div>
        <div className="final py-3">
          {" "}
          I'm a Boston-based software engineer who specializes in building (and
          occasionally designing) exceptional digital experiences. Currently,
          I'm an engineer at{" "}
          <span style={{ color: "var(--green)" }}>Upstatement</span> focused on
          building accessible, human-centered products.
        </div>
        <button type="button" className="btn mt-5 p-3 btn-lg">
          Get in touch
        </button>
      </div>
    </HomeComp>
  );
}

const HomeComp = styled.div`
  height: 80vh;
  overflow: hidden;

  .initial {
    color: var(--green);
    font: 16px;
    font-family: "Fira Mono", monospace;
  }
  .middle {
    color: #ccd7f6;
    font-size: 4rem;
  }
  .light {
    color: var(--grey);
  }
  .final {
    color: var(--grey);
    max-width: 45%;
  }
  .btn {
    border: 1px white solid;
    color: var(--green);
    border-color: var(--green);
    font-family: "Fira Mono", monospace;
    font-size: 16px;
  }
`;
