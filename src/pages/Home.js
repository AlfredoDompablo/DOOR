import {React, useEffect} from 'react'
import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import Card from "../components/card";
import {getUserRequest} from "../api/user.api"

const Home = () => {

  useEffect(() =>{
    async function loadUsers() {
      const  response = await getUserRequest();
      console.log(response);
    }
    loadUsers();
  },[])

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