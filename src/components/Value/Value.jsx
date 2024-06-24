import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";

import "./Value.css";

const Value = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        {/* right side*/}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Values</span>
          <span className="primaryText">Value We Give to You</span>
          <span className="secondaryText">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              // Move the state inside the map callback
              const [className, setClassName] = useState('');

              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <AccordionItemState>
                        {({ expanded }) => {
                          if (expanded) {
                            setClassName('expanded');
                          } else {
                            setClassName('collapsed');
                          }
                          return (
                            <>
                              <div className="flexCenter icon">
                                {item.icon}
                              </div>
                              <span className="primaryText">
                                {item.heading}
                              </span>
                              <div className="flexCenter icon">
                                <MdOutlineArrowDropDown size={20} />
                              </div>
                            </>
                          );
                        }}
                      </AccordionItemState>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
