import {React} from 'react'
import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
//import Card from "../components/card";

import Footer from '../components/Footer';

const Home = () => {



  return (
    <div>
        {/*navbar*/}
        <Navbar />
        {/* filters */}
        <Filters />
    
        {/* <Card/> */}

        <Footer/>

        
    </div>
  )
}

export default Home