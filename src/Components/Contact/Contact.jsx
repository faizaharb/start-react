import React, { useState } from 'react';
import DarkStar from '../DarkStar/DarkStar';
import style from './Contact.module.css'

export default function Contact() {

    return (
        <>
            <section id="contact" className="py-4">
                <div className="container">
                    <div className="addressTitle mt-4 pt-4 d-flex flex-column align-items-center">
                        <h2 className='text-uppercase fw-bold fs-1'>contact</h2>
                        <DarkStar />
                    </div>
                    <div className="w-75 m-auto p-4 my-4">
                        <form>
                            <div className="row gy-5">
                                <div className={ `col-md-14  ${ style.inStyle }` }>
                                    <label htmlFor="yourName" className={ `ps-4 ${ style.labelColor } d-none` }>Name</label>
                                    <input type="text" name="yourName" id="yourName" placeholder='Name' className='form-control border-0' />
                                </div>
                                <div className={ `col-md-14  ${ style.inStyle }` }>
                                    <label htmlFor="email" className={ `ps-4 ${ style.labelColor } d-none` }>Email Address</label>
                                    <input type="email" name="email" id="email" placeholder='Email Address' className={ `form-control border-0 ` } />
                                </div>
                                <div className={ `col-md-14  ${ style.inStyle }` }>
                                    <label htmlFor="phone" className={ `ps-4 ${ style.labelColor } d-none` }>Phone Number</label>
                                    <input type="number" name="phone" id="phone" placeholder='Phone Number' className='form-control border-0' />
                                </div>
                                <div className={ `col-md-14 mb-5 ${ style.inStyle }` }>
                                    <label htmlFor="message" className={ `ps-4 ${ style.labelColor } d-none` }>Message</label>
                                    <textarea name="message" id="message" placeholder='Message' className={ `form-control border-0 ${ style.areaStyle }` }></textarea>
                                </div>
                            </div>
                            <button type='submit' className={ `btn text-white text-capitalize mt-5 ${ style.btnStyle }` }>send</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
