import React from 'react';
import LeftNav from '../LeftSide/LeftNav';
import Links from '../RightSide/Links/Links';
import ToggleBtn from '../RightSide/ToggleBtn/ToggleBtn';
import style from './Nav.module.css';

export default function Nav() {
    return (
        <>
                <nav className={`navbar navbar-expand-lg py-3 fixed-top w-100 ${style.bgColor}`}>
                    <div className="container">
                        <LeftNav />
                        <ToggleBtn />
                        <Links/>
                    </div>
                </nav>
        </>
    )
}
