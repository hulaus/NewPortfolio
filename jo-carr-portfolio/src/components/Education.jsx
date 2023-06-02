import React from "react";
import Button from "react-bootstrap/Button"

function Education() {
    return(
        <>
            <div className="EducationContainer">
     <div className="EducationHeader">
        <h2>Education</h2>
    </div>
    <div>
    <Button className="EducationButton" href="https://continuingeducation.unlv.edu/programs/software-development">
        <h2>Continuing Education</h2>
        </Button>
    </div>
            </div>
        </>
    )
}

export default Education