import React from "react";
import Ourmenu from "../component/Home/Ourmenu";
import Homeabout from "../component/Home/Homeabout";
import Tips from "../component/Home/Tips";
import Offer from "../component/Home/Offer";
import RastaurantImage from "../component/Home/RastaurantImage";
import Slider from "../component/Home/Slider";
import Speciality from "../component/Home/Speciality";
import Liveorder from "../component/Home/Liveorder";
const Home = () => {
  // cursor java script start
const cursor = document.createElement("div");
cursor.className = "cursor";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  const { clientX: x, clientY: y } = e;
  cursor.style.setProperty("--cursor-x", `${x}px`);
  cursor.style.setProperty("--cursor-y", `${y}px`);
});
document.addEventListener("mousedown", () => cursor.classList.add("click"));
document.addEventListener("mouseup", () => cursor.classList.remove("click"));
cursor.classList.add("visible");

// cursor java script end
  return (
    <>  
    
      <Slider />
      <Homeabout />
      <Liveorder />
      <RastaurantImage />
      <Ourmenu />
      <Speciality />
      <Offer />
      <Tips />   
    </>
  );
}
export default Home;