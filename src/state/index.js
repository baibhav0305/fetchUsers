import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  user: {},
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleUserList: (state, action) => {
      state.users = action.payload.users;
    },
    handleUser: (state, action) => {
      state.user = action.payload.user;
    },
  },
});

export const { handleUserList, handleUser } = authSlice.actions;

export default authSlice.reducer;
