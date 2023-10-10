import React from 'react';
import {BrowserRouter as AppRouter, Routes,Route, Link} from "react-router-dom";
import Home from '../Pages/Home/Home';
import News from '../Pages/News';
import AboutUs from '../Pages/AboutUs';
import OurServices from '../Pages/Our-Services';
import ContactUs from '../Pages/ContactUs';



 function Routers() {
  return (
    <AppRouter>
      {/* <Home/> */}
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<OurServices/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
    </AppRouter>

      

    

  )
};

export default Routers;
