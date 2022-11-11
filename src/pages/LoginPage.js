import React, {useState} from 'react'
import Button from '../components/Button';

const LoginPage = () => {

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
        <h1>Hi Login</h1>

        <input 
            className={inputClasses}
            type="text"
            name="student_id"
            placeholder="Student ID"
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
        
        <Button text="Sign Up"/>
    </div>
  )
}

export default LoginPage