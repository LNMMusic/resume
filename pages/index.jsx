import styles from '../styles/Home.module.css'
import Head from 'next/head'
// components
import Hero from '../components/Hero'
import CardProject from '../components/CardProject'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      {/* Body */}
      <Hero />

      <div className={styles.projects}>
        <div className={styles.projectsContent}>
          <CardProject />
        </div>
      </div>
    </div>
  )
}
