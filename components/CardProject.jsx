import styles from "./css/CardProject.module.css"
import Image from "next/image"



const CardProject = ({ title, description, bgImage, tools }) => {
  return (
    <div className={styles.card}>
      {/* top-left */}
      <div className={styles.image} style={{
        backgroundImage: `url('${bgImage.src}')`,
      }}>

      </div>

      {/* top-right */}
      <div className={styles.info}>
        <h1>{title}</h1>
        <div className={styles.divider}>
          <div className={styles.line}></div>
        </div>
        <p>
          {description}
          {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. */}
        </p>
      </div>

      {/* bottom-left */}
      <div className={styles.tech}>
        <div className={styles.title}>
          <h3>Tools</h3>
          <div className={styles.verticalLine}></div>
        </div>

        <div className={styles.icons}>
          {tools.map((tool, ix) => <Image
            src={tool}
            width={20}
            height={20}
            objectFit="contain"
            className={styles.icon}
            key={ix}
          />)}
          {/* <Image
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
          /> */}
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