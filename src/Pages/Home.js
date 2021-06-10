import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from './Navbar';
import web from "../images/p1.jpg";
import './Home.css';
import Common from "./Common";

const Home = ( ) => {
    return (
        <>
          <Navbar/>
           <Common  name='Grow your business with' 
           imgsrc={web} 
           visit="/Service"
           btname="Get Started"
           />
        </>
    );
};

export default Home;