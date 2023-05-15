import "./AboutContentStyles.css";

import React from 'react';

import AboutContent1 from "./AboutContent1";
import AboutContentData from "./AboutContentData";



const AboutContent = () => {
  return (
    <div>
    {AboutContentData.map((val1,ind1)=>{
        return(<AboutContent1
        key={ind1}
        def={val1.def}
        msg={val1.msg}
        imgab={val1.imgab}
        imgab1={val1.imgab1}
        />)
      })}
      </div>

  )
}





export default AboutContent;
