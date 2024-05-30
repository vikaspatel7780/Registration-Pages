import React, { useState,useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const navigate =useNavigate()
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPass) {
      toast.error("Passwords do not match");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
  
      // Log the status and response body for debugging
      const responseBody = await response.json();
      if (responseBody) localStorage.setItem("user", JSON.stringify(responseBody));
      navigate("/");
      if (!response.ok) {
        if (responseBody.error && responseBody.error.includes('duplicate key error')) {
          alert("Duplicate key error:", responseBody.error);
          toast.error("Username is already taken");
        } else {
          throw new Error(responseBody.message || "Network response was not ok");
        }
      } else {
        console.log("Success:", responseBody);
        toast.success("User registered successfully");
      }
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      toast.error(`Error: ${error.message}`);
    }
  };
  

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-8 text-center">Sign Up</h2>
        <form className="space-y-4" onSubmit={submitHandler}>
          <div>
            <label className="block mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-4"
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              value={email}
              autoComplete="username"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-4"
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              value={password}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-4"
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="password">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPass}
              autoComplete="new-password"
              onChange={(e) => setConfirmPass(e.target.value)}
              className="w-full border border-gray-300 rounded-md py-2 px-4"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-4 flex justify-center">
          <Link to="/login">
            <p className="text-blue-500">Login</p>
          </Link>
          <span className="mx-2">|</span>
          <Link to="/forgot">
            <p className="text-blue-500">Forgot password</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
