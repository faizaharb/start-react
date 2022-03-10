import React from 'react';
import style from './About.module.css'
import WhiteStar from '../WhiteStar/WhiteStar';

export default function About() {
    return (
        <>
            <section id="about" className={`py-4 text-white ${style.aboutbgColor}`}>
                <div className="container">
                    <div className="addressTitle mt-4 pt-4 d-flex flex-column align-items-center">
                        <h2 className='text-uppercase fw-bold fs-1'>about</h2>
                        <WhiteStar />
                    </div>
                    <div className="customContainer w-75 m-auto py-4">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="contentOne lh-base fs-5 px-3">
                                    <p className='p-3'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="contentTwo lh-base fs-5 px-3">
                                    <p className='p-3'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
