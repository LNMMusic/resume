import styles from "./css/Footer.module.css"
import Image from "next/image"
// static
import iconPhone from '../public/icons/phone.png'; import iconEmail from '../public/icons/email.png'



const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerItem}>
          <Image
            src={iconEmail}
            alt=""
            width={20}
            height={20}
            objectFit="contain"
            className={styles.footerIcon}
          />
          <h3>lucasmasiero38@gmail.com</h3>
        </div>
        <div className={styles.footerItem}>
          <Image
            src={iconPhone}
            alt=""
            width={20}
            height={20}
            objectFit="contain"
            className={styles.footerIcon}
          />
          <h3>+54 9 11-4167-7862</h3>
        </div>
      </div>
    </footer>
  )
}

export default Footer