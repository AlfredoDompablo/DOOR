import SignUp from "./pages/signUp";
import {Route, Routes} from "react-router-dom"
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
// import Slide from "./components/Slide";
// import Form from "./components/Form";

import PRUEBA from "./components/PRUEBA";
import Cards from "./components/Cards";
import Footer from "./components/Footer";


function App() {
  return <div className="">
  

    {/* PAGES*/}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    
    {/*cards*/}
    {/*footer*/}
  </div>

}

export default App;
