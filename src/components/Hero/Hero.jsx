import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import "./Hero.css";
import "../../index.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="left-side flexColStart">
          <div className="hero-title">
            <div className="orange-circle" />
            <h1>
              Discover <br /> Most Suitable <br /> Property
            </h1>
          </div>

          <div className="hero-des flexColStart secondaryText">
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi?
            </span>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexCenter stat">
              <div className="count">
                <CountUp start={700} end={1000} duration={4} />
                <span>+</span>
              </div>
              <div className="description secondaryText">Premium products</div>
            </div>
            <div className="flexCenter stat">
              <div className="count">
                <CountUp start={1985} end={2000} duration={4} />
                <span>+</span>
              </div>
              <div className="description secondaryText">happy customers</div>
            </div>
            <div className="flexCenter stat">
              <div className="count">
                <CountUp end={28} />
                <span>+</span>
              </div>
              <div className="description secondaryText">Awards Winners</div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter right-side">
          <div className="image-container">
            <img src="./hero-image.png" alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
