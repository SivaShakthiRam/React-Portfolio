import "./AboutContentStyles.css";

import React from 'react';
import { Link } from "react-router-dom";




const AboutContent1 = (props) => {
  return (
    <div className="about">
        <div className="left">
            <h1>{props.def}</h1>
            <p>{props.msg}</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={props.imgab} className="img" alt="true"></img>
                </div>

                <div className="img-stack bottom">
                    <img src={props.imgab1} className="img" alt="true"></img>
                </div>
            </div>
        </div>      
   
    </div>

  )
}





export default AboutContent1;
