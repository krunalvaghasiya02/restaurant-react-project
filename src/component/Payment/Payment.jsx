import React from "react";
import "./payment.css"
import { NavLink } from "react-router-dom";
const Payment = () => {

  return (
    <>
      <section className="payment-section">
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
              <div className="heading flex">
                <div className="image">
                  <img src="../../../Image/rev-img.png" alt="" />
                </div>
                <h1>final payment</h1>
                <div className="image">
                  <img src="../../../Image/rev-img.png" alt="" />
                </div>
              </div>
              <div className="form-box">
                <form action="#" className="flex">
                  <div className="input-box">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="name" required />
                  </div>
                  <div className="input-box">
                    <label htmlFor="mnumber">mobile number</label>
                    <input type="number" placeholder="+91 0123456789" required />
                  </div>
                  <div className="textarea-box">
                    <label htmlFor="address">address</label>
                    <textarea name="address" id="address" required rows={2} placeholder="enter your address"></textarea>
                  </div>

                  <div className="radio-box">
                    <label htmlFor="cod">cash on delivery</label>
                    <input type="radio" name="payment" id="cod" required checked />
                  </div>
                  <div className="radio-box">
                    <label htmlFor="gpay">G-pay</label>
                    <input type="radio" name="payment" id="gpay" />
                  </div>
                  <div className="btn flex">
                    <button type="submit" onClick={() => {
                      let clicksound = new Audio("https://uploads.sitepoint.com/wp-content/uploads/2023/06/1687569402mixkit-fast-double-click-on-mouse-275.wav");
                      clicksound.play();
                    }}>order</button>
                  </div>
                </form>
              </div>
              <div className="scaner">
                <div className="image flex">
                  <img src="../../../Image/IMG_6675.PNG" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Payment;