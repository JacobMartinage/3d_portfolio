import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components'; 

const App = ()  => {

  return (
    <BrowserRouter>
      <div className = "relative z-0 bg-primary">
      <StarsCanvas/>
        <div className = "bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <div>
        
        <About />
        <Tech />
        <Experience />
        
        <Works />
        
        
        <Contact />
        </div>
        

      </div>
      </BrowserRouter>
       
  )
}

export default App
