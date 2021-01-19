import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <header id="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                    <div className="container">
                        <a className="navbar-brand fw-bold fst-italic fs-2" href="#">Nimish Agrawal</a>
                        <button 
                            className="navbar-toggler" 
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarTogglerDemo03" 
                            aria-controls="navbarTogglerDemo03" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link 
                                        to="/" 
                                        className="nav-link" 
                                        aria-current="page">Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link 
                                        to="/bio" 
                                        className="nav-link" 
                                        aria-current="page">BIO
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link 
                                        to="/books" 
                                        className="nav-link" 
                                        aria-current="page">Books
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link 
                                        to="/blog" 
                                        className="nav-link" 
                                        aria-current="page">Blog
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link 
                                        to="/gallary" 
                                        className="nav-link" 
                                        aria-current="page">Gallary
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link 
                                        to="/contact" 
                                        className="nav-link" 
                                        aria-current="page">Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>        
        </>
    );
}

export default Navbar;