import Image from "next/image"
import logo from "../public/icons/logo.png"
import icon from "../public/icons/download.png"
import styles from './css/Navbar.module.css'
import { useState } from "react"



const Navbar = () => {
  // states
  const [menuHidden, setMenuHidden] = useState("true");

  const handleMenu = (e) => {
    let isSelected = e.target.getAttribute("aria-hidden")
    if (isSelected === "true") {
      setMenuHidden("false")
    } else if (isSelected === "false") {
      setMenuHidden("true")
    }
  }


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

          <div className={styles.items} aria-hidden={menuHidden}>
            <h3><a href="/#skills">Skills</a></h3>
            <h3><a href="/#experiences">Experience</a></h3>
            <h3><a href="/#projects">Projects</a></h3>
            <h3><a href="/#contact">Contact</a></h3>
          </div>
        </div>

        <div className={styles.right}>
          <a href="/resume.pdf" download="resume.pdf">
            <Image
              src={icon}
              alt="download-icon"
              width={23}
              height={23}
              objectFit="contain"
              className={styles.themeIcon} />
          </a>
          <svg viewBox="0 0 100 60" width="23" height="23"
          className={styles.menu} aria-hidden={menuHidden}
          onClick={(e) => handleMenu(e)}
          >
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