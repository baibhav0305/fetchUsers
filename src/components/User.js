import React from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../state";
import styled from "styled-components";

const Wrapper = styled.button`
  width: 8rem;
  padding: 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  background-color: aliceblue;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  &:hover {
    cursor: pointer;
    background-color: rgb(71, 170, 218);
    box-shadow: rgba(0, 0, 0, 0.4) 0px 4px 12px;
  }
`;

const User = ({ user }) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(getUser(user.id));
  };

  return <Wrapper onClick={handleClick}>User: {user.id}</Wrapper>;
};

export default User;
