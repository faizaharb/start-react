import React from 'react';
import style from './AroundWeb.module.css';

export default function AroundWeb() {
    return (
        <>
            <div className="socialdetails text-white text-center w-75 py-3">
                <h4 className='text-uppercase fw-bold my-3'>around the web</h4>
                <div className="socailLinks">
                    <ul className=" list-unstyled d-flex  text-center justify-content-between">
                        <li className={ `${ style.liHover }` }><i className="fab fa-facebook-f border border-2 rounded-circle p-3"></i></li>
                        <li className={ `${ style.liHover }` }><i className="fab fa-twitter border border-2 rounded-circle p-3"></i></li>
                        <li className={ `${ style.liHover }` }><i className="fab fa-linkedin-in border border-2 rounded-circle p-3"></i></li>
                        <li className={ `${ style.liHover }` }><i className="fab fa-dribbble border border-2 rounded-circle p-3"></i></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
