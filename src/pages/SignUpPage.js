import React, { useState } from "react";
import Button from "../components/Button";


const url = "https://images.unsplash.com/photo-1510906594845-bc082582c8cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2044&q=80";

const SignUpPage = () => {
  const [userData, setUserData] = useState({});

  const handleUserData = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(userData);

  const inputClasses = "py-1 px-6 border border-gray-500 rounded w-full";
  const inputClasses1 =
    "py-1 px-3 border border-gray-500 rounded w-1/2 inline";
  const inputClasses2 =
    "py-1 px-3 border border-gray-500 rounded w-1/2 inline";

  return (
    <div className="h-[90vh] w-screen flex justify-center items-center flex flex-col relative">
      <img
        src={url}
        className="w-screen h-full object-cover opacity-85 absolute top-0 left-0"
      ></img>
      <div className="w-screen h-full absolute flex justify-center items-center">
        <div className="flex flex-col justify-center items-center bg-white h-[80vh] w-1/4 rounded-lg shadow-lg shadow-white/40">
          <h1 className="text-lg sm:text-2xl md:text-3xl xl:text-4xl mb-5 text-gray-500 font-mono font-bold">
            Sign Up
          </h1>
          <div className="w-3/4 flex flex-col justify-center items-center space-y-6">
            <input
              className={inputClasses}
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleUserData}
            ></input>
            <div className="inline w-full">
              <input
                className={inputClasses2}
                type="text"
                name="department"
                placeholder="Department"
                onChange={handleUserData}
              ></input>
            <select className={inputClasses2}>
            <option>GEU</option>
            <option>GEHU</option>
            </select>
            </div>

            <input
              className={inputClasses}
              type="number"
              name="phone"
              placeholder="Phone Number"
              onChange={handleUserData}
            ></input>
            <input
              className={inputClasses}
              type="number"
              name="student_id"
              placeholder="Student ID"
              onChange={handleUserData}
            ></input>
            <input
              className={inputClasses}
              type="text"
              name="address"
              placeholder="Address"
              onChange={handleUserData}
            ></input>
            <input
              className={inputClasses}
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleUserData}
            ></input>
            <input
              className={inputClasses}
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleUserData}
            ></input>
            <input
              className={inputClasses}
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              onChange={handleUserData}
            ></input>
            <Button text="Sign Up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
