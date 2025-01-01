import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
    },
    register: (state, action) => {
      state.token = action.payload.token;
    },
  },
});

export const { login, register } = authSlice.actions;
export default authSlice.reducer;
