import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { motion } from 'framer-motion';
import { fadeIn} from '../utils/motion';


const Tech = () => {
  return (
    <div>
      
    <h2 className='flex justify-center text-[30px] font-semibold'><span className='blue-to-pink-gradient'>Technologies I use</span></h2>
    <div className='w-full flex justify-center'>
          <motion.p
            variants = {fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] flex justify-center unselectable'
            >
            Below are languages, frameworks, libraries, and other technologies I have experience with through my coursework or personal projects.
          </motion.p>

    </div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      
      {technologies.map((technology) => (
        <div className='w-28 h-28' key = {technology.name}>
          <BallCanvas icon = {technology.icon} />
          <div className='flex flex-col justify-center items-center'>
          <h2 className='blue-to-pink-gradient font-bold unselectable'>{technology.name}</h2>
          
        </div>
          
        </div>
        

      ))}
        
        
        </div>
    </div>
  )
}

export default SectionWrapper(Tech, "tech")