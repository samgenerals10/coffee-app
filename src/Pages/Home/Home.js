import React from 'react';
import './Home.css';
import { Container } from 'react-bootstrap';
import Caro from '../../Componenets/Carousel/Carousel';
import AboutUs from '../AboutUs';
import CommonQuestion from '../CommonQuestion';
import ContactUs from '../ContactUs';
import News from '../News';
import Navbars from '../../Componenets/Navbar/Navbar';
import OurServices from '../Our-Services';

function Home() {
  return (
    <Container className="container-fluid" id="home">
      <Navbars/>
      <Caro/>
      <OurServices />
      <AboutUs/>
      <News />
     <CommonQuestion/>
     <ContactUs/>
    </Container>
  )
}

export default Home