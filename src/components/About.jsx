import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { userAuth } from "../context/authContext";

const About = () => {

    // const context = useContext(authContext);

    const { name, color } = userAuth();

    return (
        <>
            <h3>Hello from About </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in, iste accusantium vitae, expedita dolorem sint culpa laudantium, nesciunt voluptatibus odit. Ad eius error quaerat ea praesentium accusamus necessitatibus! Aperiam!</p>
            <p>Go to <Link to="/">Home</Link></p>

            <p style={{color: color }}>Your name is {name}</p>

        </>
    )
}


export default About;