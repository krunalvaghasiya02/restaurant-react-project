import React from "react";
import "./ragistration.css"
const Ragistration = () => {
  return (
    <>
      <section className="ragistration-section">
        <div className="container">
          <div className="row">
            <div className="border flex">
              <div className="sub-border"></div>
              <div className="sub-border"></div>
              <div className="sub-border"></div>
              <div className="sub-border"></div>
              <div className="sub-border"></div>
            </div>
            <div className="content">
              <div className="heading flex">
                <h3>MY ACCOUNT</h3>
                <p>Home <i className="fa-solid fa-angles-right"></i> My account</p>
              </div>
              <div className="form-box flex">
                <form action="#" className="flex">
                  <h2>ragistration</h2>
                  <div className="input-box">
                    <label htmlFor="fname">first Name</label>
                    <input type="text" placeholder="enter first name" required />
                  </div>
                  <div className="input-box">
                    <label htmlFor="lname">last Name</label>
                    <input type="text" placeholder="enter last name" required />
                  </div>
                  <div className="input-box">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="enter email address" required />
                  </div>
                  <div className="input-box">
                    <label htmlFor="mnumber">mobile number</label>
                    <input type="number" placeholder="+91 0123456789" required />
                  </div>
                  <div className="input-box">
                    <label htmlFor="password">password</label>
                    <input type="password" placeholder="******" required />
                  </div>
                  <div className="input-box">
                    <label htmlFor="password">confirm password</label>
                    <input type="password" placeholder="******" required />
                  </div>
                  <div className="textarea-box">
                    <label htmlFor="address">address</label>
                    <textarea name="address" id="address" required rows={2} placeholder="enter your address"></textarea>
                  </div>
                  <div className="checkbox flex">
                    <input className="checkbox" type="checkbox" />
                    <label htmlFor="remember">Remember me</label>
                  </div>
                  <div className="btn flex">
                    <button type="submit" onClick={() => {
                                  let clicksound = new Audio("https://uploads.sitepoint.com/wp-content/uploads/2023/06/1687569402mixkit-fast-double-click-on-mouse-275.wav");
                                  clicksound.play();
                                }}>Submit</button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
export default Ragistration;