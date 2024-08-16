import React, { useEffect } from "react";

import { DataMenu } from "../../Apimenu";
const Liveorder = () => {
  return (
    <>
      <section className="liveorder-section">
        <div className="video-box">
          <video src="../../../Image/8922353-uhd_4096_2160_25fps.mp4" autoPlay muted loop />
        </div>
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
                <span>order Now</span>
                <div className="title flex">
                  <div className="image">
                    <img src="../../../Image/rev-img.png" alt="" />
                  </div>
                  <h1>order dish</h1>
                  <div className="image">
                    <img src="../../../Image/rev-img.png" alt="" />
                  </div>
                </div>

              </div>
              <div className="main-box flex">
                <div className="box">
                  <div className="content">
                    <ol>
                      <li><p>stap 1:- <span>select table number</span></p></li>
                      <li> <p> stap 2:- <span>select which dish you order</span></p></li>
                      <li> <p>stap 3:- <span>click to order </span></p> </li>
                      <li> <p>sorry for waiting with in 10 minuts your order is deliver on your tabel</p></li>
                    </ol>
                  </div>
                </div>
                <div className="box">
                  <div className="content">
                    <form action="#" className="flex">
                      <div className="select-box">
                        <select name="" id="">
                          <option value="tbl1">tabel__________________01</option>
                          <option value="tbl2">tabel__________________02</option>
                          <option value="tbl3">tabel__________________03</option>
                          <option value="tbl4">tabel__________________04</option>
                          <option value="tbl5">tabel__________________05</option>
                          <option value="tbl6">tabel__________________06</option>
                          <option value="tbl7">tabel__________________07</option>
                          <option value="tbl8">tabel__________________08</option>
                          <option value="tbl9">tabel__________________09</option>
                          <option value="tbl10">tabel__________________10</option>
                        </select>
                      </div>
                      <div className="select-box">
                        <select name="" id="">
                          {
                            DataMenu.map((val) => {
                              const { id, name, price, category } = val;
                              return (
                                <option key={id} value={category}>{id}__{name}__₹{price}</option>
                              );
                            })
                          }
                        </select>
                      </div>
                      <div className="btn flex">
                        <button type="submit" onClick={() => {
                          let clicksound = new Audio("https://uploads.sitepoint.com/wp-content/uploads/2023/06/1687569402mixkit-fast-double-click-on-mouse-275.wav");
                          clicksound.play();
                        }}>order</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Liveorder;