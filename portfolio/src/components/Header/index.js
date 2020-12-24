import React from "react";

function Header() {
    return (
        <>
            <header className="site-navbar js-sticky-header site-navbar-target" role="banner">
                <div className="container">
                    <div className="row align-items-center position-relative">
                        <div className="site-logo">
                            <a href="index.html" className="text-white">Caleb Chaney</a>
                        </div>
                        <div className="col-12">
                            <nav className="site-navigation text-right ml-auto " role="navigation">
                                <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                                    <li><a href="/" className="nav-link">About</a></li>
                                    <li><a href="/Portfolio" className="nav-link">Portfolio</a></li>
                                    <li><a href="/Contact" className="nav-link">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="toggle-button d-inline-block d-lg-none"><a href="#"
                            className="site-menu-toggle py-5 js-menu-toggle text-white"><span className="icon-menu h3"></span></a></div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;