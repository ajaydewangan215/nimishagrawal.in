import React from 'react';
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <>
            <section id="books-content" className="position-relative vh-100">
                <div className="h-100 d-flex align-items-center justify-content-center">
                <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="text-center">
                                    <h2 className="coming-soon-title text-primary">We are coming soon</h2>
                                    <h6 className="text-dark text-uppercase">Lets Join and work with us</h6>
                                    <p className="text-dark">You have to join for the latest update. </p>                                    
                                    <form className="form-inline justify-content-center py-4">
                                        <label>
                                            <div className="input-group mb-3">
                                                <input type="text" className="form-control bg-white" placeholder="Enter your email...."  />
                                                <button className="btn btn-primary" type="button" id="button-addon2">Button</button>
                                            </div>
                                        </label>
                                    </form>
                                    <div className="mt-2">
                                        <Link 
                                            to="/" 
                                            className="btn btn-primary btn-round m-1 rounded-pill" 
                                            aria-current="page">Go to Home
                                        </Link>
                                    </div>
                                    <div className="mt-4">
                                        <p className="">Copyright © 2021 Nimish Agrawal | All rights reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
            </section>
        </>
    );
}

export default Contact;