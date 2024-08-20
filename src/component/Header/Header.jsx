
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./header.css"
import { useSelector } from "react-redux";
import { logDOM } from "@testing-library/react";
const menu = [
  {
    id: 1,
    menu: "home",
    menupath: "/",
    ddmenu: [
      {
        id: 101,
        ddname: "our speciality",
        ddpath: "/speciality",
      },
      {
        id: 102,
        ddname: "about page",
        ddpath: "/homeabout",
      },
      {
        id: 103,
        ddname: "today offer",
        ddpath: "/offer",
      },
      {
        id: 104,
        ddname: "our information",
        ddpath: "/our info",
      },
      {
        id: 105,
        ddname: "tips",
        ddpath: "/tips",
      },
    ]
  },
  {
    id: 2,
    menu: "jobs",
    menupath: "/",
    ddmenu: [
      {
        id: 106,
        ddname: "manager post",
        ddpath: "/ragistration",
      },
      {
        id: 107,
        ddname: "chef post",
        ddpath: "/ragistration",
        arrow: '+',
        sddmenu: [
          {
            id: 201,
            sddname: "punjabi chef",
            sddpath: "/ragistration",
          },
          {
            id: 202,
            sddname: "chinese chef",
            sddpath: "/ragistration",
          },
          {
            id: 203,
            sddname: "gujarati chef",
            sddpath: "/ragistration",
          }
        ]
      },
      {
        id: 108,
        ddname: "waiter post",
        ddpath: "/ragistration",
      },

    ]
  },
  {
    id: 3,
    menu: "pages",
    menupath: "./gallery"
  },
  {
    id: 4,
    menu: "about",
    menupath: "./about"
  },
  {
    id: 5,
    menu: "contact",
    menupath: "./contact"
  }
]
const Header = () => {
  const quantity = useSelector((state) => state.cart.totleQuantity);
 
  const [isActive, setIsActive] = useState(false);

  const showMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="border">
          </div>
          <div className="content flex">
            <div className="logo flex">
              <div className="image">
              <NavLink to="/"><img src="../../../Image/logo.png" alt="" /></NavLink>
               
              </div>
            </div>
            <div className="menu">
              <div className={`btn flex ${isActive ? 'active' : ''}`} onClick={showMenu}>
                <span><i className="fa-solid fa-globe"></i></span>
              </div>
              <ul className={isActive ? 'active' : ''} id="menu" onClick={() => {
                let clicksound = new Audio("https://uploads.sitepoint.com/wp-content/uploads/2023/06/1687569402mixkit-fast-double-click-on-mouse-275.wav");
                clicksound.play();
              }}>
                {menu.map((val) => {
                  const { id, menu, menupath, ddmenu } = val;

                  return (
                    <li key={id}><NavLink to={menupath}>{menu}</NavLink>
                      {
                        ddmenu &&
                        <div className="drop-down">
                          <ul>
                            {
                              ddmenu.map((e) => {
                                const { id, ddname, ddpath, sddmenu, arrow } = e;
                                return (<li key={id} className="flex"><NavLink to={ddpath}>{ddname}</NavLink>{arrow}
                                  {
                                    sddmenu &&
                                    <div className="subdrop-down">
                                      <ul>
                                        {sddmenu.map((sddval) => {
                                          const { id, sddname, sddpath } = sddval;
                                          return (<li key={id}><NavLink to={sddpath}>{sddname}</NavLink></li>)
                                        })}

                                      </ul>
                                    </div>
                                  }
                                </li>)
                              })
                            }
                          </ul>
                        </div>
                      }
                    </li>
                  );

                })}
              </ul>
            </div>
            <div className="buy flex">
              <NavLink to="/cartlist"><button onClick={() => {
                let clicksound = new Audio("https://uploads.sitepoint.com/wp-content/uploads/2023/06/1687569402mixkit-fast-double-click-on-mouse-275.wav");
                clicksound.play();
              }}><i className="fa-solid fa-cart-shopping"></i>{quantity}</button></NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;