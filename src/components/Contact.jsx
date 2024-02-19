import { useState, useRef} from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { MailboxCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';


//
//service_2vxcnum
//YkNmtMMqXxvYoOTBV

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({...form, [name]: value});
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
    'service_2vxcnum', 
    'template_srn9ref',
    {
      from_name: form.name,
      to_name: 'Jacob',
      from_email: form.email,
      to_email: 'me@jacobmartinage.com',
      message: form.message,
    },
    'YkNmtMMqXxvYoOTBV'
    )
    .then(() => {
      setLoading(false);
      alert('Thank You, I will get back to you as soon as possible!');
      setForm({
        name: "",
        email: "",
        message: "",
      })
      
    },
    (error) => {
      setLoading(false);
      console.log(error);
      alert('Something went wrong, please try again later');
    });
  }
  
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div 
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 rounded-2xl p-8'
      >
        <p className = {styles.sectionSubText}>Get in Touch</p>
        <h2 className={styles.sectionHeadText}><span className='blue-to-pink-gradient'>Contact</span></h2>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='flex flex-col gap-8 mt-12'
        >
          <label className = "flex flex-col">
            <p className='font-medium mb-1 text-[18px]'><span className = 'blue-to-pink-gradient '>Your Name </span></p>
            <input 
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className = 'bg-black-200 p-3 rounded-md text-white outline-none'></input>
          </label>
          <label className = "flex flex-col">
          <p className='font-medium mb-1 text-[18px]'><span className = 'blue-to-pink-gradient '>Your Email </span></p>
            <input 
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className = 'bg-black-200 p-3 rounded-md text-white outline-none'></input>
          </label>
          <label className = "flex flex-col">
          <p className='font-medium mb-1 text-[18px]'><span className = 'blue-to-pink-gradient '>Your Message </span></p>
            <textarea 
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className = 'bg-black-200 p-3 rounded-md text-white outline-none'></textarea>
          </label>
          <button 
            type="submit"
            className = 'blue-pink-gradient py-3 px-8 rounded-xl text-white font-bold outline-none'
          >
            {loading ? "Sending..." : 'Send'}
          </button>
        </form>

      </motion.div>

      <motion.div 
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] w-full '
      >
        
        <MailboxCanvas/>

        
        
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");