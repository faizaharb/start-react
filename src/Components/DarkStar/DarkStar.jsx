import React from 'react';
import style from './DarkStar.module.css';

export default function DarkStar() {
    return (
        <>
            <span className={`${style.title}`}><i className="fa-solid fa-star fa-2x mx-3"></i></span>
        </>
    )
}
