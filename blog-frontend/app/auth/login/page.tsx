"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { login as loginUser } from "../../../redux/authSlice";
import { login } from "../../../services/authService";
import Link from "next/link";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      dispatch(loginUser({ token: data.token }));
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleLogin} className="w-1/3 p-6 bg-white rounded-lg shadow-lg">
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
          Login
        </button>
        <Link href="/auth/register" legacyBehavior>
          <a>Don't have an account? Register</a>
        </Link>
      </form>
    </div>
  );
};

export default Login;