import styles from './css/Carousel.module.css'
// components
import CardProject from '../components/CardProject'
// static
import buttonArrow from '../public/icons/arrow.png'



const Carousel = () => {
  return (
    <div className={styles.carousel}>
      {/* buttons */}
      <img src={buttonArrow.src} alt=""
      className={`${styles.button} ${styles.buttonLeft}`} />
      <img src={buttonArrow.src} alt=""
      className={`${styles.button} ${styles.buttonRight}`} />


      {/* content */}
      <div className={styles.content}>
        <div className={styles.contentItem}>
          <CardProject />
        </div>
        <div className={styles.contentItem}>
          <CardProject />
        </div>
        {/* <div className={styles.item}>1</div>
        <div className={styles.item}>2</div>
        <div className={styles.item}>3</div>
        <div className={styles.item}>4</div> */}
      </div>
    </div>
  )
}

export default Carousel