// import SingUp from "./pages/signUp";
import {Route, Routes} from "react-router-dom"
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
// import Slide from "./components/Slide";
// import Form from "./components/Form";

import PRUEBA from "./components/PRUEBA";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import SingUp from "./pages/SingUp";
import PageLugar from "./pages/PageLugar";
import Carrusel from "./components/Carrusel";


function App() {
  return <div className="">
  

    {/* PAGES*/}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<SingUp/>} />
      <Route path="/pagelugar" element={<Carrusel/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    
    {/*cards*/}
    {/*footer*/}
  </div>

}

export default App;
