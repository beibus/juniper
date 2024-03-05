import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"
import "./FAQ.css"
import arrow from "../../assets/right.png"

const FAQ = () => {

const items = [
  {
    uuid: 1,
    heading: "How can I customize the Juniper app to suit my needs?",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    uuid: 2,
    heading: "How can I share my weather updates with my partner?",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    uuid: 3,
    heading: "How long is the free trial for the Juniper app?",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    uuid: 4,
    heading: "What happens after the free trial ends?",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  
]  
  return (
    <div className="FAQ">
      <h3 className="FAQ-title">
      The Weather App That Brings You Wonder
      </h3>
      <h6 className="FAQ-text">
      We care about your happiness and well-being, no matter the weather
      </h6>
      <div className="FAQ-accordion">
      <Accordion allowZeroExpanded>
    {items.map((item) => (
        <AccordionItem className="FAQ-accordion-container" key={item.uuid}>
            <AccordionItemHeading>
                <AccordionItemButton className="FAQ-accordion-heading">
                    {item.heading} <img className="FAQ-accordion-heading-icon" src={arrow} alt="arrow-right" />
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {item.content}
            </AccordionItemPanel>
        </AccordionItem>
    ))}
</Accordion>
      </div>
    </div>
  )
}

export default FAQ