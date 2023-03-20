import React, { Component } from 'react';
import videoBg from "/public/assets/landingBackground.mp4"
import "../styls/LandingPage.css"

function LandingPage (){

    return(
        <div className='LandingPage'>
            <div className='overlay'></div>
            <video src={videoBg} autoPlay loop muted/>
            <div className='Title'>
            <h1 className='LandingPage-Title-Welcome'> LOTAK</h1>
            <p className='LandingPage-Title-Ptag'>One Stop Solution for all your Real Estate needs...</p>
            </div>
        </div>
    )

}

export default LandingPage;
