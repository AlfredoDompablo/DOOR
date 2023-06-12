import React from 'react'
import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import Card from "../components/card";

const Home = () => {
  return (
    <div>
        {/*navbar*/}
        <Navbar />
        {/* filters */}
        <Filters />
    
        <Card/>
        
    </div>
  )
}

export default Home