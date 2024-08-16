import React from "react";
import { NavLink } from "react-router-dom";
import "./login.css"
const Login = () => {
  return (
    <>
      <section className="login-section">
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
                <h3>MY ACCOUNT</h3>

                <p>Home <i className="fa-solid fa-angles-right"></i> My account</p>
              </div>
              <div className="form-box">
                <form action="#">
                  <h2>LOGIN</h2>
                  <label htmlFor="username">usename or email address</label>
                  <input type="text" placeholder="enter username" required />
                  <label htmlFor="password">password</label>
                  <input type="password" placeholder="******" required />
                  <NavLink>forgate password ?</NavLink>
                  <div className="checkbox flex">
                    <input className="checkbox" type="checkbox" />
                    <label htmlFor="remember">Remember me</label>
                  </div>
                  <div className="btn flex">
                    <button type="submit" onClick={() => {
                                  let clicksound = new Audio("https://uploads.sitepoint.com/wp-content/uploads/2023/06/1687569402mixkit-fast-double-click-on-mouse-275.wav");
                                  clicksound.play();
                                }}>submit</button>
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
export default Login;