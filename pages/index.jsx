import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
// components
import Hero from '../components/Hero'
import CardSkill from '../components/CardSkill'
import Footer from '../components/Footer'
import Title from '../components/Title'
import TitleWhite from '../components/TitleWhite'
import Carousel from '../components/Carousel'
import Accordion from '../components/Accordion'
// static
import iconSkills from '../public/icons/skills.png'; import iconExperiences from "../public/icons/experiences.png"; import iconProjects from "../public/icons/projects.png"
import iconDbSql from '../public/icons/sql.png'; import iconDbPsql from '../public/icons/postgres.png'; import iconDbMongo from '../public/icons/mongodb.png'; import iconDbRedis from '../public/icons/redis.png'
import iconRust from '../public/icons/rust.png'; import iconGo from '../public/icons/golang.png'; import iconPython from '../public/icons/python.png'; import iconDocker from '../public/icons/docker.png'
import iconNode from '../public/icons/nodejs.png'; import iconHtml from '../public/icons/html.png'; import iconCss from '../public/icons/css.png'; import iconSass from '../public/icons/sass.png'
import iconApi from "../public/icons/api.png"; import iconCli from "../public/icons/cli.png"; import iconDash from "../public/icons/dash.png"
import imageProject1 from '../public/images/background-project-1.png'; import imageProject2 from '../public/images/background-project-2.png'; import imageProject3 from '../public/images/background-project-3.png'; import imageProject4 from '../public/images/background-project-4.jpg'
import photograph from '../public/images/photograph-crop.jpg'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* BODY */}
      {/* Hero */}
      <Hero />

      {/* Skills */}
      <div className={styles.skills} id="skills">
        <div className={styles.content}>
          
          <div className={styles.titleSkill}>
            <Title title="Skills"/>
            <Image
              src={iconSkills}
              width={45}
              height={45}
              objectFit="contain"
            />
          </div>
          
          <div className={styles.cardsSkill}>
            <CardSkill
              title="Database"
              items={[
                {name: "SQL", image: iconDbSql},
                {name: "PSQL", image: iconDbPsql},
                {name: "Redis", image: iconDbRedis},
                {name: "Mongo", image: iconDbMongo},
              ]}
            />
            <CardSkill
              title="Backend"
              items={[
                {name: "Rust", image: iconRust},
                {name: "Go", image: iconGo},
                {name: "Python", image: iconPython},
                {name: "Docker", image: iconDocker},
              ]}
            />
            <CardSkill
              title="Frontend"
              items={[
                {name: "Node", image: iconNode},
                {name: "HTML", image: iconHtml},
                {name: "CSS", image: iconCss},
                {name: "SASS", image: iconSass},
              ]}
            />
          </div>

        </div>
      </div>

      {/* Experience */}
      <div className={styles.experiences} id="experiences">
        <div className={styles.content}>
          <div className={styles.titleExperience}>
            <Image
              src={iconExperiences}
              width={40}
              height={40}
              objectFit="contain"
              className={styles.iconExperience}
            />
            <TitleWhite title="Experiences" />
          </div>

          <div className={styles.accordionExperience}>
            <Accordion
              items={[
                {title: "Seller", year: 2019, description: "Sale of books, printings, and photocopies."},
                {title: "Freelancer", year: 2020, description: "I’ve work as an instructor of python teaching college and university students for 6 months. I also work as a freelance programmer solving data processing problems and designing and managing APIs."},
                {title: "Web Developer - CMS and Taxes", year: 2021, description: "My tasks were to create a web application to manage company data with CRUD operations and consistency in a PostgreSQL database, via RESTFull system. The job has been done in 2 stable versions. Also, I had to connect AFIP SOAP Web Service to the App via RESTFull with PowerShell and Docker for validation."},
                {title: "App Developer - Speech To Text", year: 2022, description: "I’ve built a desktop application to translate audio files (mainly mp3 and wav) to text, with the objective of fetching data from phone-call records from the company to be used in a future data analysis. The used storage was MongoDB Atlas."},
              ]}
            />
            <div className={styles.divider}>
              <div className={styles.verticalDivider}></div>
            </div>
            <div className={styles.accordionImage}>
              <Image 
                src={photograph}
                width={200}
                height={300}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className={styles.projects} id="projects">
        <div className={styles.content}>
          <div className={styles.titleProject}>
            <Title title="Projects"/>
            <Image
              src={iconProjects}
              width={45}
              height={45}
              objectFit="contain"
            />
          </div>

          <div className={styles.carouselProject}>
            <Carousel
              items={[
                {
                  title: "FastAPI - React",
                  description: "Fullstack framework with authentication focused on microservices for data analytics using Python and NodeJS",
                  bgImage: imageProject1,
                  tools: [iconDocker, iconDbPsql, iconPython, iconApi]
                },
                {
                  title: "GoFiber - React",
                  description: "Fullstack framework with authentication focused on database transaction performance using Go and NodeJS",
                  bgImage: imageProject2,
                  tools: [iconDocker, iconDbPsql, iconGo, iconApi]
                },
                {
                  title: "Actix - NextJS",
                  description: "Backend framework with authentication focused on database performance and CMS feature using Rust and NodeJS",
                  bgImage: imageProject3,
                  tools: [iconDocker, iconDbPsql, iconRust, iconApi]
                },
                {
                  title: "CLI",
                  description: "Command Line Interface created in Rust due to its performance and save memory management",
                  bgImage: imageProject4,
                  tools: [iconDocker, iconDash, iconRust, iconCli]
                }
              ]}
            />
          </div>
        </div>
      </div>

      {/* Contact */}
      <div id="contact">
        <Footer />
      </div>
    </div>
  )
}
