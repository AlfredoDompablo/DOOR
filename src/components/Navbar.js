import React from 'react'
// import { Button } from "@material-tailwind/react";
import Form from './form';
import logo from '../assets/Logob.png'
import logo2 from '../assets/Logow.png'
// import logow from '../assets/LogoDoor_W.png'
// import { BiWorld, BiUser } from "react-icons/bi";
import { BiWorld } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="border-b p-2 sticky top-0 z-50 bg-white/[95%] dark:bg-gray-700  ">
      <div className="flex justify-between items-center sm:mx-6 md:mx-10 lg:mx-12 ">
        {/* Left */}
        <div className="items-center  flex">
          <img src={logo} className="block dark:hidden max-h-12 p-2  " alt="logo" />
          <img src={logo2} className="hidden dark:block max-h-12 p-2  " alt="logo" />
          
        </div>
        {/* Middle */}
        <div className="hidden lg:flex justify-center items-center relative shadow-sm  border rounded-full dark:bg-white ">
          <input
            type="search" 
            placeholder=""
            className="py-2.5 w-[20rem] rounded-full outline-0"
          />
          <div className="grid grid-cols-3 justify-between absolute w-full pr-16 p6l-6 font-semibold text-gray-600">
            <button className="w-full px-3">Anywhere</button>
            <button className="border-l border-x  ">Any week</button>
            <button className="w-full text-gray-600/60 pl-2">Add guest</button>
          </div>
          <div className="bg-[#ff5a60] p-2 rounded-full mr-2">
            <FiSearch className="text-white w-full" />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center pr-3  font-semibold text-gray-600">
          
          <div className="flex items-center mx-8 gap-1">
            <BiWorld className="" />
            <div className="">EN</div>
          </div>

          {/* <div className="flex items-center border px-3 py-2 rounded-full gap-2 bg-[#ff5a60] text-white font-bold shadow-lg  hover:bg-[#f9787c] duration-100 ease-out">
            <p>Sign in</p>
            <BiUser className="text-[22px]" />
          </div> */}
          {/* <Button  className="flex items-center rounded-full px-3 py-2 gap-2 bg-[#ff5a60] text-white font-bold shadow-lg  hover:bg-[#f9787c] duration-100 ease-out">Sign In <BiUser className="text-[22px]" /></Button> */}
          <Form/>
        </div>
      </div>
    </div>
  )
}

export default Navbar