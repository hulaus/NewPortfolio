import React from "react";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs } from "@fortawesome/free-brands-svg-icons";

function SkillsPage() {
    return(
     <>
     <div className="SkillsCardsContainer">
     <div className="SkillsCards">
        <Card>
        <Card.Header>
            <h2>Front-End Development</h2>
        </Card.Header>
        <ListGroup className="ListGroup">
            <ListGroup.Item className="ListedItem"> HTML<span><FontAwesomeIcon icon={faHtml5} size="1.5x" style={{color:"#E44D26", verticalAlign:"middle", paddingBottom: "5px"}} /></span></ListGroup.Item>
            <ListGroup.Item className="ListedItem">CSS <span><FontAwesomeIcon icon={faCss3} size="1.5x" style={{ color:"blue", verticalAlign:"middle", paddingBottom: "5px"}}/></span></ListGroup.Item>
            <ListGroup.Item className="ListedItem">JavaScript<span><FontAwesomeIcon icon={faJs} size="1.5x" style={{color:"f0db4f", verticalAlign:"middle", paddingLeft:"5px",paddingBottom: "5px" }}/></span></ListGroup.Item>
            <ListGroup.Item className="ListedItem">React</ListGroup.Item>
            <ListGroup.Item className="ListedItem">UI/UX Design</ListGroup.Item>
            <ListGroup.Item className="ListedItem">Front-End Frameworks: React.js, Bootstrap</ListGroup.Item>
        </ListGroup>
        </Card>
     </div>
     <div className="SkillsCards">
     <Card>
        <Card.Header>
            <h2>Back-End Development</h2>
        </Card.Header>
        <ListGroup variant="flush" className="ListGroup">
            <ListGroup.Item className="ListedItem">Node.js</ListGroup.Item>
            <ListGroup.Item className="ListedItem">Express.js</ListGroup.Item>
            <ListGroup.Item className="ListedItem">Python</ListGroup.Item>
            <ListGroup.Item className="ListedItem">Django</ListGroup.Item>
            <ListGroup.Item className="ListedItem">Relational Database: PostgreSQL</ListGroup.Item>
            <ListGroup.Item className="ListedItem">NoSQL Databases: MongoDB</ListGroup.Item>
            <ListGroup.Item className="ListedItem">RESTful APIs</ListGroup.Item>
        </ListGroup>
        </Card>
     </div>
     <div className="SkillsCards">
     <Card>
        <Card.Header>
            <h2>Additional Skills</h2>
        </Card.Header>
        <ListGroup variant="flush" className="ListGroup">
            <ListGroup.Item className="ListedItem">Git and Version Control</ListGroup.Item>
            <ListGroup.Item className="ListedItem">Deployment and Server Management(Vercel & Render)</ListGroup.Item>
            <ListGroup.Item className="ListedItem">API Integration</ListGroup.Item>
            <ListGroup.Item className="ListedItem">Django</ListGroup.Item>
            <ListGroup.Item className="ListedItem">Relational Database: PostgreSQL</ListGroup.Item>
            <ListGroup.Item className="ListedItem">NoSQL Databases: MongoDB</ListGroup.Item>
            <ListGroup.Item className="ListedItem">RESTful APIs</ListGroup.Item>
        </ListGroup>
        </Card>
     </div>
    </div>
     </>
    )
}

export default SkillsPage