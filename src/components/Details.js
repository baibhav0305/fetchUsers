import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid black;
  width: 25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  padding: 2rem;
`;

const Details = () => {
  const user = useSelector((state) => state.user);
  return (
    <Container>
      {user.id ? (
        <>
          <img src={user.avatar} alt="avatar" />
          <div>
            <p>{`${user.first_name} ${user.last_name}`}</p>
            <p>{user.email}</p>
          </div>
        </>
      ) : (
        <>
          <h5>Please click on any user tab for more information</h5>
        </>
      )}
    </Container>
  );
};

export default Details;
