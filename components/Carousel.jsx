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
  const quantity = items.length

  // handlers
  const handleCurrentItem = (selection) => {
    switch (selection) {
      case "left":
        if (currentItem !== 0) {
          setCurrentItem(currentItem-1)
        }
        break;
      case "right":
        if (currentItem !== (quantity-1)) {
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
        <Pagination items={quantity} currentItem={currentItem}/>
      </div>

      {/* buttons */}
      <div className={styles.left}>
        <img src={buttonArrow.src} alt=""
          className={`${styles.button} ${styles.buttonLeft}`}
          onClick={() => handleCurrentItem("left")}
        />
      </div>
      <div className={styles.right}>
        <img src={buttonArrow.src} alt=""
          className={`${styles.button} ${styles.buttonRight}`}
          onClick={() => handleCurrentItem("right")}
        />
      </div>

      {/* content */}
      <div className={styles.content}>
        {items.map((item, ix) => {
          if (ix === currentItem) {
            return <div className={styles.item} aria-selected="true" key={ix}>
              <CardProject
                {...item}
                // title={item.title}
                // description={item.description}
                // bgImage={item.bgImage}
                // tools={item.tools}
              />
            </div>
          } else {
            return <div className={styles.item} key={ix}>
              <CardProject
                {...item}
                // title={item.title}
                // description={item.description}
                // bgImage={item.bgImage}
                // tools={item.tools}
              />
            </div>
          }
        })}
      </div>
    </div>
  )
}

export default Carousel