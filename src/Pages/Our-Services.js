import React from "react";
import './Our-Services.css';
import { Col, Placeholder, Row } from "react-bootstrap";
import imagthumb1 from "../../src/images/thumbnail1.jpg";
import imagthumb2 from "../../src/images/thumbnail2.jpg";
import imagthumb3 from "../../src/images/thumbnail3.jpg";
import imagthumb4 from "../../src/images/thumbnail4.jpg";

export const OurServices = () => {
  return (
    <div className="fs-1  text-center services fw-bold" id="services">
      <br/>
      <br/>
      
      
  <marquee behavior="scroll" direction="">
    <h1>OUR SERVICES</h1></marquee>

      
    <br/>
      
      
      <Row className="main_box">
        
        <Col className="mid_box" xs={4} md={3}>
          
            <div className="img_box">
              <img src={imagthumb1} className="img-thumbnail service-image" alt="..." />
            </div>
              <br/>
          <div className="text_content">
            <h2>FOOD & BEVERAGE</h2>
            <button type="button" class="btn btn-outline-danger  i bi bi-arrow-right-circle ">coffee </button>
            <p>Lorem Ipsum is simply dummy 
            text of the printing and typesetting industry.
          </p>
          </div>
          
        </Col>
        

      
        <Col className="mid_box" xs={4} md={3}>
          
          <div className="img_box">
          <img src={imagthumb2} className="img-thumbnail" text-center alt="..." />
          </div>
          <br/>
          <div className="text_content">
          <h2>COFFEE & TEA</h2>
          <p>Lorem Ipsum is simply dummy 
            text of the printing and typesetting industry.
          </p>
          <button type="button" class="btn btn-outline-danger">coffee</button>
          </div>
          
        </Col>
      


        <Col className="mid_box" xs={4} md={3}>
        
          <div className="img_box">
          <img src={imagthumb3} className="img-thumbnail" alt="..." />
          </div>
          <br/>
          <div className="text_content">
          <h2>PEPER, & JANITORIA</h2><p>Lorem Ipsum is simply dummy 
            text of the printing and typesetting industry.
          </p>
          
          <button type="button" class="btn btn-outline-danger">coffee</button>
          </div>
          
        </Col>

        <Col className="mid_box" xs={4} md={3}>
          <div className="img_box">
          <img src={imagthumb4} className="img-thumbnail fw-lighter" alt="..." />
          </div>
          <br/>
          <div className="text_content">
          <h2>BREWERS EQIUPMENT</h2>
          <p>Lorem Ipsum is simply dummy 
            text of the printing and typesetting industry.
          </p>
          <button type="button" class="btn btn-outline-danger">coffee</button>
          </div>
        </Col>
        
      </Row>
     
      
      
    </div>
    



    



  );
};
export default OurServices;
