import React from 'react';
import style from './ToggleBtn.module.css';

export default function ToggleBtn() {
    return (
        <>
            <button
                className={`navbar-toggler text-white text-uppercase btn p-2 ${style.bgToggleColor}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                Menu
                <span>
                    <i className="fa-solid fa-bars ms-2"></i>
                </span>
            </button>
        </>
    )
}
