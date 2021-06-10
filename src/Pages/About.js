import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from './Navbar';
import web from "../images/p1.jpg";
import './Home.css';
import Common from "./Common";

const About = ( ) => {
    return (
        <>
          <Navbar/>
           <Common  name='Welcome to About Kolentry Page' 
           imgsrc={web} 
           visit="/Contact"
           btname="Contact Now"
           />
        </>
    );
};

export default About;