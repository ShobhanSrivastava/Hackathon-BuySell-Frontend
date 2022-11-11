import React, {useState} from 'react'
import Button from '../components/Button'

const SignUpPage = () => {

    const [userData, setUserData] = useState({});

    const handleUserData = (e) => {
        setUserData({
            ...userData, 
            [e.target.name]: e.target.value,
        })
    }

    console.log(userData);

    const inputClasses = "border-black border-2 px-2 mx-2 "

  return (
    <div className="">
        <h1>Hi Sign Up for th</h1>
        <input 
            className={inputClasses}
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleUserData}
        >
        </input>
        <input
            className={inputClasses}
            type="text"
            name="department"
            placeholder="Department"
            onChange={handleUserData}
        >
        </input>
        <input
            className={inputClasses}
            type="number"
            name="year"
            placeholder="Year"
            onChange={handleUserData}
        >
        </input>
        <input
            className={inputClasses}
            type="number"
            name="phone"
            placeholder="Phone Number"
            onChange={handleUserData}
        >
        </input>
        <input
            className={inputClasses}
            type="number"
            name="student_id"
            placeholder="Student ID"
            onChange={handleUserData}
        >
        </input>
        <input
            className={inputClasses}
            type="text"
            name="address"
            placeholder="Address"
            onChange={handleUserData}
        >
        </input>
        <input
            className={inputClasses}
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleUserData}
        >
        </input>
        <input
            className={inputClasses}
            type="text"
            name="password"
            placeholder="Password"
            onChange={handleUserData}
        >
        </input>
        <input
            className={inputClasses}
            type="text"
            name="confirmm_password"
            placeholder="Confirm Password"
            onChange={handleUserData}
        >
        </input>
        <Button text="Sign Up"/>
    </div>
  )
}

export default SignUpPage