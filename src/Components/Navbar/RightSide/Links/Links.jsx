import React from 'react';
import { Link } from 'react-router-dom';
import style from './Links.module.css';



export default function Links() {
    return (
        <>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a
                            className={ `nav-link text-white text-uppercase fw-bold fs-6 ${ style.hoverLink }` }
                            href="#portfolio"
                        >
                            portfolio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className={ `nav-link text-white text-uppercase fw-bold fs-6 ${ style.hoverLink }` }
                            href="#about"
                        >
                            about
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className={ `nav-link text-white text-uppercase fw-bold fs-6 ${ style.hoverLink }` }
                            href="#contact"
                        >
                            contact
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
