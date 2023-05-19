import React from "react";
import Me from './Assets/images/MeAtDisney.jpg'

function TopSection() {
    return(
        <>
        <div className="AboutMe">
        <h1>Full-Stack Developer, Designer & Frontend Enthusiast </h1>
        </div>
            <img className="MeAtDisney" src={Me} alt="Me at DisneyLand" />
        </>
    )
}

export default TopSection