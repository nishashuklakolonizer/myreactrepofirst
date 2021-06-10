import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap5/src/css/bootstrap.min.css";
import "../node_modules/bootstrap5/src/js/bootstrap.bundle.min.js";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Service from './Pages/Service';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
//import Navbar from './Pages/Navbar';
import Menus from './Pages/Menus';
import Error from './Pages/Error';


const App = () => {
  return (
    <>
     
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/About" component={About} />
        <Route path="/Contact" component={Contact}/>
        
        <Route path="/Service" component={Service}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Signup" component={Signup}/>
        <Route path="/Dashboard" component={Dashboard}/>
        <Route path="/Menus" component={Menus}/>
        <Redirect to="/" />
        <Route component={Error}/>
      </Switch>
       {/* <About/>
       <Contact/> */}
    </>
  );
};

export default App;