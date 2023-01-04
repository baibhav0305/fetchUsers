import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleUserList } from "../state";
import User from "./User";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 3rem;
`;

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const getUsers = async () => {
    const response = await axios.get("https://reqres.in/api/users");
    dispatch(handleUserList({ users: response.data.data }));
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </Wrapper>
  );
};

export default UserList;
