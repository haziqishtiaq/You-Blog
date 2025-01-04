import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export const initializeStore = () => {
  const token = localStorage.getItem("token");
  if (token) {
    store.dispatch({ type: "auth/login", payload: { token } });
  }
};

export default store;