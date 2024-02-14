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
      title: "Currently searching for a Summer 2024 Internship",
      company_name: "Anywhere, looking for Web Dev/SWE roles",
      icon: question,
      iconBg: "#383E56",
      date: "Summer 2024",
      points: [
        "As a Freshman in CS, I have little to no previous professional experience, but I am hoping to begin my professional CS career with an internship this summer",
        "To any hiring managers reading this, I am a hardworking and dedicated individual who is eager to learn and contribute to any team, and you will not regret bringing me on board!",       
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