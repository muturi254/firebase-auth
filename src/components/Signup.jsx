import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAuth } from "../context/authContext";

const Signup = () => {

    const [formData, setFormData] = useState({});
    const {signUp, user} = userAuth();
    const navigate= useNavigate();


    console.log("user is: ", user);
    

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});        
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signUp(formData.email, formData.password);
            navigate("/login")
        } catch (error) {
            console.log(error); 
        }
        
    }


    return (
        <>

            <h1>Hello from Signup </h1>
            <form>
                <input type="email" name="email" placeholder="enter email"  onChange={handleChange}/> <br /> <br />
                <input type="password" name="password" placeholder="enter password" onChange={handleChange} /> <br /> <br />
                <button type="submit" onClick={handleSubmit}>Signup</button>
                <span>Already have an account <Link to="/login">login</Link> </span>
            </form>
        </>
    )
}


export default Signup;