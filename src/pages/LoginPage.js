import React, { useState } from "react";
import axios from "axios";
import qs from 'qs';

import Button from "../components/Button";


const url = "https://images.unsplash.com/photo-1510906594845-bc082582c8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2044&q=80";
const LoginPage = () => {
  const [userData, setUserData] = useState({});

  const handleUserData = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
      axios({
        method: 'post',
        url: 'http://localhost:8000/user/login',
        data: qs.stringify({
            ...userData
        }),
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }}).then((res) => {
            localStorage.setItem("access_token", res.data.access_token);
            localStorage.setItem("refresh_token", res.data.refresh_token);
        });
  }

  console.log(userData);

  const inputClasses = "py-1 px-6 border border-gray-500 rounded w-full";
  const pass = "text-xs font-medium text-gray-400" 
  return (
    <div className="h-[90vh] w-screen flex justify-center items-center flex flex-col relative">
      <img
        src={url}
        className="w-screen h-full object-cover opacity-90 absolute top-0 left-0"
      ></img>

      <div className="w-screen h-full absolute flex justify-center items-center">
        <div className="flex justify-center items-center flex flex-col bg-white h-2/3 w-1/4 rounded-lg shadow-lg shadow-white/20">
        <div className="w-5/6 flex flex-col justify-center items-center">
          <h1 className="text-lg sm:text-2xl md:text-3xl xl:text-4xl mb-12 text-gray-500 font-mono font-bold">
            Log in
          </h1>
          <div className="w-full flex flex-col justify-center items-center space-y-8">
            <input
              className={inputClasses}
              type="text"
              name="student_id"
              placeholder="Student ID"
              onChange={handleUserData}
            ></input>
            <input
              className={inputClasses}
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleUserData}
            ></input>
          </div>
          <h4 className={pass}>At least 16 charactes OR at least 8 characters including a number and a letter</h4>
          <div className="w-full flex flex-col justify-center items-center">
            <Button text="Log in" onClick={handleSubmit}/>
            <h1 className="text-xs font-semibold mt-2">SignUp?</h1>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
