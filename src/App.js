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
import NuestraHistoria from "./pages/NuestraHistoria";
import card from "./components/card";
import Privacidad from "./pages/Privacidad";
import Fundadores from "./pages/Fundadores";


function App() {
  return <div className="">
  

    {/* PAGES*/}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<SingUp/>} />
      <Route path="/nuestrahistoria" element={<NuestraHistoria/>}/>
      <Route path="/pagelugar" element={<Carrusel/>} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/card" element={<card/>} />
      <Route path="/privacidad" element={<Privacidad/>} />
      <Route path="/fundadores" element={<Fundadores/>} />

    </Routes>
    
    {/*cards*/}
    {/*footer*/}
  </div>

}

export default App;
