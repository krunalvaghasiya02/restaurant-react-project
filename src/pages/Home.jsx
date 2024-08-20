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