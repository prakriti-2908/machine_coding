import { AccordionCard } from "./AccordionCard"
import "./styles/Accordion.css"
export const Accordion = () => {
  return (
    <div className="accordion">
        <h1>Accordion</h1>
        <div className="cards-div">
            <AccordionCard/>
        </div>
    </div>
  )
}