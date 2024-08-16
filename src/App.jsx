import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Login from "./component/login/Login";
import Home from "./pages/Home";
import Gallery from "./component/Gallery/Gallery";
import Header from "./component/Header/Header";
import Addtocart from "./component/Addtocart/Addtocart";
import About from "./component/About/About";
import Cartlist from "./component/Cartlist/Cartlist";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import Ragistration from "./component/Ragistration/Ragistration";
const App = () => {
  const { id } = useParams();
  return (
    <>     
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/addtocart/:id" Component={Addtocart} />
        <Route path="/login" Component={Login} />
        <Route path="/ragistration" Component={Ragistration} />
        <Route path="/gallery" Component={Gallery} />
        <Route path="/contact" Component={Contact} />
        <Route path="/about" Component={About} />
        <Route path="/cartlist" Component={Cartlist} />      
      </Routes>
      <Footer />
    </>
  );
}
export default App;