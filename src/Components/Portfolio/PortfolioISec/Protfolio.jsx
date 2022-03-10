import React, { useEffect } from 'react';
import DarkStar from '../../DarkStar/DarkStar';
import Imgs from '../PortImages/Imgs';
import style from './Portfolio.module.css'


export default function Protfolio() {
    useEffect( () => {
        let portfolioSec = '';
        Imgs.map( ( image ) =>
            portfolioSec += `
                <div class="col-md-4">
                    <div class="gallery">
                        <div class="${ style.portImg } rounded position-relative overflow-hidden">
                            <img src="${ image.src }" alt="${ image.title }" class="w-100">
                            <div class="${ style.overlay } position-absolute top-0 w-100 h-100 d-none align-items-center justify-content-center">
                                <i class="fa fa-plus text-white fa-3x"></i>
                            </div>
                        </div>
                    </div>
                </div>
                `);
        let showImg = document.querySelector( ".row" );
        showImg.innerHTML = portfolioSec;
    }, [] );
    return (
        <>

            <section id="portfolio" className='py-4'>
                <div className="container">
                    <div className="addressTitle mt-4 pt-4 d-flex flex-column align-items-center">
                        <h2 className='text-uppercase fw-bold fs-1'>portfolio</h2>
                        <DarkStar />
                    </div>
                    <div className="row my-5 g-4">

                    </div>
                </div>
            </section>


        </>
    )
}
