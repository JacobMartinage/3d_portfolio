import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { projects } from '../constants';


const ProjectCard = ({name, description, index, tags, image, source_code_link}) => {
  return (
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
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl'/>
         
        <div className = "absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick = {() => window.open(source_code_link, "_blank")}
            className = "black-gradient w-10 h-10 rounded-full flex items-center justify-center cursor-pointer"
          >
            <img src={github} alt="github" className='w-6 h-6 object-contain'/>


          </div>
          </div> 
        </div>
        <div>
          <h3 className = 'blue-to-pink-gradient font-bold text-[24px]'>{name}</h3>
          <p className = 'mt-2 text-secondary text-[13px]'>{description}</p>
        </div>

        <div className = 'flex flex-wrap gap-2 mt-4'>
          {tags.map((tag) => (
            <p key = {tag.name} className = {`text-[13px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}><span className='blue-to-pink-gradient'>Projects</span></h2>
      </motion.div>

      <div className='w-full flex'>
          <motion.p
            variants = {fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]'
            >
            Here are some of the projects I have worked on, click on the github icon to view the source code!
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

export default SectionWrapper(Works, "works");