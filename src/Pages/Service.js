import React from "react";
import Navbar from './Navbar';
import web1 from "../images/s1.jpg";
import web2 from "../images/s2.jpg";
import web3 from "../images/s3.jpg";

const Service = ( ) => {
    return (
        <>
          <Navbar/>
          <div className="my-5">
              <h1 className="text-center">Our Services</h1>

          </div>
          <div className="container-fluid mb-5">
              <div className="row gy-4 ">
                  <div className="col-10 mx-auto">
                      <div className="row">
                          <div className="col-md-4 col-10 mx-auto"> 
                                <div className="card">
                                <img src={web1} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 className="card-title font-weight-bold ">Web Designing</h5>
                                        <p className="card-text" style={{textAlign:'justify'}}>web designs play a more vital role to empower the industries at greater pace. Unique web designs attract a larger customer base and compel the customers to purchase by converting them into profitable leads. Our capable team of web designers researches the real estate market and designs software that matches the demands of the dealers.</p>
                                        
                                    </div>
                                </div>

                          </div>
                          <div className="col-md-4 col-10 mx-auto"> 
                                <div className="card">
                                <img src={web2} class="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">Software Development</h5>
                                        <p className="card-text" style={{textAlign:'justify'}}>Software development provides easy and quick solutions for real estate dealers. Digital dashboards provide the ease in operating data and features through its valid functionalities. Software provides a unique way to enhance transparency of the information. Management becomes more suitable with the discovery of management software and helps the real estate agents.</p>
                                        
                                    </div>
                                </div>

                          </div>
                          <div className="col-md-4 col-10 mx-auto"> 
                                <div className="card">
                                <img src={web3} class="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">App Development</h5>
                                        <p className="card-text" style={{textAlign:'justify'}}>IT sector is transforming the concept of real estate industry in an amazingly different way. App development makes the real estate infrastructure multifaceted and difficult to wrangle for real estate dealers. Kolonizer helps the real estate agents to orchestrate every single element of construction together. Find the progressive result in real estate business through apps, where the valuable time and finance are inextricably intertwined.</p>
                                        
                                    </div>
                                </div>

                          </div>
                          
                          
                          
                          </div>
                    </div>
                </div>

          </div>
        </>
    );
};

export default Service;