import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import girlCoder from "../lotties/girl-coder.json";

export default function Intro() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: girlCoder,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Introduction>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here',
      </p>
      <Lottie options={defaultOptions} height={400} width={400} />
    </Introduction>
  );
}

const Introduction = styled.div`
  Lottie {
    border: 2px solid black;
  }
`;
