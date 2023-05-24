import React from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, } from "@fortawesome/free-brands-svg-icons";

function SkillsPage() {
    return(
     <>
     <div className="SkillsCardsContainer">
     <div className="SkillsCards">
        <Card>
        <Card.Header>
            <h2>Front-End Development</h2>
        </Card.Header>
        <ListGroup variant="flush" className="ListGroup">
            <ListGroup.Item> HTML<span><FontAwesomeIcon icon={faHtml5} size="2x" style={{color:"#E44D26", verticalAlign:"middle"}} /></span></ListGroup.Item>
            <ListGroup.Item>CSS</ListGroup.Item>
            <ListGroup.Item>JavaScript</ListGroup.Item>
            <ListGroup.Item>React</ListGroup.Item>
            <ListGroup.Item>UI/UX Design</ListGroup.Item>
            <ListGroup.Item>Front-End Frameworks: React.js, Bootstrap</ListGroup.Item>
        </ListGroup>
        </Card>
     </div>
     <div className="SkillsCards">
     <Card>
        <Card.Header>
            <h2>Back-End Development</h2>
        </Card.Header>
        <ListGroup variant="flush" className="ListGroup">
            <ListGroup.Item>Node.js</ListGroup.Item>
            <ListGroup.Item>Express.js</ListGroup.Item>
            <ListGroup.Item>Python</ListGroup.Item>
            <ListGroup.Item>Django</ListGroup.Item>
            <ListGroup.Item>Relational Database: PostgreSQL</ListGroup.Item>
            <ListGroup.Item>NoSQL Databases: MongoDB</ListGroup.Item>
            <ListGroup.Item>RESTful APIs</ListGroup.Item>
        </ListGroup>
        </Card>
     </div>
     <div className="SkillsCards">
     <Card>
        <Card.Header>
            <h2>Additional Skills</h2>
        </Card.Header>
        <ListGroup variant="flush" className="ListGroup">
            <ListGroup.Item>Git and Version Control</ListGroup.Item>
            <ListGroup.Item>Deployment and Server Management(Vercel & Render)</ListGroup.Item>
            <ListGroup.Item>API Integration</ListGroup.Item>
            <ListGroup.Item>Django</ListGroup.Item>
            <ListGroup.Item>Relational Database: PostgreSQL</ListGroup.Item>
            <ListGroup.Item>NoSQL Databases: MongoDB</ListGroup.Item>
            <ListGroup.Item>RESTful APIs</ListGroup.Item>
        </ListGroup>
        </Card>
     </div>
    </div>
     </>
    )
}

export default SkillsPage