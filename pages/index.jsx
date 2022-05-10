import styles from '../styles/Home.module.css'
import Head from 'next/head'
// components
import Hero from '../components/Hero'
import CardProject from '../components/CardProject'
import CardSkill from '../components/CardSkill'
import Footer from '../components/Footer'



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
          <CardSkill title="Backend" description="testing something" />
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
          <CardProject />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
