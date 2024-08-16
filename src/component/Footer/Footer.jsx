import React from "react";
import "./footer.css"
import { NavLink } from "react-router-dom";
const Footer = () => {
  //this js code is for rastaurant is open or not for only
  let currDate = new Date();
  currDate = currDate.getHours();
  let getting = "";
  let cssStyle = {};

  if (currDate > 1 && currDate < 9) {
    getting = "Open:09:00 am – 01:00 pm";
    cssStyle.color = "red";
  }
  else if (currDate >= 9 && currDate <= 24) {
    getting = "Open:09:00 am – 01:00 pm";
    cssStyle.color = "green";
  }
  else {
    getting = "Open:09:00 am – 01:00 pm";
    cssStyle.color = "orange";
  }
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="border flex">
              <div className="sub-border"></div>
              <div className="sub-border"></div>
              <div className="sub-border"></div>
              <div className="sub-border"></div>
              <div className="sub-border"></div>
            </div>
            <div className="content flex">
              <div className="main-box">
                <div className="image flex">
                  <img src="../../../Image/logo.png" alt="" />
                </div>
                <div className="details">
                  <h3>Ma Annapurna rastaurant & fine dining</h3>
                  <div className="contect">
                    <NavLink>address:-001,royal palace,nana varacha road,surat,gujrat,india</NavLink>
                    <NavLink>91+ 9979303515</NavLink>
                    <NavLink>annapurna-restro@gmail.com</NavLink>
                  </div>
                  <p> <span style={cssStyle}>{getting}</span></p>
                  <div className="social-media flex" onClick={() => {
                                  let clicksound = new Audio("https://uploads.sitepoint.com/wp-content/uploads/2023/06/1687569402mixkit-fast-double-click-on-mouse-275.wav");
                                  clicksound.play();
                                }}>
                    <NavLink>facebook</NavLink>
                    <NavLink>instagram</NavLink>
                    <NavLink>twitter</NavLink>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </footer>


    </>
  );
}
export default Footer;