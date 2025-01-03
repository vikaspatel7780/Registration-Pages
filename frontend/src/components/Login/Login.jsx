import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) navigate("/");
  }, []); // Empty dependency array to run once on mount

  const submitHandler = async (e) => {
    e.preventDefault();
    console.warn(email, password);
    let result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "content-Type": "application/json",
      },
    });
    
    result = await result.json();
    console.log(result);

    if (result.username) {
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/");
      toast.success("Logged in Successfully");
    } else {
      alert("Please enter correct details");
      toast.error("Login Failed");
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
        <form className="space-y-4" onSubmit={submitHandler}>
          <div>
            <label className="block mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              value={email}
              autoComplete="username"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="w-full border border-gray-300 rounded-md py-2 px-4"
            />
          </div>
          <div>
            <label className="block mb-2" htmlFor="email">
              Password
            </label>
            <input
              type="password"
              value={password}
              className="w-full border border-gray-300 rounded-md py-2 px-4"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4 flex justify-center">
          <Link to="/signup">
            <p className="text-blue-500">Sign up</p>
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

export default Login;
