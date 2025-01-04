import axios from "axios";

export const login = async (email: string, password: string) => {
  const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
  if (response.status !== 200) {
    throw new Error("Login failed");
  }
  return response.data;
};

export const register = async (email: string, password: string) => {
  const response = await axios.post("http://localhost:5000/api/auth/register", { email, password });
  if (response.status !== 200) {
    throw new Error("Registration failed");
  }
  return response.data;
};
