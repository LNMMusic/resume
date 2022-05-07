import styles from "./css/Hero.module.css"
import Navbar from "./Navbar"


const Hero = () => {
  
  
  return (
    <div className={styles.backgroundHero}>
      <Navbar />

      {/* content */}
      <div className={styles.hero}>
        <div className={styles.content}>

          <div className={styles.presentation}>
            Hi
          </div>

          <div className={styles.title}>
            <h1><span className={styles.spanUnderline}>Welcome</span> to</h1>
            <h1>my <span className={styles.spanBlack}>Portfolio</span></h1>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero