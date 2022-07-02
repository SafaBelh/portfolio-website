import React from 'react'
import "./Intro.css"

import Github from "../../img/github.png"
import Linkedin from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png"
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import Boy from "../../img/boy.png"
import Thumbup from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import GlassesEmoji from "../../img/glassesemoji.png"
import FloatingDiv from './FloatingDiv'


const Intro = () => {
  return (
    <div className='intro'>
        <div className="intro-left-side">
            <div className="intro-name">
                <span>Hi ! I am </span>
                <span>Andrew Thomas</span>
                <span>Frontend Developer with high level of experience in web designing and development , producting the Quality work </span>
            </div>
            <button className="intro-button button">Hire me</button>
            <div className="intro-icons">
                <a href="#">
                  <img src={Github} />
                </a>
                <a  href="#">
                  <img src={Linkedin} />
                </a>
                <a  href="#">
                  <img src={Instagram} />
                </a>
            </div>
            

        </div>
        <div className="intro-right-side">
            <img src={Vector1} />
            <img src={Vector2} />
            <img src={Boy} />
            <img src={GlassesEmoji} />
            <div style={{top:'2%' , left : '67%'}}>
                <FloatingDiv image ={Crown} text1={"Web"} text2={"Developer"}/>
            </div>
            <div style={{top:'81%', left : '-1%' }}>
                <FloatingDiv image ={Thumbup} text1={"Best Design"} text2={"Award"}/>
            </div>

            {/* Blur Divs */}
            {/* <div className='blur' style={{background:"rgb (236 210 255)"}}></div> */}

        </div>
        
    </div>
  )
}

export default Intro