import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
// components
import Hero from '../components/Hero'
import CardSkill from '../components/CardSkill'
import Footer from '../components/Footer'
import Title from '../components/Title'
import Carousel from '../components/Carousel'
// static
import iconSkills from '../public/icons/skills.png'



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
      <div className={styles.skills}>
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
      <div className={styles.experiences}>
        <div className={styles.content}>

        </div>
      </div>

      {/* Projects */}
      <div className={styles.projects}>
        <div className={styles.content}>
          <Carousel />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
