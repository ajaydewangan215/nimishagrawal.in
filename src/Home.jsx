import React from 'react';
import whatsapp from './img/social-icon/whatsapp.webp';
import fb from './img/social-icon/fb.webp';
import twitter from './img/social-icon/twitter.webp';
import insta from './img/social-icon/insta.webp';
import Typewriter from 'typewriter-effect';

const Home = () => {
    return (
        <>
            <section id="home-content" className="position-relative d-grid align-items-center vh-100">
                <div className="banner-info container text-end">
                    <h1 className="banner-text fst-italic"><small>Hello, I’m </small>
                        Nimish Agrawal
                    </h1>
                    <div id="typewriter">
                        <Typewriter
                        options={{
                            strings: ['Trust on myself', 'Believe in a God'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                    </div>
                    <p className="mt-3 mb-5 text-dark"> I love to work in User Experience &amp; User Interface designing. Because I love to solve the design problem and find easy and
                        better solutions to solve it. I always try my best to make good user interface with the best user experience.</p><br />
                    <button type="button" className="btn btn-outline-light rounded-0 shadow-none me-2">My Work</button>
                    <button type="button" className="btn btn-outline-dark rounded-0 shadow-none">Contact Me</button>
                </div>    
                <ul className="social-icons list-inline position-absolute align-middle">
                    <li>
                        <a href="javascript:void(0)" className="shadow-lg">
                            <img src={whatsapp} alt="whatsapp" className="img-fluid" />
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" className="shadow-lg">
                            <img src={fb} alt="facebook" className="img-fluid" />
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" className="shadow-lg">
                            <img src={twitter} alt="twitter" className="img-fluid" />
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)" className="shadow-lg">
                            <img src={insta} alt="instagram" className="img-fluid" />
                        </a>
                    </li>
                </ul>          
            </section>
        </>
    );
}

export default Home;