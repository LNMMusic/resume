import styles from './css/Pagination.module.css'



const Pagination = ({ items, currentItem }) => {

  return (
    <div className={styles.items}>
      {[...Array(items).keys()].map((item, ix) => {
        if (item === currentItem) {
          return <div className={styles.item} key={ix} aria-selected="true"></div>
        } else {
          return <div className={styles.item} key={ix}></div>
        }
      })}
    </div>
  )
}

export default Pagination