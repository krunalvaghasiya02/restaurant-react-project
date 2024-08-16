import React, { useEffect, useState } from "react";
import "./addtocart.css";
import { DataMenu } from "../../Apimenu";
import { NavLink, useParams } from "react-router-dom";
const Addtocart = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [incMoney, setIncmoney] = useState(0);
  const [incItem, setIncitem] = useState(0)
  const incricebtn = (price) => {
    setIncitem(incItem + 1);
    setIncmoney(incMoney + price)
  }
  const decricebtn = (price) => {
    if (incItem == 0 || incItem < 0) {
      alert("please add item")
    }
    else {
      setIncitem(incItem - 1);
      setIncmoney(incMoney - price)
    }
  }
  useEffect(() => {
    const Filterdata = DataMenu.filter((val) => {
      return val.id == id
    })
    setData(Filterdata);
  }, [id])
  return (
    <>
      <section className="addtocart-section">
        <div className="video-box">
          <video src="../../../Image/4268006-uhd_3840_2160_30fps.mp4" autoPlay muted loop />
        </div>
        <div className="bg-poster flex">
          <img src="../../../Image/logo.png" alt="" />
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
              <div className="heading">
              </div>
              <div className="main-box flex">
                {
                  data && data.map((val) => {
                    const { id, name, image, price } = val;
                    return (
                      <div className="box" key={id}>
                        <div className="content flex">
                          <div className="image">
                            <img src={image} alt="product-photo" />
                          </div>
                          <div className="details">
                            <marquee behavior="scroll" direction="left">hurry up order fast before food is out off stock</marquee>
                            <div className="title flex">
                              <h5>{name}</h5>
                              <span>₹{price}</span>
                            </div>
                            <p>we are the provide best dish and fresh maded dish indians are known that we provide this service 14-11-2004 to still and yes we have best chefes of india if you trust of ma annapurna restaurant than we gives 100% garanty you can not unsetisfy our service</p>
                            <div className="btn">
                              <ul className="flex">
                                <li className="flex" onClick={() => {
                                  let clicksound = new Audio("https://uploads.sitepoint.com/wp-content/uploads/2023/06/1687569402mixkit-fast-double-click-on-mouse-275.wav");
                                  clicksound.play();
                                }}><button onClick={() => decricebtn(price)}>-</button><h5>{incItem}</h5><button onClick={() => incricebtn(price)}>+</button></li>
                                <li><NavLink><button onClick={() => {
                                  let clicksound = new Audio("https://uploads.sitepoint.com/wp-content/uploads/2023/06/1687569402mixkit-fast-double-click-on-mouse-275.wav");
                                  clicksound.play();
                                }}>pay:-{incMoney}</button></NavLink></li>
                              </ul>
                            </div>
                          </div>
                        </div>

                      </div>
                    );

                  })
                }
                <div className="box">
                  <div className="content">
                    <form action="#">
                      <div className="input-box flex" onClick={() => {
                                  let clicksound = new Audio("https://uploads.sitepoint.com/wp-content/uploads/2023/06/1687569402mixkit-fast-double-click-on-mouse-275.wav");
                                  clicksound.play();
                                }}>
                        <label htmlFor="cod">cash on delivery</label>
                        <input type="radio" name="payment" id="cod" required checked />
                        <label htmlFor="gpay">G-pay</label>
                        <input type="radio" name="payment" id="gpay" />
                      </div>
                      <div className="form-box flex">
                        <div className="box">
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
                        </div>
                        <div className="box">
                          <div className="image">
                            <img src="../../../Image/IMG_6675.PNG" alt="" />
                          </div>
                        </div>
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
                <div className="box">
                  <video src="../../../Image/7362582-hd_1920_1080_24fps.mp4" autoPlay muted loop />
                </div>
                <div className="box">
                  <video src="../../../Image/4266812-uhd_3840_2160_30fps.mp4" autoPlay muted loop />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Addtocart;