import {CONTAINERS} from "../../utils/containers";

const translations = {
  translations: {
    [CONTAINERS.HEADER]: {
      skills: "Habilidades",
      workExperiences: "Experiências",
      projects: "Projetos",
      achievements: "Conquistas",
      blogs: "Blogs",
      talks: "Talks",
      contactMe: "Contate-me"
    },
    [CONTAINERS.GREETING]: {
      username: "Rodrigo Camurça Vera",
      title: "Olá, eu sou o Rodrigo",
      subTitle:
        "Um programador de software Full Stack apaixonado 🚀 com experiência na criação de aplicações Web e Mobile com JavaScript, Typescript e Python, utilizando bibliotecas e frameworks incríveis.",
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
      title: "O que eu faço",
      subTitle: "DESENVOLVEDOR FULL STACK QUE ADORA EXPLORAR TECNOLOGIAS",
      skills: [
        "⚡ Desenvolvimento eficiente de Front End interativos / Interfaces de Usuário para sua Web e Mobile aplicações",
        "⚡ Integração com serviços de terceiro, como Firebase / Vercel"
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
      title: "Educação",
      schools: [
        {
          schoolName: "Unervisidade Estácio de Sá",
          logo: require('../../assets/images/estacio.jpg'),
          subHeader: "Bacharelado em Sistemas de Informação",
          duration: "Agosto de 2019 - Julho de 2023"
        },
      ]
    },

    // TODO: Translate this section
    [CONTAINERS.WORK_EXPERIENCE]: {
      title: "Experiências",
      experiences: [
        {
          role: "Analista de Sistemas",
          company: "Global Hitss",
          companylogo:
            "data:image/jpeg;base64,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",
          date: "Fevereiro de 2022 – Atual",
          descBullets: [
            "Integração como membro ativo de uma equipe de desenvolvimento ágil seguindo metodologias como Scrum e Kanban Realizar revisões diárias de código, fornecer feedback construtivo aos membros da equipe e garantir a qualidade do código e a adesão às melhores práticas de programação.",
          ]
        }
      ]
    },
    [CONTAINERS.PROJECTS_GITHUB]: {
      title: "Meus Projetos no Github",
      textButton: "Ver mais Projetos"
    },
    [CONTAINERS.CONTRIBUTIONS_OPEN_SOURCE]: {
      title: "Contribuições em Projetos Open Source ",
      textButton: "Ver mais Projetos"
    },
    [CONTAINERS.CONTACT_INFO]: {
      title: "Contate-me ☎️",
      subtitle:
        "Discutir um projeto ou somente para dizer oi? Minha caixa de entrada está aberta para conversas",
      number: "+55-941982086",
      emailAddress: "rcvdigo@gmail.com" // TODO: change email
    }
  }
};

export default translations;
