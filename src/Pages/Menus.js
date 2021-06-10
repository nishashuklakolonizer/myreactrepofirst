import React from "react";
import {NavLink } from "react-router-dom";
import './Style.css';

const Menus = () => {
    return (
        <>
           <NavLink exact activeClassName="active_class" to="/">About Us</NavLink>
           <NavLink exact activeClassName="active_class" to="/contact">Contact Us</NavLink>
           <br/>

           <br/>
           <a href="/">AbousUs</a>
           <a href="/contact">Contact</a>
        </>
    );

};

export default Menus;