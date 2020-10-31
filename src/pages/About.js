import React from 'react';
import '../style/about-me.css';
import bioPic from '../Images/6F158DA2-E8CB-46AB-B929-8FF629398098_1_105_c.jpeg'

export const About = () => {
    return(
    <div className = "container main">
      <div className = "main-box col-xs-12 col-md-10 col-lg-6">
        <h1 className = "justify-content-start">About Me</h1>
        <hr/>
        <div className = "image-div">
          <img className = "img-fluid" src={bioPic} alt="bio"/>
        </div>  
        <p>My name is Harbour Harrison and I am currently working as a Data Analyst for a Startup Company in the horseracing business.
          I recently recieved a Bachelor of Arts in Mathematics with a minor in Economics from Willamette University in Salem, Oregon. 
          Along my journey as a mathematics major, I have become familiar with databases and programs such as SQL, R, and Latex. 
          Some examples of my undergraduate prjects can be found at the portfolio page of my website. On top of gaining knowledge
          in the field of Data Analytics, I am currently learning how to be a full-stack web developer through a UC Berkeley 
          Extention bootcamp, where I will learn both front-end and back-end web development skills.
          <br/>
          During my time at Willamette, I not only worked to excel in academics, but athletics and music as well. I was a member of the 
          Willamette Baseball team and the lead trumpet in both the University Jazz Collective and Orchestra for all 4 years. As a baseball 
          player who has always been behind the curve physically, my attention the mental game and drive to compete have been an intricate part 
          of my play style.  After 15 years of playing, this mindset and attention to detail are rooted in anything that I am involved in. 
          <br/>
          Below you will find my contact information, and link to my facebook:

          <ul>
            <li>Email: harb3gaucho@gmail.com</li>
            <li>Phone: (510) 520-4002</li>
            <li><a href="https://www.facebook.com/harbour.harrison/" target="_blank" rel="noreferrer">Facebook</a></li>
          </ul>
        </p>
      </div>
    </div>
    )
}
