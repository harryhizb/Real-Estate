import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from "react-icons/hi2";

const Contact = () => {
  return (
    <section className="cc-wrapper">
      <div className="innerWidth paddings flexCenter cc-container">
        {/* left side */}
        <div className=" flexColStart cc-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">East To Contact</span>
          <span className="secondaryText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            doloremque nobis quasi voluptas..
          </span>

          <div className=" flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row ">
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">03XX - 123456789</span>
                  </div>
                </div>
                <div className="flexCenter button" id="btn1">Call Now</div>
              </div>

              {/* second mode */}
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">03XX - 123456789</span>
                  </div>
                </div>
                <div className="flexCenter button" id="btn1">Chat Now</div>
              </div>
            </div>
            <div className="flexStart row ">
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">03XX - 123456789</span>
                  </div>
                </div>
                <div className="flexCenter button" id="btn1">video Call Now</div>
              </div>

              {/* second mode */}
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">03XX - 123456789</span>
                  </div>
                </div>
                <div className="flexCenter button" id="btn1">Message Now</div>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="cc-right">
          <div className="image-container">
            <img src="contact.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
