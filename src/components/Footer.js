import "./FooterStyles.css"

import React from 'react'

import {FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk,FaPhone, FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">

        <div className="footer-container">
            <div className="left">
         <div className="location">
            <FaHome size={20} style={{color:"white",marginRight:"2rem"}}/>


            <div>
                <p>Nerkundram,Chennai</p>
                <p>Tamil Nadu</p>
            </div>
         </div>


         <div className="phone">
            <h4>
            <FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/>
         8056947780/9360263251
            </h4>
         
         </div>



         <div className="email">
            <h4>
            <FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/>
         rampoet5@gmail.com
            </h4>
         
         </div>

            </div>
            <div className="right">
                <h4>About Myself</h4>
                <p>I am a react developer attempting to merge more skills through implementation.
    
                </p>

              <div className="social">

               <a href="https://www.facebook.com/siva.jaya.180?mibextid=ZbWKwL" >
              <FaFacebook size={30} style={{color:"white",marginRight:"1rem"}}/></a>

           
              <a href=" https://twitter.com/SShakthiram?t=5WyaKWyJu1_lBkzN76nJ8A&s=08"><FaTwitter size={30} style={{color:"white",marginRight:"1rem"}}/></a>

              <a href="https://www.linkedin.com/in/siva-shakthi-ram-5b7561255"><FaLinkedin size={30} style={{color:"white",marginRight:"1rem"}}/></a>

             <a href="https://instagram.com/sivashakthiram_imayam?igshid=ZDdkNTZiNTM="> <FaInstagram size={30} style={{color:"white",marginRight:"1rem"}}/></a>

              </div>

            </div>
            
        </div>
      
    </div>
  )
}

export default Footer
