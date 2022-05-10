import styles from "./css/CardSkill.module.css"
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
          <div className={styles.content}>
            <p className={styles.description}>
              {description}
            </p>
            <a href="#" className={styles.link}>View More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardSkill