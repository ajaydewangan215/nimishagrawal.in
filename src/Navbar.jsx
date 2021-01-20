import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <header id="header" className="border-bottom">
                <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                    <div className="container">
                        <a className="navbar-brand fw-bold fst-italic fs-2" href="/" onClick={e => e.preventDefault()}>Nimish Agrawal</a>
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
                                    <NavLink exact 
                                        to="/" 
                                        activeClassName="activeRoute"
                                        className="nav-link" 
                                        aria-current="page">Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                        to="/bio" 
                                        activeClassName="activeRoute"
                                        className="nav-link" 
                                        aria-current="page">BIO
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                        to="/books" 
                                        activeClassName="activeRoute"
                                        className="nav-link" 
                                        aria-current="page">Books
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                        to="/blog" 
                                        activeClassName="activeRoute"
                                        className="nav-link" 
                                        aria-current="page">Blog
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                        to="/gallary" 
                                        activeClassName="activeRoute"
                                        className="nav-link" 
                                        aria-current="page">Gallary
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink 
                                        to="/contact" 
                                        activeClassName="activeRoute"
                                        className="nav-link" 
                                        aria-current="page">Contact Us
                                    </NavLink>
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