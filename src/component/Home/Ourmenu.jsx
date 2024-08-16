import React, { useEffect, useState } from "react";
import "./home.css"
import { DataMenu } from "../../Apimenu";
const Ourmenu = () => {
  const [btnData, setBtnData] = useState("punjabi");
  const [record, setRecord] = useState([]);

  const active = (e) => {
    setBtnData(e.target.innerHTML)
  }

  useEffect(() => {
    const filterData = DataMenu.filter((data) => {
      return btnData == data.category
    })

    setRecord(filterData);

  }, [btnData])
  return (
    <>
      <section className="Ourmenu-section">
      <div className="bg-poster flex">
        <img src="../../../Image/logo.png" alt="" />
      </div>
        <div className="container">
          <div className="row">
            <div className="border">
            </div>
            <div className="content">
              <div className="heading">
                <span>special selection</span>
                <h2>From our menu</h2>
              </div>
              <div className="main-box">
                <div className="btn">
                  <ul className="flex" onClick={() => {
                let clicksound = new Audio("https://uploads.sitepoint.com/wp-content/uploads/2023/06/1687569402mixkit-fast-double-click-on-mouse-275.wav");
                clicksound.play();
              }}>
                    <li className="flex"><button className="active" onClick={active}>punjabi</button></li>
                    <li className="flex"><button onClick={active}>chinese</button></li>                 
                    <li className="flex"><button onClick={active}>gujarati</button></li>
                    <li className="flex"><button onClick={active}>roti</button></li>
                    <li className="flex"><button onClick={active}>cold drink</button></li>
                  </ul>
                </div>
                <div className="box">
                  <ul className="flex">
                    {
                      record && record.map((val) => {
                        const { id, price, name, paragraph } = val
                        return (
                          <li key={id}>
                            <div className="title flex">
                              <h2>{name}</h2><span>₹{price}</span>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Ourmenu;