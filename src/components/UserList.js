import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../state";
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
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(getAllUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      {isLoading && <h4>Loading ...</h4>}
      {!isLoading && users.map((user) => <User key={user.id} user={user} />)}
    </Wrapper>
  );
};

export default UserList;
