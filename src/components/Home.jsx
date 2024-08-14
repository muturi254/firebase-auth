import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userAuth } from "../context/authContext";
import { authContext } from "../context/authContext";

const Home = () => {

    // const context = useContext(authContext);
    
    const {name, color, user} = userAuth();

    if (!user) {
        return <p>Loading......</p>
    }
  
    return (
       <>  
            <h1>Hello from home </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta in, iste accusantium vitae, expedita dolorem sint culpa laudantium, nesciunt voluptatibus odit. Ad eius error quaerat ea praesentium accusamus necessitatibus! Aperiam!</p>
            <p>Go to <Link to="/about">about</Link></p>

            <p style={{color: color}}>Your name is {name}</p>

       </>
    )
}


export default Home;