import React, {useState} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const Auth = async(e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:3001/login', {
        email, password
      });
      navigate('/home');    
      setEmail('');
      setPassword('');
    } catch (error) {
      if(error.response) {
        setMsg(error.response.data.msg);
      }
    }

  }

  return (
    <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="relative py-3 sm:w-96 mx-auto text-center">
        <span className="text-2xl font-light ">Login to your account</span>
        <div className="mt-4 bg-white shadow-card rounded-lg text-left">
          <div className="h-2 bg-purple-400 rounded-t-md" />
          <p className="text-center bg-blue-300 py-2 text-gray-500 mt-">{msg}</p>
          <form onSubmit={Auth} className="px-8 py-6 ">
            <label className="block font-semibold"> Username or Email </label>
            <input
              type="email"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
            />
            <label className="block mt-3 font-semibold"> Password </label>
            <input
              type="password"
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
            />
            <div className="flex justify-between items-baseline">
              <button
                type="submit"
                className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 "
              >
                Login
              </button>
              <Link to="/signup" className="text-sm hover:underline">
                I dont have account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
