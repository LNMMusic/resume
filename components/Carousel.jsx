import styles from './css/Carousel.module.css'
import { useState } from 'react'
// components
import CardProject from './CardProject'
import Pagination from './Pagination'
// static
import buttonArrow from '../public/icons/arrow.png'



const Carousel = ({ items }) => {
  // state
  const [currentItem, setCurrentItem] = useState(0)

  // handlers
  const handleCurrentItem = (selection) => {
    switch (selection) {
      case "left":
        if (currentItem !== 0) {
          setCurrentItem(currentItem-1)
        }
        break;
      case "right":
        if (currentItem !== (items-1)) {
          setCurrentItem(currentItem+1)
        }
        break;
      default:
        break;
    }
  }

  return (
    <div className={styles.carousel}>
      {/* pagination */}
      <div className={styles.pagination}>
        <Pagination items={items} currentItem={currentItem}/>
      </div>

      {/* buttons */}
      <div className={styles.left} onClick={() => handleCurrentItem("left")}>
        <img src={buttonArrow.src} alt=""
        className={`${styles.button} ${styles.buttonLeft}`} />
      </div>
      <div className={styles.right} onClick={() => handleCurrentItem("right")}>
        <img src={buttonArrow.src} alt=""
        className={`${styles.button} ${styles.buttonRight}`} />
      </div>

      {/* content */}
      <div className={styles.content}>
        {[...Array(items).keys()].map((item, ix) => {
          if (item === currentItem) {
            return <div className={styles.item} aria-selected="true" key={ix}>
              <CardProject title={"selected"}/>
            </div>
          } else {
            return <div className={styles.item} key={ix}>
              <CardProject title={"none"}/>
            </div>
          }
        })}
      </div>
    </div>
  )
}

export default Carousel