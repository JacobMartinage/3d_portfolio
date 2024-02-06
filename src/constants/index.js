import {
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    question,
    threejs,
    swift,
    java,
    python,
    YTSummarizer,
    envoLogo2,
    Portfolio
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    }, 
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Swift",
      icon: swift,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Currently searching for a Summer 2024 Internship",
      company_name: "Anywhere, looking for Web Dev/SWE roles",
      icon: question,
      iconBg: "#383E56",
      date: "Summer 2024",
      points: [
        "As a Freshman in CS, I have little to no previous professional experience, but I am hoping to begin my professional CS career with an internship this summer",
        "I have been searching for and applying to numerous internships in the hopes of gaining valuable experience and knowledge",
        "In the hopes of getting a head start on my career, I have been working on  projects and learning new technologies and languages while working on coursework and applying for intern positions",
        "To any hiring managers reading this, I am a hardworking and dedicated individual who is eager to learn and contribute to any team, and you will not regret bringing me on board!",
        "Hopefully, this space will get filled with a company soon!",        
      ],
    },
    
  ];
  

  
  const projects = [
    {
        name: "My Personal Portfolio",
        description:
          "My personal portfolio website, built primarily with React and Tailwind CSS. It is a responsive, single-page application that showcases my skills, projects, and experiences.I also utilized Three.js to incorporate custom 3D models that I made throughout the website, making it feel almost alive. I'm really proud of the final product!",
        tags: [
          {
            name: "React",
            color: "blue-text-gradient",
          },
          {
            name: "TailwindCSS",
            color: "green-text-gradient",
          },
          {
            name: "Three.js",
            color: "pink-text-gradient",
          },
        ],
      
        image: Portfolio,
        source_code_link: "https://github.com/JacobMartinage/3d_portfolio",
      },
      {
      name: "Envo",
      description:
        "Envo is a chatbot/web app I helped to develop at VTHacksX that used a ML model to predict the carbon footprint of current, future, and hypothetical cars based on various parameters, and would return its confidence in this answer. Placed third in the Environmental Machine Learning category at VTHacksX!",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "green-text-gradient",
        },
        {
          name: "Twilio",
          color: "pink-text-gradient",
        },
      ],
      image: envoLogo2,
      source_code_link: "https://github.com/ramankc6/VTHacks2022",
    },
    {
      name: "YTSummarizer",
      description:
        "Web app connected to ChatGPT's Davinci model that summarized YouTube videos through use of API call to get the video transcript and then summarizing it with Davinci",
      tags: [
        {
          name: "Javascript",
          color: "blue-to-pink-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        
      ],
      image: YTSummarizer,
      source_code_link: "https://github.com/JacobMartinage/VTHacks11",
    },
    
  ];
  
  export { services, technologies, experiences, projects };