"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { login as registerUser } from "../../../redux/authSlice";
import { register } from "../../../services/authService";

const Register = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await register(email, password);
      localStorage.setItem("token", data.token); // Token saved in LS
      dispatch(registerUser({ token: data.token }));
      router.push("/"); // Redirect to home page
    } catch (error: any) {
      setError("Registration failed: " + error.response.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleRegister} className="w-1/3 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
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
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-300">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;