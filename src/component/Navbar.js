import React from "react";
import "./NavbarStyles.css";
import Marquee from "react-fast-marquee";

export const Navbar = () => {
    return (
      <>  
          <nav>
            <img src={require('../assets/header-img.png')} alt='logo'></img>
          </nav>
          <Marquee style={{background:"blue"}}>
            <h3>5% DISCOUNT ON ALL ESPRESSO BAR DRINKS!! BUY NOW!</h3> 
          </Marquee>
      </>
    )
  }