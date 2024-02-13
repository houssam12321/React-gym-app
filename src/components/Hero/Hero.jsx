import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import Heart from "../../assets/heart.png"
import Calories from "../../assets/calories.png"
import NumberCount from "number-counter"
import {Link} from "react-scroll" 


import {motion} from 'framer-motion'
const Hero = () => {
  const transition = {type: 'spring',duration: 3}
  return (
    <div className="hero">
      <div className="blur hero-blur">

      </div>
        <div className="left-h">
            <Header/>
            {/*the best ad*/}
            <div className="ad">
                <motion.div
                initial={{left: '190px'}}
                whileInView={{left: '8px'}}
                transition={{...transition,type:'tween'}}
                >
                  

                </motion.div>
                <span>The best gym in town is here  </span>
            </div>
            {/*Hero heading */}
            <div className="hero-text">
              <div>
              <span className='stroke-text'>Elevate </span>
              <span> Your</span>
              </div>
              
              <div>
              <span> Fitness </span>
              <span className='stroke-text'>  Journey</span>

              </div>
              <div>
              <span> </span>
              </div>
              
              <div className='T-h'>
              <span className='text-h'>
                Here we will help you to shape and build your body with latest machine and technologies of fitness world .
              </span></div>
              <div>
              </div>
            </div>

            <div className="figures">
              <div>
                <span>
                  <NumberCount end={140} start={100} preFix="+" delay='4'/>
                  
                </span>
                <span>expert coaches</span>
              </div>
              <div>
                <span>
                <NumberCount end={456} start={400} preFix="+" delay='4'/>
                </span>
                <span>members joined</span>
              </div>
              <div>
                <span>
                <NumberCount end={50} start={0} preFix="+" delay='2'/>

                </span>
                <span>fitness programs</span>
              </div>
            </div>
            {/* hero buttons */}
            <div className="hero-buttons">
              <button className='btn'>Get Started</button>
              <button className='btn'>Learn More</button>
            </div>
              
            
        </div>
        <div className="right-h">
          <button className='btn'>
          <Link
            to='Join' spy={true} smooth='true'>Join now</Link>
            </button>

          <motion.div 
              initial={{right: '-1rem'}}
              whileInView={{right: '4rem'}}
              transition={transition}
              className='heart-rate'>
            <img src={Heart} alt="" />
            <span>Heart Rate</span><span> 
            <NumberCount end={110} start={90} preFix="bpm" delay='4'/>
 </span>
          </motion.div>
          {/*hero images*/}
          <img src={hero_image} alt="" className='hero-image' />
          <motion.img 
          initial={{right: '11rem'}}
          whileInView={{right: '20rem'}}
          transition={transition}
          src={hero_image_back} alt="" className='hero-image-back'/>
          {/*calories*/}
          <motion.div 
          initial={{right: '20rem'}}
          whileInView={{right: '25rem'}}
          transition={transition}
          className='calories'>
            <img src={Calories} alt="" />
            <div>
            <span>Calories Burned</span><span>220 kcal</span>
            </div>


          </motion.div>
          
        </div>


    </div>
  )
}

export default Hero;
