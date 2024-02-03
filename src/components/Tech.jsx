import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';




const Tech = () => {
  return (
    <div>
    <h2 className='flex justify-center text-[30px] font-semibold'><span className='blue-to-pink-gradient'>Technologies I use</span></h2>
    
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      
      {technologies.map((technology) => (
        <div className='w-28 h-28' key = {technology.name}>
          <BallCanvas icon = {technology.icon} />
          <div className='flex flex-col justify-center items-center'>
          <h2 className='blue-to-pink-gradient font-bold'>{technology.name}</h2>
          
        </div>
          
        </div>
        

      ))}
        
        
        </div>
    </div>
  )
}

export default SectionWrapper(Tech, "")