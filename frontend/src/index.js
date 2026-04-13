import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from "react-router-dom";  
import './index.css'; 

 import Navbar from "./Navbar"; 
import Footer from "./Footer"; 

import HomePage from './landing_page/home/HomePage';
import AboutPage from './landing_page/about/AboutPage';
import ProductsPage from "./landing_page/products/ProductsPage";   
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import Signup from "./landing_page/signup/Signup";

import Login from "./landing_page/login/Login"; 

//import Dashboard from "./landing_page/dashboard/Dashboard"; 
 
//  import NotFound  from './landing_page/NotFound';   

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>   
    <Navbar/>

    <Routes>
    <Route path="/" element={<HomePage/> }></Route>
     <Route path="/signup" element={<Signup/> }></Route> 
      <Route path="/login" element={<Login />} ></Route> 
     
      <Route path="/about" element={<AboutPage/> }></Route>
       <Route path="/products" element={<ProductsPage/> }></Route>
        <Route path="/pricing" element={<PricingPage/> }></Route>
         <Route path="/support" element={<SupportPage/> }></Route>
          {/* <Route path="/dashboard" element={<Dashboard />} />   */} 
         
         {/* 404 always last */} 
         {/* <Route path='*' element={<NotFound />}> </Route>  */}
   </Routes>
   
   <Footer />   
   </BrowserRouter>  
 </React.StrictMode>
);

