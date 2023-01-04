import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  users: [],
  user: {},
  isError: false,
  isLoading: false,
  isSuccess: false,
};

export const getAllUsers = createAsyncThunk(
  "user/getAllUsers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("https://reqres.in/api/users");
      return response.data.data;
    } catch (error) {
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getUser = createAsyncThunk(
  "user/getUser",
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(`https://reqres.in/api/users/${userId}`);
      return response.data.data;
    } catch (error) {
      console.log(error);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state) => {
      state.user = {};
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.users = action.payload;
      })
      .addCase(getAllUsers.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { reset } = authSlice.actions;

export default authSlice.reducer;
