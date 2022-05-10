import styles from "./css/CardProject.module.css"
import Image from "next/image"
// static
import iconDocker from "../public/icons/docker.png"; import iconSql from "../public/icons/sql.png"; import iconPsql from "../public/icons/postgres.png"; import iconMongo from "../public/icons/mongodb.png"; import iconRust from "../public/icons/rust.png"; import iconGo from "../public/icons/golang.png"; import iconPython from "../public/icons/python.png"; import iconApi from "../public/icons/api.png";



const CardProject = () => {
  return (
    <div className={styles.card}>
      {/* top-left */}
      <div className={styles.image}>

      </div>

      {/* top-right */}
      <div className={styles.info}>
        <h1>Title</h1>
        <div className={styles.divider}>
          <div className={styles.line}></div>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      {/* bottom-left */}
      <div className={styles.tech}>
        <h3>Tools</h3>
        <div className={styles.verticalLine}></div>
        <div className={styles.icons}>
        <Image
            src={iconDocker}
            objectFit="contain"
            width={20}
            height={20}
            className={styles.icon}
          />
          <Image
            src={iconPsql}
            objectFit="contain"
            width={20}
            height={20}
            className={styles.icon}
          />
          <Image
            src={iconRust}
            objectFit="contain"
            width={20}
            height={20}
            className={styles.icon}
          />
          <Image
            src={iconApi}
            objectFit="contain"
            width={20}
            height={20}
            className={styles.icon}
          />
        </div>
      </div>

      {/* bottom-right */}
      <div className={styles.link}>
        <button>View More</button>
      </div>
    </div>  
  )
}

export default CardProject