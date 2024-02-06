import {CONTAINERS} from "../../utils/containers";

const translations = {
  translations: {
    [CONTAINERS.HEADER]: {
      // Texts on Header
      skills: "Skills",
      workExperiences: "Work Experiences",
      projects: "Projects",
      achievements: "Achievements",
      blogs: "Blogs",
      talks: "Talks",
      contactMe: "Contact Me"
    },
    [CONTAINERS.GREETING]: {
      username: "Rodrigo Camurça Vera",
      title: "Hi all, I'm Rodrigo",
      subTitle:
        "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript, Typescript and Python using cool libraries and frameworks.",
      resumeLink: "" // Set to empty to hide the button
    },
    [CONTAINERS.SOCIAL_MEDIA_LINKS]: {
      github: "https://github.com/rcvdigo",
      linkedin: "https://www.linkedin.com/in/rodrigo-camur%C3%A7a-vera-53a950215/",
      gmail: "rcvdigo@gmail.com"
      // Instagram, Twitter and Kaggle are also supported in the links!
      // To customize icons and social links, tweak src/components/SocialMedia
    },
    [CONTAINERS.SKILLS_SECTION]: {
      title: "What I do",
      subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
      skills: [
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Integration of third party services such as Firebase / Vercel"
      ],

      /* Make Sure to include correct Font Awesome Classname to view your icon
    https://fontawesome.com/icons?d=gallery */

      softwareSkills: [
        {
          skillName: "Html5",
          fontAwesomeClassname: "fab fa-html5"
        },
        {
          skillName: "Css3",
          fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "fab fa-sass"
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "fab fa-js"
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "fab fa-codepen"
        },
        {
          skillName: "ReactJs",
          fontAwesomeClassname: "fab fa-react"
        },
        {
          skillName: "AngularJs",
          fontAwesomeClassname: "fab fa-angular"
        },
        {
          skillName: "Nodejs",
          fontAwesomeClassname: "fab fa-node"
        },
        {
          skillName: "Npm",
          fontAwesomeClassname: "fab fa-npm"
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "fas fa-database"
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "fab fa-aws"
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "fas fa-fire"
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "fab fa-python"
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "fab fa-docker"
        }
      ]
    },
    [CONTAINERS.EDUCATION_INFO]: {
      title: "Education",
      schools: [
        {
          schoolName: "Unervisidade Estácio de Sá",
          logo: "https://media.licdn.com/dms/image/C4D0BAQF5imeMDt71KQ/company-logo_100_100/0/1672861931450/mackenzie1870_logo?e=1707350400&v=beta&t=3YCJo6aVctFfqKgu8prZmWji0GlCPThiq3reTAeoyns",
          subHeader: "Bachelor's Degree in Information Systems",
          duration: "August 2019 - July 2023"
        },
        // {
        //   schoolName:
        //     "Technical Institute of Barueri Brasílio Flores de Azevedo",
        //   logo: "https://media.licdn.com/dms/image/C4D0BAQGR2sLYI-Lysw/company-logo_100_100/0/1631372085688/itb_barueri_fieb_logo?e=1707350400&v=beta&t=WEtC2qUXy1jgaxwgI6H_t4idIej3PH8PfbQPx5bqDPE",
        //   subHeader: "Technical education in IT",
        //   duration: "January 2016 - December 2018"
        // }
      ]
    },
    [CONTAINERS.WORK_EXPERIENCE]: {
      title: "Work Experiences",
      experiences: [
        {
          role: "Systems Analyst",
          company: "Global Hitss",
          companylogo:
            "data:image/jpeg;base64,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",
          date: "February 2022 – Current",
          descBullets: [
            "Integration as an active member of an agile development team, following methodologies such as Scrum and Kanban",
            "Conducting daily code reviews, providing constructive feedback to team members, and ensuring code quality and adherence to programming best practices.",
            <>
              Monitoring and tracking applications using technologies such as
              <strong>Sentry</strong> and <strong>Kibana</strong>
            </>,
            <>
              Contributing to the construction of features for the web and
              mobile platform, using technologies such as <strong>React</strong>
              (with <strong>JavaScript</strong> and <strong>TypeScript</strong>
              ), <strong>Next.js</strong>, <strong>React Native</strong>,
              <strong>Jest</strong>, <strong>testing-library</strong>, and
              <strong>Google Analytics</strong>.
            </>,
            <>
              Contributing to open source:
              <a href="https://github.com/juntossomosmais/frontend-guideline">
                https://github.com/juntossomosmais/frontend-guideline
              </a>
            </>,
            <>
              Contribution as a Front End mentor in the ConstruDelas developer
              training project
            </>
          ]
        },
        // {
        //   role: "Web Development Intern",
        //   company: "Cromai",
        //   companylogo:
        //     "https://media.licdn.com/dms/image/C4D0BAQErtma_73Xbdw/company-logo_100_100/0/1675793211338/cromai_logo?e=1707350400&v=beta&t=zavJABHwNlSaPsTt8ZqP40fEgg30Ma10mL0fjCJxuMA",
        //   date: "January 2020 – May 2021",
        //   descBullets: [
        //     "Integration as an active member of an agile development team, following methodologies such as Scrum and Kanban",
        //     <>
        //       Contributing to the construction of a web and desktop platform,
        //       using technologies such as <strong>React</strong>,
        //       <strong>Electron</strong>, <strong>Redux.js</strong>,
        //       <strong>Jest</strong>, <strong>Enzyme</strong>,
        //       <strong>Material UI</strong>, <strong>Flask</strong>, and
        //       <strong>PyTest</strong>. During my tenure, I played a key role in
        //       the development and implementation of various features, including:
        //     </>
        //   ]
        // }
      ]
    },
    [CONTAINERS.PROJECTS_GITHUB]: {
      title: "My projects on Github",
      textButton: "More Projects"
    },
    [CONTAINERS.CONTRIBUTIONS_OPEN_SOURCE]: {
      title: "Contributions to Open Source Projects",
      textButton: "More Projects"
    },
    [CONTAINERS.CONTACT_INFO]: {
      title: "Contact Me ☎️",
      subtitle:
        "Discuss a project or just want to say hi? My Inbox is open for all.",
      number: "+92-0000000000",
      emailAddress: "igorgomes.13ig@gmail.com" // TODO: change email
    }
  }
};

export default translations;