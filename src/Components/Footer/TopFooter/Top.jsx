import React from 'react';
import AroundWeb from '../AroundWeb/AroundWeb';
import AboutFreelance from '../Freelancer/AboutFreelance';
import Location from '../Location/Location';
import style from './Top.module.css'

export default function Top() {
    return (
        <>
            <div className={`p-4 ${style.topBg}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Location/>
                        </div>
                        <div className="col-md-4">
                            <AroundWeb/>
                        </div>
                        <div className="col-md-4">
                            <AboutFreelance/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
