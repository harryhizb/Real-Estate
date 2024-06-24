import React from "react";
import "./GetStarted.css";

const Getstarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started With Us</span>
         <span className="secondaryText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, minus! <br />
         Lorem ipsum dolor sit amet.</span>
         <button id="hello">
            <a href="mailto:hizbullahkhan16651@gmail.com">Get Started</a>
         </button>
        </div>
      </div>
    </section>
  );
};

export default Getstarted;
