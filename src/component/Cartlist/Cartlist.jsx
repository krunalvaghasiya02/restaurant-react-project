import React from "react";
import "./cartlist.css"
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createAction } from "@reduxjs/toolkit";
import { cartActions } from "../../store/card";
const Cartlist = () => {
  const dispatch = useDispatch();
  let FinalPrice = 0;
  const cartItem = useSelector((state) => state.cart.itemsList);
  cartItem.forEach(element => {
    FinalPrice += element.totleprice;
  });
  const Increment = (val) => {
    const { name, id, price, image, category } = val;

    dispatch(
      cartActions.addToCart(
        {
          name,
          id,
          price,
          image,
          category,
        }
      )
    )
  }
  const Decrement = (val) => {
    dispatch(cartActions.removeFromCart(val.id));
  }
  return (
    <>
      <section className="cartlist-section">
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
              <div className="main-box">
                {cartItem.map((val) => {
                  const { id, name, quantity, totleprice, price, image, category } = val;
                  return (
                    <div className="box" key={id}>
                      <div className="content flex">
                        <div className="image">
                          <img src={image} alt="" />
                        </div>
                        <div className="details flex">
                          <ul className="flex">
                            <li> <h5>{name}</h5></li>
                            <li><p>{category}</p></li>
                            <li className="flex" onClick={() => {
                              let clicksound = new Audio("https://uploads.sitepoint.com/wp-content/uploads/2023/06/1687569402mixkit-fast-double-click-on-mouse-275.wav");
                              clicksound.play();
                            }}>
                              <button onClick={() => Increment(val)}><i className="fa-solid fa-square-plus"></i></button>
                              <p>{quantity}</p>
                              <button onClick={() => Decrement(val)}><i className="fa-solid fa-square-minus"></i></button></li>
                            <li><p>price:- {price}</p></li>
                            <li><p>finalprice:- {totleprice}</p></li>
                          </ul>
                        </div>
                      </div>
                    </div>



                  );
                })}

              </div>
              <div className="finalprice flex">
                <h5>total:- ₹{FinalPrice}</h5>
                <NavLink to="/payment"><button type="submit" onClick={() => {
                      let clicksound = new Audio("https://uploads.sitepoint.com/wp-content/uploads/2023/06/1687569402mixkit-fast-double-click-on-mouse-275.wav");
                      clicksound.play();
                    }}>PayNow</button></NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Cartlist;