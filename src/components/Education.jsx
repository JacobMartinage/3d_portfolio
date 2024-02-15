import React from 'react';
import { motion } from 'framer-motion'

import { styles } from '../styles';
import { educationData } from  '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { Tilt } from 'react-tilt';


import { SectionWrapper } from '../hoc';

const EducationCard = ({index, title, icon, description, gpa, date}) => {
    return (
      <div className= "w-[80%]">
        <motion.div
        variants={fadeIn("right", "spring", 0.65 * index, 1.5)}
        className = "w-full blue-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-left items-left'>  
          <div
            options = {{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className='flex flex-row justify-around items-top'
            >
                <div>
                <img src = {icon} alt={title}
                className='w-20 h-20 object-contain flex justify-center' />
                <h3 className='mt-2 text-white text-[30px] font-bold text-left'>
                    {title}               
                </h3>
                </div>
                <h3 className='mt-4 text-white text-[25px] font-bold text-left mx-[auto]'>
                    {gpa}
                </h3>
                <h3 className='mt-4 text-white text-[25px] font-bold text-left mx-4 width-[20px]'>
                    {date}
                </h3>

            
       
          </div>
            <p className = 'mt-2 text-secondary text-[17px] max-w-3x1 leading-[30px]'>
                {description}
            </p>
            
          </div>
  
        </motion.div>
      </div>
  
    )
  }

//test
const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className = {styles.sectionSubText}>What I've Learned</p>
        <h2 className={styles.sectionHeadText}><span className='blue-to-pink-gradient'>Education</span></h2>
      </motion.div>


      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {educationData.map((educationData, index) => (
          <EducationCard key = {educationData.title} index = {index} description={educationData.description} {...educationData}/>
        ))}

      </div>
      
      
    </>
  )
}

export default SectionWrapper(Education, "")