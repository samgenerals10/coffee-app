import React from "react";
import { Carousel} from 'react-bootstrap';
import coffee1 from '../../images/Banner1.png';
import coffee2 from '../../images/Banner 2.png';
import coffee3 from '../../images/Banner3.png';
import './Carousel.css'






function Caro() {
  return (
    <>
    <Carousel className="position-relative carousel_div">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={coffee1}
        alt="First slide"
        height={600}
        width={1000}
      />
      <Carousel.Caption className="position-absolute top-50 translate-middle end-50">
      <h1 className="carousel_header_text">COFFEE</h1>
      <h3>SERVICE FOR OFFICE</h3>
      <h3>BREAKROOMS  AND</h3>
      <h3>FREE DELIVERY</h3>
      <button type="button" className="btn btn-outline-danger rounded-pill botton_list">Shop Now</button>
        
      </Carousel.Caption>
      
    </Carousel.Item>

    <Carousel.Item>
      <img
        className="d-block w-100"
        src={coffee2}
        alt="Second slide"
        height={600}
        width={1000}
      />

      <Carousel.Caption className="position-absolute translate-middle-y top-50 start-50">
      <h1 className="carousel_header_text">COFFEE</h1>
      <h3>SERVICE FOR OFFICE</h3>
      <h3>BREAKROOMS  AND</h3>
      <h3>FREE DELIVERY</h3>
      <button type="button" className="btn btn-outline-danger rounded-pill botton_list">Shop Now</button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={coffee3}
        alt="Third slide"
        height={600}
        width={1000}
      />

      <Carousel.Caption className="position-absolute translate-middle top-50 end-50">
      <h1 className="carousel_header_text">COFFEE</h1>
      <h3>SERVICE FOR OFFICE</h3>
      <h3>BREAKROOMS  AND</h3>
      <h3>FREE DELIVERY</h3>
      <button type="button" className="btn btn-outline-danger rounded-pill botton_list">Shop Now</button>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </>


   
  )
}

export default Caro