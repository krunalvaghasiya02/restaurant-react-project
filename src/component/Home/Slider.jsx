import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css"
const Slider = () => {
  return (
    <>
      <section className="slider-section">
        <div className="bg-poster">
        </div>
        <div className="container">
          <div className="row">
            <div className="border">
            </div>
            <div className="content">
              <div className="details ">
                <span>Try our Dishes</span>
                <div className="title flex ">
                  <div className="Image flex"><img src="../../../Image/rev-img.png" alt="" /></div>

                  <h2>the best dishes</h2>
                  <div className="Image"><img src="../../../Image/rev-img.png" alt="" /></div>
                </div>
                <p>We have provide fresh and good quality dishes foods thats why reason our dishes price is more expensive then other rastaurant </p>
                <div className="btn flex">
                  <NavLink onClick={() => {
                    let clicksound = new Audio("https://uploads.sitepoint.com/wp-content/uploads/2023/06/1687569402mixkit-fast-double-click-on-mouse-275.wav");
                    clicksound.play();
                  }}>View More</NavLink>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Slider;