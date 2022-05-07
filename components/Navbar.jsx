import Image from "next/image"
import logo from "../public/icons/logo.png"
import theme from "../public/icons/theme-mode.png"
import styles from './css/Navbar.module.css'


const Navbar = () => {

  
  return (
    <nav className={styles.navbar}>
      <div className={styles.content}>

        <div className={styles.left}>
          <Image
            src={logo}
            alt="logo"
            width={55}
            height={33}
            objectFit="contain"
            className={styles.logo}
          />

          <div className={styles.items} aria-hidden="true">
            <h3>Skills</h3>
            <h3>Experience</h3>
            <h3>Projects</h3>
            <h3>Contact</h3>
          </div>
        </div>

        <div className={styles.right}>
          <Image
            src={theme}
            alt="theme-mode"
            width={28}
            height={28}
            objectFit="contain"
            className={styles.themeIcon}
          />
          <svg viewBox="0 0 100 60" width="23" height="23" className={styles.menu}>
            <rect width="100" height="10"></rect>
            <rect y="30" width="100" height="10"></rect>
            <rect y="60" width="100" height="10"></rect>
          </svg>
        </div>

      </div>
    </nav>
  )
}

export default Navbar