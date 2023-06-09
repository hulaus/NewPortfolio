import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faenvlope } from "@fortawesome/free-brands-svg-icons";

function SocialLinks() {
    return(
        <>
        <div className="social-container">
            <a href="https://github.com/hulaus"   rel="noreferrer" target="_blank"  className="github social">
                <FontAwesomeIcon icon={faGithub} size="2x"/>
            </a>
            <a href="https://www.linkedin.com/in/joseph-carrasco/" rel="noreferrer" target="_blank" className="linkedin social">
                <FontAwesomeIcon icon={faLinkedin} size="2x"/>
            </a>
        </div>
        </>
    )
}

export default SocialLinks