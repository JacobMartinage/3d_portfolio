import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';


const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex flex-col items-center justify-top mt-3">
      <div className={`${styles.paddingX} mx-auto flex items-start gap-5 mb-1`}>
        <div className="flex flex-col justify-center items-center mt-2">
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className="w-1 sm:h-20 h-10 violet-gradient"/>
        </div>

        <div className='flex justify-left items-center'>
          <h1 className={`${styles.heroHeadText} text-white`}>
             Hi, I'm <span className="blue-to-purple-gradient">Jacob</span></h1>
        </div>
      </div>

      <div className="w-full h-[700px]">
        <ComputersCanvas />
        <div className="absolute bottom-20 rounded-3 w-full flex justify-center items-center mb-10">
        <a href="#tech">
          <div className='w-[35px] h-[64px] border-4 rounded-full border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition= {{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
      </div>

      

    
    </section>
  );
};

export default Hero;
