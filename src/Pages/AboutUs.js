import React from "react";
import "./AboutUs.css";
import { Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import aboutPhoto from "../images/ABOUTPHOTO.jpg";

const AboutUs = () => {
  return (
    <div className="about_box" id="about">
      <br/>
      <br/>
      <Row className="mx-auto" text-center="true">
        <Col >
          <img className="rounded about_image" src={aboutPhoto} height={450} width={400} />
        </Col>
        
      <div className="card_mainBox_Style">
      
         <Col>
          <Card className="cardStyle " style={{ width: "30rem" }}>
            <Card.Body>
              <Card.Title>
                <h1 className="P_Text_head text-start">ABOUT US</h1>
              </Card.Title>

              <p className="P_Text text-start" > 
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.Some 
                quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.Some 
                quick example text to build on the card title and make up
                the bulk of the card's content.
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.Some 
                quick example text to build on the card title and make up
                the bulk of the card's content. 
              </p>

             <button type="button" className="btn btn-outline-danger rounded-pill  botton_list">Read More</button>
            </Card.Body>
          </Card>
         </Col>
        </div>
      </Row>
    </div>
  );
};

export default AboutUs;
