import React from 'react';
import style from './Bottom.module.css';

export default function Bottom() {
    return (
        <>
            <div className={`${style.bottomBg}`}>
                <div className="container">
                    <div className="endOfFooter">
                        <p className='text-capitalize text-center text-white fs-6 py-3'>copyright &copy; your website 2021</p>
                    </div>
                </div>
            </div>
        </>
    )
}
