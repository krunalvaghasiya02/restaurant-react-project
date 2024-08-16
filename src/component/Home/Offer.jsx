import React, { useEffect, useState } from "react";
import { DataMenu } from "../../Apimenu";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/card";
const Offer = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);

  const [record, setRecord] = useState([]);
  const dispatch = useDispatch();
  const AddItem = (val) => {
    const { name, id, price, image, category } = val;
    dispatch(cartActions.addToCart({
      name,
      id,
      price,
      image,
      category,
    }))
  }
  useEffect(() => {
    const filterData = DataMenu.filter((data) => {
      return "SpecialDish" == data.category
    })
    setRecord(filterData);
  }, [setRecord])

  return (
    <>
      <section className="offer-section">
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
                <span>today offer</span>
                <h1>special Items</h1>
              </div>
              <div className="main-cart flex">
                {
                  record && record.map((val) => {
                    const { id, price, name, image, category } = val;

                    return (
                      <div className="cart" key={id}>
                        <div className="content" >
                          <div className="image">
                            <div className="title">
                              <h5>availabel</h5>
                            </div>
                            <div className="addtocart" onClick={() => {
                              let clicksound = new Audio("https://uploads.sitepoint.com/wp-content/uploads/2023/06/1687569402mixkit-fast-double-click-on-mouse-275.wav");
                              clicksound.play();
                            }}>
                              <button onClick={() => AddItem(val)}>Add to cart</button>
                            </div>
                            <div className="btn flex">
                              <NavLink to={`/addtocart/${id}`} onClick={() => {
                                let clicksound = new Audio("https://uploads.sitepoint.com/wp-content/uploads/2023/06/1687569402mixkit-fast-double-click-on-mouse-275.wav");
                                clicksound.play();
                              }}>Order</NavLink>
                            </div>
                            <img src={image} alt="" />
                          </div>
                          <div className="details flex">
                            <ul className="flex">
                              <li><i className="fa-solid fa-star"></i></li>
                              <li><i className="fa-solid fa-star"></i></li>
                              <li><i className="fa-solid fa-star"></i></li>
                              <li><i className="fa-solid fa-star"></i></li>
                              <li><i className="fa-solid fa-star"></i></li>
                            </ul>
                            <p>{name}</p><span>₹{price}</span>
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
export default Offer;