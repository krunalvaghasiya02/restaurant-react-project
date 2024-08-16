
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./header.css"
import { useSelector } from "react-redux";
const Header = () => {
  const quantity = useSelector((state) => state.cart.totleQuantity);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const headerElement = document.getElementById("header");

      if (prevScrollPos < currentScrollPos) {
        // Scrolling down
        headerElement.classList.add("header-hidden");
        setTimeout(() => {
          headerElement.classList.add("header-visible");
          headerElement.style.backgroundColor = "#0b1315";
        }); // Delay of 0.2 seconds
      } else if (prevScrollPos <= 10) {
        // Near the top of the page
        headerElement.style.background = "transparent";
      } else {
        // Scrolling up
        headerElement.classList.remove("header-hidden");
        headerElement.classList.add("header-visible");
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);
  return (
    <header id="header">
      <div className="container">
        <div className="row">
          <div className="border">
          </div>
          <div className="buy">
              <NavLink to="/cartlist"><button onClick={() => {
                let clicksound = new Audio("https://uploads.sitepoint.com/wp-content/uploads/2023/06/1687569402mixkit-fast-double-click-on-mouse-275.wav");
                clicksound.play();
              }}><i className="fa-solid fa-cart-shopping"></i>{quantity}</button></NavLink>
            </div>
          <div className="content flex">
            <div className="logo flex">
              <div className="image">
                <img src="../../../Image/logo.png" alt="" />
              </div>
            </div>
            <div className="menu">
              <ul className="flex" onClick={() => {
                let clicksound = new Audio("https://uploads.sitepoint.com/wp-content/uploads/2023/06/1687569402mixkit-fast-double-click-on-mouse-275.wav");
                clicksound.play();
              }}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="./about">About</NavLink></li>
                <li><NavLink to="./contact">Contact</NavLink></li>
                <li> <NavLink to="./gallery">Pages</NavLink></li>
                <li> <NavLink to="/ragistration">Jobs</NavLink></li>
              </ul>
            </div>
            <div className="btn flex">
              <NavLink to="/login" onClick={() => {
                let clicksound = new Audio("https://uploads.sitepoint.com/wp-content/uploads/2023/06/1687569402mixkit-fast-double-click-on-mouse-275.wav");
                clicksound.play();
              }}>Login</NavLink>
            </div>
          </div>
        </div>
      </div> 
    </header>
  );
}
export default Header;