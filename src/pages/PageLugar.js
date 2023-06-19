import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Filters from '../components/Filters'
import Carrusel from '../components/Carrusel'

const PageLugar = () => {
    return (
        <div>{/* INICIO MAIN */}
            <Navbar />
            <Filters/>

            <Carrusel/>
  
            <Footer />
        </div> // FIN MAIN
    )
}

export default PageLugar