import styles from "./css/TitleWhite.module.css"



const Title = ({ title }) => {
  return (
    <h1 className={styles.title}>
      {title}
    </h1>
  )
}

export default Title