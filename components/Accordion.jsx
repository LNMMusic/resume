import styles from "./css/Accordion.module.css"
// components
import AccordionRow from "./AccordionRow"


const Accordion = () => {
  return (
    <div className={styles.accordions}>
      <AccordionRow hidden="true" year={2019}/>
      <AccordionRow hidden="true" year={2020}/>
      <AccordionRow hidden="false" year={2021}/>
    </div>
  )
}

export default Accordion