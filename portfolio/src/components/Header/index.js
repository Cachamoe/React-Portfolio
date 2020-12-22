import React from "react";

function Header() {
    return (
        <>
            <header class="site-navbar js-sticky-header site-navbar-target" role="banner">
                <div class="container">
                    <div class="row align-items-center position-relative">
                        <div class="site-logo">
                            <a href="index.html" class="text-white">Caleb Chaney</a>
                        </div>
                        <div class="col-12">
                            <nav class="site-navigation text-right ml-auto " role="navigation">
                                <ul class="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                                    <li><a href="/" class="nav-link">About</a></li>
                                    <li><a href="/Portfolio" class="nav-link">Portfolio</a></li>
                                    <li><a href="/Contact" class="nav-link">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="toggle-button d-inline-block d-lg-none"><a href="#"
                            class="site-menu-toggle py-5 js-menu-toggle text-white"><span class="icon-menu h3"></span></a></div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;