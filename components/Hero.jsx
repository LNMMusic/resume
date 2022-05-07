import Image from "next/image"
import profile from "../public/images/profile.jpg"
// components
import styles from "./css/Hero.module.css"
import Navbar from "./Navbar"


const Hero = () => {
  
  
  return (
    <div className={styles.backgroundHero}>
      <Navbar />

      {/* content */}
      <div className={styles.hero}>
        <div className={styles.content}>

          {/* PRESENTATION */}
          <div className={styles.presentation}>
            <div className={styles.picture}>
              <Image
                src={profile}
                alt="profile-picture"
                width={195}
                height={260}
                objectFit="contain"
                className={styles.profilePic}
              />
            </div>

            <div className={styles.description}>

            </div>

          </div>

          {/* TITLE */}
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