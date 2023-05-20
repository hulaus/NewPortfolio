import React from "react";
import Me from './Assets/images/croppedphoto.jpg'
import SocialLinks from "./SocialMedia";

function TopSection() {
    return(
        <>
        <div className="AboutMe">
        <h1>Full-Stack Developer, Designer & Frontend Enthusiast </h1>
        <img className="MeAtDisney" src={Me} alt="Me at DisneyLand" />
        <p>As a lifelong learner and passionate coder, I am driven by the desire to grow. With one year of experience, I am dedicated to refining my craft.
            I thrive on challenges, consistently seeking opportunities to elevate my skills and reach new levels of exellence !
         </p>
        <div className="SocialLinks">
            <SocialLinks />
        </div>
        </div>
        </>
    )
}

export default TopSection