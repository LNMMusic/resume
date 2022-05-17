import styles from "./css/CardSkill.module.css"
import Image from "next/image"
// static
import iconTool from "../public/icons/tool.png"



const CardSkill = ({ title, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={`${styles.face} ${styles.face1}`}>
          <div className={styles.content}>
            <img className={styles.image} src={iconTool.src} />
            <h3 className={styles.title}>{title}</h3>
          </div>
        </div>
        <div className={`${styles.face} ${styles.face2}`}>
        <div className={styles.item}>
            <Image
              src={iconTool}
              width={34}
              height={34}
              objectFit="contain"
            />
            <h3>go</h3>
          </div>
          <div className={styles.item}>
            <Image
              src={iconTool}
              width={34}
              height={34}
              objectFit="contain"
            />
            <h3>go</h3>
          </div>
          <div className={styles.item}>
            <Image
              src={iconTool}
              width={34}
              height={34}
              objectFit="contain"
            />
            <h3>go</h3>
          </div>
          <div className={styles.item}>
            <Image
              src={iconTool}
              width={34}
              height={34}
              objectFit="contain"
            />
            <h3>go</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardSkill