import Image from "next/image"
import Link from "next/link"
import logo from "../public/icons/logo.png"
import icon from "../public/icons/download.png"
import styles from './css/Navbar.module.css'
import { useState } from "react"



const Navbar = () => {
  // states
  const [menuHidden, setMenuHidden] = useState("true");

  const handleMenu = () => {
    if (menuHidden === "true") {
      setMenuHidden("false")
    } else if (menuHidden === "false") {
      setMenuHidden("true")
    }
  }
  const handleMenuLink = () => {
    if (menuHidden === "false") {
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
            <h3 onClick={() => handleMenuLink()}><Link href="/#skills">Skills</Link></h3>
            <h3 onClick={() => handleMenuLink()}><Link href="/#experiences">Experience</Link></h3>
            <h3 onClick={() => handleMenuLink()}><Link href="/#projects">Projects</Link></h3>
            <h3 onClick={() => handleMenuLink()}><Link href="/#contact">Contact</Link></h3>
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
          onClick={() => handleMenu()}
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