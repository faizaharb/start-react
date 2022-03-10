import React from 'react';
import style from './Home.module.css';
import avatarimg from '../../images/avataaars.svg';
import WhiteStar from '../WhiteStar/WhiteStar';


export default function Home() {
    return (
        <>
            <section
                className={`d-flex flex-column justify-content-center align-items-center min-vh-100 pt-5 ${style.customView}`}
                id="home"
            >
                <div className="container mt-5 pt-5">
                    <div className="text-center" >
                        <img src={avatarimg} alt="photo" aria-hidden className="w-25" />
                    </div>
                    <div className="content d-flex flex-column align-items-center">
                        <div className={`text-white text-uppercase d-flex flex-column justify-content-center align-items-center my-2`}>
                            <h1>start react</h1>
                            <WhiteStar/>
                        </div>
                        <div className="text-white mt-2 mb-5 py-2 fs-4">
                            <p>Graphic Artist - Web Designer - Illustrator</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
