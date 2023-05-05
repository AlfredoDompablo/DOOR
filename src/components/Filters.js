import React from 'react'
import { GiWoodCabin,GiIsland,GiForestCamp,GiPalmTree, GiSpookyHouse,GiTreehouse } from "react-icons/gi";
import { TbPool } from "react-icons/tb";
import { MdOutlineBedroomParent } from "react-icons/md";


const Filters = () => {
  return (
    <div>
        <nav className="flex flex-nowrap bg-white shadow dark:bg-gray-700">
    {/* <div className="container flex items-center justify-center mx-auto p-2  text-gray-800 capitalize dark:text-gray-200"> */}
    <div className="flex overflow-x-auto container p-2  text-gray-800 capitalize dark:text-gray-200">
        

        <button href="#" className="flex flex-col justify-center items-center border-b-2 border-transparent hover:text-gray-500 dark:hover:text-gray-400 hover:border-blue-500 mx-1.5 sm:mx-3">
           <GiWoodCabin className="text-[25px] "/> Cabins</button>

        <button href="#" className="flex flex-col justify-center items-center border-b-2 border-transparent hover:text-gray-500 dark:hover:text-gray-400 hover:border-blue-500 mx-1.5 sm:mx-3">
           <GiIsland className="text-[25px] "/> Beach</button>

        <button href="#" className="flex flex-col justify-center items-center border-b-2 border-transparent hover:text-gray-500 dark:hover:text-gray-400 hover:border-blue-500 mx-1.5 sm:mx-3">
           <TbPool className="text-[25px] "/> Amazing pool</button>

        <button href="#" className="flex flex-col justify-center items-center border-b-2 border-transparent hover:text-gray-500 dark:hover:text-gray-400 hover:border-blue-500 mx-1.5 sm:mx-3">
           <GiForestCamp className="text-[25px] "/> National parks</button>

        <button href="#" className="flex flex-col justify-center items-center border-b-2 border-transparent hover:text-gray-500 dark:hover:text-gray-400 hover:border-blue-500 mx-1.5 sm:mx-3">
           <GiPalmTree className="text-[25px] "/> Tropical</button>
        
        <button href="#" className="flex flex-col justify-center items-center border-b-2 border-transparent hover:text-gray-500 dark:hover:text-gray-400 hover:border-blue-500 mx-1.5 sm:mx-3">
           <MdOutlineBedroomParent className="text-[25px] "/> Private rooms</button>

        <button href="#" className="flex flex-col justify-center items-center border-b-2 border-transparent hover:text-gray-500 dark:hover:text-gray-400 hover:border-blue-500 mx-1.5 sm:mx-3">
           <GiSpookyHouse className="text-[25px] "/>Mansions</button>

        <button href="#" className="flex flex-col justify-center items-center border-b-2 border-transparent hover:text-gray-500 dark:hover:text-gray-400 hover:border-blue-500 mx-1.5 sm:mx-3">
           <GiTreehouse className="text-[25px] "/>Treehouse</button>



    </div>  
</nav>

    </div>
  ) 
}

export default Filters 