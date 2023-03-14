import React, { Component } from 'react';
import videoBg from "/public/assets/landingBackground.mp4"

function LandingPage (){

    return(
        <div className='LandingPage'>
            <div className='overlay'></div>
            <video src={videoBg} autoPlay loop muted/>
            <div className='Title'>
            <h1> welcome to lotak</h1>
            <p>hello hi</p>
            </div>
        </div>
    )

}

export default LandingPage;