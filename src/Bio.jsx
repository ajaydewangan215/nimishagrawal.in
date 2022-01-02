import bio from './img/bio.jpg'

const Bio = () => {
    return (
        <>
            <section id="bio-content" className="position-relative">
                <div className="book-block">
                    <img src={bio} alt="Bio" title="Bio" className="img-fluid" />    
                </div>                
            </section>
        </>
    );
}

export default Bio;