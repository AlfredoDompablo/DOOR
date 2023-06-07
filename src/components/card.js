import React from 'react'
import {BiUser } from "react-icons/bi";

const Card = ({visible}) => {

    if(!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <button className="flex items-center rounded-full px-3 py-2 gap-2 bg-[#ff5a60] text-white font-bold shadow-lg  hover:bg-[#f9787c] duration-100 ease-out">Sign In <BiUser className="text-[22px]" /></button>

        <div className="bg-white p-2 rounded">
            My modal
        </div>
    </div>
  )
}

export default Card