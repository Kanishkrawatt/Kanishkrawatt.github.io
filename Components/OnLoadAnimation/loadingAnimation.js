import Lottie from "react-lottie";
import styled from "styled-components";
import animationData from "./animationConfig.json";

const Options = {
  loop: true,
  autoplay: true,
  name: "Loading Animation",
  render: "svg",
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #9ed2c6;
`;

const OnLoadAnimation = () => {
  return (
    <Container>
      <Lottie options={Options} width="13rem" height="13rem" />
    </Container>
  );
};

export default OnLoadAnimation;
