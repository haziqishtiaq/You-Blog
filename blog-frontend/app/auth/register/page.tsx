"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { register as registerUser } from "../../../redux/authSlice";
import { register } from "../../../services/authService";

const Register = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await register(email, password);
      dispatch(registerUser({ token: data.token }));
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleRegister} className="w-1/3 p-6 bg-white rounded-lg shadow-lg">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;