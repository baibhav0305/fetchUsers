import React from "react";
import Details from "../components/Details";
import UserList from "../components/UserList";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { reset } from "../state";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const Home = () => {
  const dispatch = useDispatch();

  const handleResetUser = () => {
    dispatch(reset());
  };

  return (
    <Wrapper>
      <Details />
      <button
        onClick={handleResetUser}
        style={{
          padding: "0.5rem",
          borderRadius: "0.25rem",
          border: "1px solid black",
          cursor: "pointer",
        }}
      >
        RESET
      </button>
      <UserList />
    </Wrapper>
  );
};

export default Home;
