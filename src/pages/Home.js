import React from "react";
import Details from "../components/Details";
import UserList from "../components/UserList";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;

const Home = () => {
  return (
    <Wrapper>
      <Details />
      <UserList />
    </Wrapper>
  );
};

export default Home;
