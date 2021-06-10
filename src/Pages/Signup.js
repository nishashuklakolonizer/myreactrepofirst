import React from "react";
import './Style.css';

const Signup = ( ) => {
    return (
        <>
            <div className="container-fluid maindiv">
            <div className="row">
                <div className="col-lg-4 ">
                    <h3>Signup Form</h3>
                    <form action="/Home" >
                        <div>

                            <input type="text" name="email" id="email" placeholder="Enter Your Email" required  autoComplete="off" />
                        </div>
                        <div>

                            <input type="password" name="password" id="password" placeholder="Enter Your Password" required autoComplete="off" />
                        </div>
                        <div>

                            <input type="password" name="cpassword" id="password" placeholder="Enter Your Confirm  Password" required autoComplete="off" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-sm mybtn">Signup</button>
                        <p>Have already an Account?<a href="/Login ">Create an Account</a></p>
                    </form>
                </div>
            </div>
            </div>
        </>
    );
};

export default Signup;