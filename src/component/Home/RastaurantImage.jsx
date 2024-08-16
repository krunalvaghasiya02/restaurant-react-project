import React, { useEffect, useRef, useState } from "react";
const RastaurantImage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef([]);
  const imagesRef = useRef([]);
  const handleMouseOver = (index) => {
    setActiveIndex(index);
  };
  useEffect(() => {
    const handleMouseOverEvent = (index) => () => handleMouseOver(index);
    // Attach event listeners after component mounts
    cardsRef.current.forEach((card, index) => {
      if (card) {
        card.addEventListener('mouseover', handleMouseOverEvent(index));
      }
    });

    // Clean up event listeners
    return () => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          card.removeEventListener('mouseover', handleMouseOverEvent(index));
        }
      });
    };
  }, []);
  return (
    <section className="rastaurantimage-section">
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
                <span>our rastaurant images</span>
                <div className="title flex">
                  <div className="image">
                    <img src="../../Image/logo.png" alt="" />
                  </div>
                  <h1>Ma annapurana</h1>
                  <div className="image">
                    <img src="../../Image/logo.png" alt="" />
                  </div>
                </div>
                <p>We are started this rastaurant on the date <span>14-11-2004</span> and still this is the best rastaurant in gujarat so thank you for your support and love about ma annapurana rastaurant</p>
              </div>
         
            <div className="main-card">
              <div className="image-bg">
                <img
                  src="../../../Image/AdobeStock_98997233_Preview.jpeg"
                  alt=""
                  className={activeIndex === 0 ? "active" : ""}
                  ref={(el) => (imagesRef.current[0] = el)}
                />
                <img
                  src="../../../Image/AdobeStock_811058688_Preview.jpeg"
                  alt=""
                  className={activeIndex === 1 ? "active" : ""}
                  ref={(el) => (imagesRef.current[1] = el)}
                />
                <img
                  src="../../../Image/AdobeStock_889665166_Preview.jpeg"
                  alt=""
                  className={activeIndex === 2 ? "active" : ""}
                  ref={(el) => (imagesRef.current[2] = el)}
                />
                <img
                  src="../../../Image/AdobeStock_627853212_Preview.jpeg"
                  alt=""
                  className={activeIndex === 3 ? "active" : ""}
                  ref={(el) => (imagesRef.current[3] = el)}
                />
                <img
                  src="../../../Image/AdobeStock_734623462_Preview.jpeg"
                  alt=""
                  className={activeIndex === 4 ? "active" : ""}
                  ref={(el) => (imagesRef.current[4] = el)}
                />
              </div>
              {[0, 1, 2, 3, 4].map((index) => (
                <div
                  key={index}
                  className="card"
                  ref={(el) => (cardsRef.current[index] = el)}
                >
                  <div className="content">
                  <div className="image flex">
                    <img src="../../../Image/logo.png" alt="" />
                  </div>                  
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RastaurantImage;
