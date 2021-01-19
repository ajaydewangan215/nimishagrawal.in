import React from 'react';
import bio from './img/bio.jpg';

const Bio = () => {
    return (
        <>
            <section id="bio-content" className="position-relative vh-100">
                <img src={bio} alt="Bio" title="Bio" className="img-fluid" />
            </section>
        </>
    );
}

export default Bio;