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
    Portfolio,
    vt,
    ga1,
    ga2,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "",
      title: "Home",
    },
    {
      id: "tech",
      title: "Tech",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "works",
      title: "Projects",
    },
    {
      id: "education",
      title: "Education",

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

  const educationData = [
    {
      title: "Virginia Tech",
      icon: vt,
      description: "I am currently a Freshman at Virginia Tech, majoring in Computer Science. I am a member of BOLT @ VT (Battery Operated Land Transport) an electric motorcycle design team, working on wheelie control for a custom electric dirtbike. I am also a member of a research lab @ VT called the Prime Lab, working on a HCI project for integrating AI into education and helping professors better understand their students learning and progress.",
      gpa: "GPA: 3.7",
      date: "Expected Graduation: May/2026",
        
    }
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
      title: "Researcher",
      company_name: "Virginia Tech",
      icon: vt,
      iconBg: "#383E56",
      date: "Jan 2024-Present",
      points: [
        "Research assistant on HCI (Human Computer Integration) project for the integration of AI LLMs into higher education",
        "Developed web application with a task information panel, a coding interface, and a chat connected to a custom ChatGPT agent, designed for use in introductory coding classes",
        "Built PostgreSQL database and connected it to Amazon AWS, which collected keystroke, mouse data, and questions/responses to/from the built-in AI assistant",       
      ],
    },
    {
      title: "Backend Software Engineering Intern",
      company_name: "General Atomics CCRI",
      icon: ga1, 
      iconBg: "#13306C", 
      date: "June 2024 - August 2024",
      points: [
          "Upcoming internship focused on backend software engineering at General Atomics CCRI." 
         
      ],
  },
    
  ];
  

  
  const projects = [
    {
        name: "My Personal Portfolio",
        description:
          "This website! I built this site primarily with React and Tailwind CSS. It is a responsive, single-page application that utilizes Three.js to incorporate custom 3D models that I made throughout the website, showcasing my skills and projects. I'm really proud of how it turned out!",
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
          name: "Python",
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
  
  export { services, technologies, experiences, projects, educationData };