import React from 'react';
import style from './WhiteStar.module.css';

export default function WhiteStar() {
    return (
        <>
            <span className={`${style.title}`}><i className="fa-solid fa-star text-white fa-2x mx-3"></i></span>
        </>
    )
}
