import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { projects } from '../constants';


const ProjectCard = ({name, description, index, tags, image, source_code_link}) => {
    <motion.div variants={fadeIn("up", "spring", index* 0.5, 0.75)}
    >
      <Tilt
        options= {{
          max: 45,
          scale: 1,
          speed: 450


        }}
        className = "p-5 bg-tertiary rounded-2xl shadow-card sm:w-[360px] w-full"
        
        >

      </Tilt>
    </motion.div>

  }

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
      <div className = 'mt-20 flex flex-wrap gap-10 justify-center'>
          {projects.map((project, index) => (
            <ProjectCard key ={`project-${index}`} {...project} index = {index}/>
          
          ))}
      </div>
    
    
    </>
  )
}

export default SectionWrapper(Works, "");