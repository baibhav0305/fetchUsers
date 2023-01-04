import React from "react";
import Home from "./pages/Home";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 2rem 10%;
`;

const App = () => {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
};

export default App;
