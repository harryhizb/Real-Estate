import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import "./Header.css";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: menuOpened ? "0" : "-100%" };
    }
    return {};
  };

  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter innerWidth paddings">
        <img src="./logo.png" alt="Logo" />

        {/* Menu */}
        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="h-menu flexCenter" style={getMenuStyles(menuOpened)}>
            <a href="#residence">Residence</a>
            <a href="#value">Our Value</a>
            <a href="#contact">Contact Us</a>
            <a href="#start">Get Started</a>
            <button className="button">Contact</button>
          </div>
        </OutsideClickHandler>

        {/* Menu Icon */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={40} />
        </div>
      </div>
    </section>
  );
};

export default Header;
