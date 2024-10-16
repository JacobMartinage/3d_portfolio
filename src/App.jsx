import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, Education, StarsCanvas } from './components'; 



const App = ()  => {

  return (
    <BrowserRouter>
      <div className = "relative z-0 bg-primary">
      
        <StarsCanvas/>
        <Navbar />
        <Hero />


        
        {/*<About />*/} 
        <Tech />
        <Experience />
        
        <Works />
        
        <Education/>
        <Contact />

        

      </div>
      
      </BrowserRouter>


       
  )
}

export default App
