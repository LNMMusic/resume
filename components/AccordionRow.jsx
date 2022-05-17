import { useState } from "react"
import styles from "./css/AccordionRow.module.css"
import Image from "next/image"
// static
import iconFolder from "../public/icons/folder.png"



const AccordionRow = ({ hidden, year }) => {
  // state
  const [itemHidden, setItemHidden] = useState(hidden)
  // handlers
  const itemHandler = (e) => {
    switch (itemHidden) {
      case "true":
        setItemHidden("false")
        break;
      case "false":
        setItemHidden("true")
        break;
      default:
        break;
    }
  }


  return (
    <div className={styles.accordion}>
      <div className={styles.header} aria-hidden={itemHidden} onClick={() => itemHandler()}>
        <h2>Title</h2>
        <div className={styles.info}>
          <h5>{year}</h5>
          <Image
            src={iconFolder}
            width={21}
            height={21}
            objectFit="contain"
            className={styles.icon}
          />
        </div>
      </div>
      <div className={styles.body} aria-hidden={itemHidden}>
        <p className={styles.content} aria-hidden={itemHidden}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit.
        </p>
      </div>
    </div>
  )
}

export default AccordionRow