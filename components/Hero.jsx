import Image from "next/image"
import profile from "../public/images/profile.jpg"
// statics
import iconIg from "../public/icons/instagram.png"; import iconTwich from "../public/icons/twitch.png"; import iconYt from "../public/icons/youtube.png"; import iconLd from "../public/icons/linkedin.png"; import iconGh from "../public/icons/github.png"
// components
import styles from "./css/Hero.module.css"
import Navbar from "./Navbar"
import Typewriter from "typewriter-effect"



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
              <div className={styles.descriptionTitle}>
                <h1>I am a</h1>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString(`
                      <h1 style="display: inline; margin-right: 2px;">
                        FullStack <span style="color: #3a7085bf">Developer</span>
                      </h1>
                    `)
                      .pauseFor(1000)
                      .deleteAll()
                      .start();
                    typewriter.typeString(`
                      <h1 style="display: inline; margin-right: 2px;">
                        DataScience <span style="color: #3a7085bf">Student</span>
                      </h1>
                    `)
                      .pauseFor(1000)
                      .deleteAll()
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>

              <div className={styles.divider}>
                <div className={styles.dividerLine}></div>
              </div>

              <div className={styles.socials}>
                <ul className={styles.icons}>
                  <li><a href="https://www.instagram.com/lucasmasierolnm/" target="_blank">
                    <Image
                      src={iconIg}
                      width={20}
                      height={20}
                      objectFit="contain"
                    />
                  </a></li>

                  <li><a href="https://www.twitch.tv/lnmmusic" target="_blank">
                    <Image
                      src={iconTwich}
                      width={20}
                      height={20}
                      objectFit="contain"
                    />
                  </a></li>

                  <li><a href="https://www.youtube.com/channel/UCSyMewHA9YpEnDLyPU_6I9g" target="_blank">
                    <Image
                      src={iconYt}
                      width={20}
                      height={20}
                      objectFit="contain"
                    />
                  </a></li>

                  <li><a href="https://www.linkedin.com/in/lucas-masiero-45723114b/" target="_blank">
                    <Image
                      src={iconLd}
                      width={20}
                      height={20}
                      objectFit="contain"
                    />
                  </a></li>

                  <li><a href="https://github.com/LNMMusic" target="_blank">
                    <Image
                      src={iconGh}
                      width={20}
                      height={20}
                      objectFit="contain"
                    />
                  </a></li>
                </ul>
              </div>
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