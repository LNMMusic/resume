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
            <CardSkill title="Database" description="testing something" />
            <CardSkill title="Backend" description="testing something" />
            <CardSkill title="Frontend" description="testing something" />
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
            <Accordion />
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
            <Carousel items={3}/>
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
