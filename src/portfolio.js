/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
};

//Home Page
const greeting = {
  title: "Hi",
  title2: " I'm Sumit Sharma",
  logo_name: "Sumit Sharma",
  // nickname: "harry / picleric",
  full_name: "Sumit Sharma",
  subTitle1: "Full Stack Developer.",
  subTitle2: "Life Long Learner.",
  subTitle: "Full Stack Developer, Life Long Learner.",
  resumeLink:
    "https://drive.google.com/file/d/1lFqkZnNUg5N2muUuv6qIF6so6xloY6-4/view?usp=sharing",
  mail: "mailto:sumitsharma9968@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/sumit-sharma-02",
  linkedin: "https://www.linkedin.com/in/sumitsharma002",
  gmail: "sumitsharma9968@gmail.com",
  twitter: "https://twitter.com/sumitsharma002",
};

const skills = {
  data: [
    {
      _id: "354c54b7-ffd8-40f1-972f-1d006733df25",
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive user interfaces and backend for web applications",
        "⚡ Building responsive website front end using React and Angular",
        "⚡ Creating application backend in Node, Express, MongoDB and Rest API",
        "⚡ Integration of third party services such as Firebase, Vercel etc.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0769ad",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#593D88",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            color: "#dd0031",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "gray",
          },
        },
        {
          skillName: "Material UI",
          fontAwesomeClassname: "simple-icons:uikit",
          style: {
            color: "#007FFF",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "logos:tailwindcss-icon",
          style: {
            color: "#635BFF",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Framer Motion",
          fontAwesomeClassname: "logos:framer",
          style: {
            color: "#635BFF",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Styled Components",
          fontAwesomeClassname: "vscode-icons:file-type-styled",
          style: {
            color: "#635BFF",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Cloudinary",
          fontAwesomeClassname: "logos:cloudinary-icon",
          style: {
            color: "#635BFF",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Stripe",
          fontAwesomeClassname: "logos:stripe",
          style: {
            color: "#635BFF",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      _id: "c026fe64-1542-42b0-84ab-9311840c169f",
      title: "Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "Google Cloud Platform",
          fontAwesomeClassname: "skill-icons:gcp-dark",
          style: {
            backgroundColor: "transparent",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "skill-icons:vercel-light",
          style: {
            color: "gray",
            fill: "gray",
            // backgroundColor: "white",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
            width: "1em",
            height: "1em",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
            width: "1em",
            height: "1em",
          },
        },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
            width: "1em",
            height: "1em",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Amrita Vishwa Vidyapeetham, Coimbatore",
      subtitle: "Masters in Computer Applications (MCA)",
      logo_path: "amrita_logo.png",
      alt_name: "Amrita University",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence, Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have done courses on Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://www.amrita.edu/",
    },
    {
      title: "Guru Gobind Singh Indraprastha University, New Delhi",
      subtitle: "Bachelors in Computer Applications (BCA)",
      logo_path: "ggsipu_logo.png",
      alt_name: "GGSIPU",
      duration: "2018 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        // "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development."
      ],
      website_link: "http://www.ipu.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Frontend Developer Capstone",
      subtitle: "",
      logo_path: "meta_logo.png",
      certificate_link:
        "https://coursera.org/share/f80912b58e3afcfa49e6116210a2c9da",
      alt_name: "Meta",
      color_code: "#096ce1",
    },
    {
      title: "Advanced React",
      subtitle: "",
      logo_path: "meta_logo.png",
      certificate_link:
        "https://coursera.org/share/877acd7eaf9dd532a2cb5b103576967e",
      alt_name: "Meta",
      color_code: "#096ce1",
    },
    {
      title: "Java Programming: Build a Recommendation System",
      subtitle: "",
      logo_path: "duke-logo.jpg",
      certificate_link:
        "https://coursera.org/share/6af001cafc4b683bb38abdb9e81d0d79",
      alt_name: "Duke University",
      color_code: "#001a57",
    },
    {
      title: "React Basics",
      subtitle: "",
      logo_path: "meta_logo.png",
      certificate_link:
        "https://coursera.org/share/29c75a387fcaf2f1e2403f73473092b2",
      alt_name: "Meta",
      color_code: "#096ce1",
    },
    {
      title: "Programming with JavaScript",
      subtitle: "",
      logo_path: "meta_logo.png",
      certificate_link:
        "https://coursera.org/share/cb44f1ee2db3f50b83a56cbae15fcc74",
      alt_name: "Meta",
      color_code: "#096ce1",
    },
    {
      title: "HTML and CSS in depth",
      subtitle: "",
      logo_path: "meta_logo.png",
      certificate_link:
        "https://coursera.org/share/667de02731a480b76b5300c6612d174d",
      alt_name: "Meta",
      color_code: "#096ce1",
    },
    {
      title: "Java Programming: Principles of Software Design",
      subtitle: "",
      logo_path: "duke-logo.jpg",
      certificate_link:
        "https://coursera.org/share/f4e9af47fbb24381e04031f3cc8cfd9f",
      alt_name: "Duke University",
      color_code: "#001a57",
    },
    {
      title: "Java Programming: Solving Problems with Software",
      subtitle: "",
      logo_path: "duke-logo.jpg",
      certificate_link:
        "https://coursera.org/share/36411fcea7ea4fbb5c613ef4911f4668",
      alt_name: "Duke University",
      color_code: "#001a57",
    },
    {
      title: "Programming Foundations with JavaScript, HTML and CSS",
      subtitle: "",
      logo_path: "duke-logo.jpg",
      certificate_link:
        "https://coursera.org/share/0269c76c33997304d1842d4eef16815b",
      alt_name: "Duke University",
      color_code: "#001a57",
    },
    {
      title: "Android Application Development - II",
      subtitle: "- Dr. Adam Porter",
      logo_path: "maryland_logo.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/GN48B7W9TU59",
      alt_name: "Stanford University",
      color_code: "#e11a2b",
    },
    {
      title: "Android Application Development - I",
      subtitle: "- Dr. Adam Porter",
      logo_path: "maryland_logo.svg",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/2H59Z22DDSU8",
      alt_name: "Stanford University",
      color_code: "#e11a2b",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Christian Hur",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/97WF8EZ4Y2YD",
      alt_name: "Coursera",
      color_code: "#0056d2",
    },
    {
      title: "ML and AI in GCP",
      subtitle: "- GCP Training",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/345a17d9-689f-4154-a3d3-c0396c98b3bc/badges/2862832",
      alt_name: "GCP",
      color_code: "#2fa9508a",
    },
    {
      title: "Foundational Infrastructure in GCP",
      subtitle: "- GCP Training",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/345a17d9-689f-4154-a3d3-c0396c98b3bc/badges/2653409",
      alt_name: "GCP",
      color_code: "#4087f08a",
    },
    {
      title: "Networking & Security in GCP",
      subtitle: "- GCP Training",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/345a17d9-689f-4154-a3d3-c0396c98b3bc/badges/2510430",
      alt_name: "GCP",
      color_code: "#eb40308a",
    },
    {
      title: "Cloud Computing Fundamentals in GCP",
      subtitle: "- GCP Training",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.cloudskillsboost.google/public_profiles/345a17d9-689f-4154-a3d3-c0396c98b3bc/badges/2469792",
      alt_name: "GCP",
      color_code: "#fabd008a",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Apprenticeship",
  description:
    "I've over 2 years of experience as a full stack developer. I've worked on building products for multiple stakeholders in Infosys as well as my personal projects.",
  header_image_path: "experience.svg",
  sections: {
    title: "Work Experience",
    experiences: [
      {
        title: "System Associate",
        company: "Infosys",
        company_url: "https://www.infosys.com/",
        logo_path: "infosys-logo.png",
        alt_name: "infosys-logo",
        duration: "(Feb, 2023 - May, 2023)",
        location: "Remote",
        description:
          "<li>Launched Encharta 2.0 in a team of four with add on features such as multiple content pages in a single project, audio, custom gradients, trigger and hover based animations etc. in canvas using ReactJS v18.</li><br><li>Created a PWA named Encharta for all the educators in Infosys for creating their own analogies with add on animations in their content using HTML, CSS, JavaScript and an open source library Fabric.js.</li>",
        color: "#0071C5",
      },
      {
        title: "Operations Executive",
        company: "Infosys",
        company_url: "https://www.infosys.com/",
        logo_path: "infosys-logo.png",
        alt_name: "infosys-logo",
        duration: "(Nov, 2021 - Jan, 2023)",
        location: "Remote",
        description:
          "<li>Implemented few UI tweaks and added new categories with add on pop-ups (video, images etc.) in an web app named “Awards For Excellence” which is used for nominating employees within Infosys for various award categories using Angular v10.</li><br><li>Implemented REST API using Node and Express to fetch the data of the classrooms, learners, educators and courses. Used socket programming for multi-user experience and other features like chat, screen, audio and video share for web based AR/VR learning platform.</li><br><li>Developed 2 new tools with an intuitive design in Lex (Learning platform for the employees of Infosys) for interactive content creation using Angular v12 which is getting used by 100+ educators for creating new interactive courses, consumed by 1000+ learners.</li>",
        color: "#0071C5",
      },
      {
        title: "Java Full Stack Developer Trainee",
        company: "Infosys",
        company_url: "https://www.infosys.com/",
        logo_path: "infosys-logo.png",
        alt_name: "infosys-logo",
        duration: "(Aug, 2021 - Nov, 2021)",
        location: "Remote",
        description:
          "Worked on multiple Capstone projects using Spring Boot and Angular.",
        color: "#4285F4",
      },
    ],
  },
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create MERN and MEAN Stack Projects. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  data: [
    {
      id: "project-0",
      name: "Crafty Commerce",
      url: "https://crafty-commerce.vercel.app/",
      repoUrl: "https://github.com/sumit-sharma-02/crafty-commerce",
      description:
        "Crafty Commerce is a full stack e-commerce web application that allows you to purchase different categories of product online. You can apply filters accordingly and find your favourite products in crafty commerce. You can pay with debit/credit cards and in just few click your product will be delivered.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "Redux",
          iconifyClass: "logos:redux",
        },
        {
          name: "Express",
          iconifyClass: "simple-icons:express",
        },
        {
          name: "Nodejs",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "MongoDB",
          iconifyClass: "vscode-icons:file-type-mongo",
        },
        {
          name: "Stripe",
          iconifyClass: "logos:stripe",
        },
        {
          name: "Tailwind",
          iconifyClass: "vscode-icons:file-type-tailwind",
        },
        {
          name: "Cloudinary",
          iconifyClass: "logos:cloudinary-icon",
        },
        {
          name: "Framer Motion",
          iconifyClass: "logos:framer",
        },
      ],
    },
    {
      id: "project-1",
      name: "Tikkaway",
      url: "https://restaurant-app-bceb0.web.app/",
      repoUrl: "https://github.com/sumit-sharma-02/tikkaway",
      description:
        "Tikkaway is a full stack restaurant web application that allows you to order food online. It has wide variety of categories on the menu like Chicken, Curry, Rice, Fish, Fruits, Icecreams, Soft Drinks etc.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "Redux",
          iconifyClass: "logos:redux",
        },
        {
          name: "Firebase",
          iconifyClass: "logos:firebase",
        },
        {
          name: "Tailwind",
          iconifyClass: "vscode-icons:file-type-tailwind",
        },
        {
          name: "Framer Motion",
          iconifyClass: "logos:framer",
        },
      ],
    },
    {
      id: "project-2",
      name: "MEAN Agency",
      url: "",
      repoUrl: "https://github.com/sumit-sharma-02/mean-agency",
      description:
        "Mean Agency is a full stack service provider web application that allows you to provide services to other companies.",
      languages: [
        {
          name: "Angular",
          iconifyClass: "logos:angular-icon",
        },
        {
          name: "Express",
          iconifyClass: "simple-icons:express",
        },
        {
          name: "Nodejs",
          iconifyClass: "logos:nodejs",
        },
        {
          name: "MongoDB",
          iconifyClass: "vscode-icons:file-type-mongo",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos:bootstrap",
        },
        {
          name: "Handlebars",
          iconifyClass: "vscode-icons:file-type-handlebars",
        },
      ],
    },
    {
      id: "project-3",
      name: "Countdown Timer",
      url: "https://countdown-timer-sumit-sharma-02.vercel.app/",
      repoUrl: "https://github.com/sumit-sharma-02/countdown-timer",
      description: "A Simple React App for countdown to new year using hooks.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
      ],
    },
    {
      id: "project-4",
      name: "Portfolio",
      url: "",
      repoUrl: "https://github.com/sumit-sharma-02/sumit-portfolio",
      description: "You are watching it right now 😉.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React Reveal",
          iconifyClass: "simple-icons:scrollreveal",
        },
        {
          name: "Styled Components",
          iconifyClass: "vscode-icons:file-type-styled",
        },
      ],
    },
    {
      id: "project-5",
      name: "SpaceX Capsules",
      url: "https://spacex-capsules.vercel.app/",
      repoUrl: "https://github.com/sumit-sharma-02/spacex-capsules",
      description:
        "A React application which shows you the filtered spaceX capsules data.",
      languages: [
        {
          name: "React",
          iconifyClass: "logos:react",
        },
        {
          name: "Redux",
          iconifyClass: "logos:redux",
        },
        {
          name: "Tailwind",
          iconifyClass: "vscode-icons:file-type-tailwind",
        },
      ],
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "portfolioProfileImage.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
