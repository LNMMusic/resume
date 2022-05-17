import styles from "./css/Accordion.module.css"
// components
import AccordionRow from "./AccordionRow"


const Accordion = ({ items }) => {
  const quantity = items.length

  return (
    <div className={styles.accordions}>
      {items.map((item, ix) => {
        if (ix === quantity-1) {
          return <AccordionRow
            hidden="false"
            {...item}
            // title={item.title}
            // year={item.year}
            // description={item.description}
            key={ix}
          />
        } else {
          return <AccordionRow
            hidden="true"
            {...item}
            // title={item.title}
            // year={item.year}
            // description={item.description}
            key={ix}
          />
        }
      })}
      {/* <AccordionRow hidden="true" year={2019}/>
      <AccordionRow hidden="true" year={2020}/>
      <AccordionRow hidden="false" year={2021}/> */}
    </div>
  )
}

export default Accordion