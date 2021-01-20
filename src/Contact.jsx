import React, { useState } from 'react';
import axios from 'axios';
// import { Link } from "react-router-dom";

const Contact = () => {

    const [state, setState] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    
    const inputEvent = (e) => {
        const { name, value } = e.target;
    
        setState( (preVal) => {
          return {
            ...preVal,
            [ name ]: value,
          };
        });  
    };

    const resetForm = () => {
        setState({
            name: "",
            email: "",
            subject: "",
            message: ""
          });
    }

    const submitAction = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        axios({
            method: "post", 
            url:"https://nishantnextworld.com/api/mail/send-mail.php", 
            headers: { 'Content-Type': 'multipart/form-data' },          
            data: formData
        }).then((response)=>{
            if (response.data.status === 'success') {
              alert("Message Sent."); 
              resetForm();
            } else if(response.data.status === 'fail') {
              alert("Message failed to send.");
              document.getElementById('alert-message').innerHTML= response.data.error;
            }
        });
        // alert(`Hi ${state.name} you'r email is ${state.email} and Message: ${state.message}`);
    };

    return (
        <>
            <section id="contact" className="position-relative vh-100">
                <div className="container py-4 text-md-center text-lg-center">
                    <div className="contacts-main w-75 mx-auto px-md-5 px-lg-5">
                        <div className="title-section">
                            <h1 className="mb-md-5 mb-4 fw-bold text-sm-center">Want to get in touch?</h1>
                        </div>
                        <span id="alert-message" className="text-danger"></span>
                        <form id="contact-form" method="POST" onSubmit={submitAction}>
                            <div className="form-group my-3">
                                <input 
                                    type="text" 
                                    name="name"
                                    onChange={inputEvent} 
                                    value={state.name}
                                    className="form-control form-control-lg shadow-none border border-secondary p-3" 
                                    placeholder="Enter your name"
                                    required=""
                                />
                            </div>
                            <div className="form-group my-3">
                                <input 
                                    type="email" 
                                    name="email"
                                    onChange={inputEvent} 
                                    value={state.email}
                                    className="form-control form-control-lg shadow-none border border-secondary" 
                                    placeholder="Enter your mail"
                                />
                            </div>

                            <div className="form-group my-3">
                                <input 
                                    type="text"
                                    name="subject" 
                                    onChange={inputEvent} 
                                    value={state.subject}
                                    className="form-control form-control-lg shadow-none border border-secondary" 
                                    placeholder="Subject"
                                />
                            </div>
                            <div className="form-group my-3">
                                <textarea 
                                    name="message"
                                    onChange={inputEvent} 
                                    value={state.message}
                                    className="form-control form-control-lg shadow-none border border-secondary" 
                                    placeholder="Enter your message"
                                    rows="5" >
                                </textarea>
                            </div>
                            <div className="text-end">
                                <button className="btn-primary btn px-5">Send</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;