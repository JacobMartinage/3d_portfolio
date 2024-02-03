import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion'

import { styles } from '../styles';
import { services } from  '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';

import { TrackCanvas } from './canvas';

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className= "xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.65 * index, 1.5)}
      className = "w-full blue-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options = {{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img src = {icon} alt={title}
            className='w-16 h-16 object-contain flex justify-center' />
            <h3 className='text-white text-[20px] font-bold text-center'>
              {title}
              </h3>
     
        </div>

      </motion.div>
    </Tilt>

  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className = {styles.sectionSubText}>What I do</p>
        <h2 className='flex text-[100px] font-semibold mt-2'><span className='blue-to-pink-gradient'>Introduction</span></h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className= 'mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]'
        >
        I'm a skilled software developer with skills in Javascript and 
        experience with frameworks such as Three.js, React, and Node.js. 
        I am a fast learner and love to take on challenging problems that require creative and innovative solutions. 
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key = {service.title} index = {index} {...service}/>
        ))}

      </div>
      
      
    </>
  )
}

export default SectionWrapper(About, "about")