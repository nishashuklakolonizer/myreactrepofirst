import React, { useState } from "react";
import Navbar from './Navbar';

const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        mssg: "",

    });
    const InputEvent = (event) => {
         const { name, value } = event.target;
         setData((preVal) => {
             return {
                 ...preVal,
                 [name]: value,

             }
         })
        }
    const formSubmit = () => {

    };

    return (

        <> 
           <Navbar/>
            <div className="my-2">
                <h1 className="teaxt-center">Contact Us</h1>
            </div>
            <div  className="container contact_div" style={{marginTop:"7vh"}}>
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                       <form onSubmit={formSubmit}>
                       <div className="mb-1">
                            
                            <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name"/>
                        </div>
                        <div className="mb-1">
                            
                            <input type="phone" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Enter Your Phone"/>
                        </div>
                        <div className="mb-1">
                            
                            <input type="email" class="form-control" id="exampleFormControlInput1"name="email" value={data.email} onChange={InputEvent} placeholder="Enter Your Email"/>
                        </div>
                        <div className="mb-1">
                            
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"  name="mssg" value={data.mssg} onChange={InputEvent} placeholder="Message" style={{boxShadow:"4px 4px 7px 1px purple"}}></textarea>
                        </div>
                        <div className="col-12 mt-3">
                            <button class="btn btn-outline-primary" type="submit" style={{width:'100%!impotant',color:"#fff"}}>Submit</button>
                        </div>
                        </form>
                    </div>

                </div>

            </div>
            
        </>
    );
};

export default Contact;