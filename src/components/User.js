import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { handleUser } from "../state";
import styled from "styled-components";

const Wrapper = styled.button`
  width: 8rem;
  padding: 1.5rem;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  background-color: aliceblue;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  &:hover {
    cursor: pointer;
    background-color: rgb(71, 170, 218);
  }
`;

const User = ({ user }) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    const response = await axios.get(`https://reqres.in/api/users/${user.id}`);
    // console.log(response.data.data);
    dispatch(handleUser({ user: response.data.data }));
  };

  return <Wrapper onClick={handleClick}>User: {user.id}</Wrapper>;
};

export default User;
