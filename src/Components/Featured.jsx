import React from 'react';
import black from '../img/blackwidow.jpeg';
import bullet from '../img/bullet.jpeg';
import f9 from '../img/f9.jpeg';
import forzen from '../img/forzen.jpeg';
import Buttons from '../Components/Buttons';


function Featured({movie}) {
    const btn = {
        marginLeft: '-1rem',
        backgroundColor: 'white',
    }
    return (
        <>
            <div className='feature'>
                <div>
                    <h2>Featured movies </h2>
                    <Buttons style={ btn} />
                </div>
                <div className="images">
                    <img src={black} alt="blackwidow" />
                    <img src={bullet} alt="blackwidow" />
                    <img src={f9} alt="blackwidow" />
                    <img src={forzen} alt="blackwidow" />
                </div>
            </div>
        </>
    )
}

export default Featured