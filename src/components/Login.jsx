import React, { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { userAuth } from "../context/authContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";

const Login = () => {

    const [formData, setFormData] = useState({});
    // const [user, setUser] = useState();
    const { login, user, logOut } = userAuth();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    console.log("user is: ", user);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(formData.email, formData.password);
            navigate("/")
        } catch (error) {
            console.log(error);
        }

    }

    if (user) {
        return <Navigate to="/" />
    }

    return (
        <>
        
            <h1>Hello from Login </h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="enter email" onClick={handleChange} /> <br /> <br />
                <input type="password" name="password" placeholder="enter password"  onClick={handleChange} /> <br /> <br />
                <button type="submit">Login</button> <br />
                <span>Do not have an account <Link to="/signup">signup</Link> </span>
                <p onClick={() => logOut()}>Logout</p>
            </form>
        </>

    )
}


export default Login;