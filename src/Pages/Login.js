import React from "react";
import './Style.css';

const Login = ( ) => {
    return (
        <>
            <div className="container-fluid  maindiv">
            <div className="row">
                <div className="col-lg-4 ">
                    <h3>Login Form</h3>
                    <form action="/Home" >
                        <div>

                            <input type="text" name="email" id="email" placeholder="Enter Your Email" required autoComplete="off" />
                        </div>
                        <div>

                            <input type="password" name="password" id="password" placeholder="Enter Your Password" required  autoComplete="off" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-sm mybtn">Login</button>
                        <p>Not Registered?<a href="/Signup">Create an Account</a></p>
                    </form>
                </div>
            </div>
            </div>
        </>
    );
};

export default Login;