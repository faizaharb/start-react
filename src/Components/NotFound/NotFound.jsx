import React from 'react';
import Notfoundimg from '../../images/404.PNG';

export default function NotFound() {
    return (
        <div className='min-vh-100 d-flex align-items-center justify-content-center'>
            <img src={ Notfoundimg } alt="" />
        </div>
    )
}
