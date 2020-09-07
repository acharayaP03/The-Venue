import React from 'react'
import Carousel from './Carousel';
import TimeUntill from './TimeUntill';
function Featured() {
    return (
        <div style={{ position: 'relative'}}>

            <Carousel/>
            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>
            </div>
            <TimeUntill />
        </div>
    )
}


export default  Featured;