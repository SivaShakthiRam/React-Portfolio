import "./HeroImgStyles.css";

import {Link} from "react-router-dom";
import deve7 from "../assets/deve7.jpg";




import React from 'react'

const HeroImg = () => {
  return (
    
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={deve7} alt="IntroImg"></img>
           
           <div className="row">
            <div className="col sm">
         

            </div>
           </div>
            
         

            <div className="content">
                <p>HI,I'M SIVA SHAKTHI RAM</p>
                <h1>React Developer</h1>
               
                <div>
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contacts</Link>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default HeroImg;
