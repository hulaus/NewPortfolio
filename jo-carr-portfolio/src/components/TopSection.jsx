import React from "react";
import Me from './Assets/images/croppedphoto.jpg'
import SocialLinks from "./SocialMedia";

function TopSection() {
    return(
        <>
        <div className="AboutMe">
        <h1>Full-Stack Developer, Designer & Frontend Enthusiast </h1>
        <img className="MeAtDisney" src={Me} alt="Me at DisneyLand" />
        <p>I am a lifelong learner passsionate about what I do, I am driven by the desire to grow. With one year of experience, I am dedicated to refining my craft.
            I thrive on challenges, consistently seeking opportunities to elevate my skills and reach new levels of exellence !
         </p>
        <div className="SocialLinks">
            <SocialLinks />
        </div>
        </div>
        <div>
            <div className="WhoAmI">
                <h2>Hello I'm Joseph! <span className="wave">👋</span>  
                </h2>
                <p>
                    For the past year, I have been engaged in the world of full-stack development eager to gain valuable experience. While I may be at the early stages of my journey, my ability to adapt swiftly and my drive make up for any lack of experience.
                    I approach every coding challenge with curiosity and enthusiasm, constantly pushing myself to learn and grow.
                    Now, I am excitedly seeking my first real work experience, eager to collaborate with talented individuals and contribute to the creation of exceptional digital products!
                </p>
            </div>
        </div>
        </>
    )
}

export default TopSection