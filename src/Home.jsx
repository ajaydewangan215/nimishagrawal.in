import React from 'react';
// import Typewriter from 'typewriter-effect';
import { socialData } from './data/data';

const Home = () => {
    return (
        <>
            <section id="home-content" className="position-relative d-grid align-items-center vh-100">
                {/* <div className="banner-info container text-end">
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
                </div>     */}
                {
                    socialData.length > 0 && (
                        <ul className="social-icons list-inline position-absolute align-middle">
                            {
                                socialData.map(data => <li key={data.id}>
                                    <a href={data.link} target="_blank" rel="noreferrer" className="shadow-lg">
                                        <img src={data.icon} alt={data.name} className="img-fluid" />
                                    </a>
                                </li>)
                            }
                        </ul>
                    )
                }
            </section>
        </>
    );
}

export default Home;