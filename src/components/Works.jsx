import Tilt from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets''
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { projects } from '../constants';

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
          <motion.p
            variants = {fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]'
            >
            Here are some of the projects I have worked on.
          </motion.p>

      </div>
    
    
    
    </>
  )
}

export default SectionWrapper(Works, "");