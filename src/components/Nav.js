import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from './images/im.jpg';

const Nav = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const section = document.querySelector(location.hash);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <nav className="navbar navbar-expand-md navbar-fixed-top navbar-light">
            <a className="navbar-brand" id="IMHome" href="/#IMHome">
                <img id="Mast" src={Logo} width="160" height="74" alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav navbar-nav-custom">
                    <li className="nav-item p-2">
                        <a className="nav-link" href="/#IMHome">Home</a>
                    </li>
                    <li className="nav-item p-2">
                        <a className="nav-link" href="/#Customers">Customers</a>
                    </li>
                    <li className="nav-item p-2">
                        <a className="nav-link" href="/#Carriers">Carriers</a>
                    </li>
                    <li className="nav-item p-2">
                        <a className="nav-link" href="/#Contact">Contact</a>
                    </li>
                    <li className="nav-item p-2">
                        <a className="nav-link" href="/blog">Blog</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
