import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { PiSunDimFill } from "react-icons/pi";

import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";
export const Dashbord = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="h-screen bg-gray-900 text-white w-64 space-y-6 py-7 px-2 ">
        {/*  company logo and toogle Buttone*/}
        <div className="display flex items-center place-content-between space-x-4">
          <img className=" w-28 " src="../../../public/LOGO-SADA-01-1.png" />

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaArrowLeft className="text-2xl"></FaArrowLeft>
            ) : (
              <FaArrowRight className="text-2xl"></FaArrowRight>
            )}
          </button>
        </div>

        {/* Navber Content  */}
        <nav>
          {/* first Content */}
          <div className=" p-2 flex items-center rounded-sm text-xl my-2 hover:bg-[#19B3E7] ">
            <a href="#" className=" flex items-center space-x-2">
              <FaHome></FaHome>
              <h1>Home</h1>
            </a>
          </div>
          {/* first Content */}
          <div className=" p-2 flex items-center rounded-sm text-xl my-2 hover:bg-[#19B3E7] ">
            <a href="#" className=" flex items-center space-x-2">
              <FaUser></FaUser>
              <h1>User</h1>
            </a>
          </div>
          {/* first Content */}
          <div className=" p-2 flex items-center rounded-sm text-xl my-2 hover:bg-[#19B3E7] ">
            <a href="#" className=" flex items-center space-x-2">
              <FaCog></FaCog>
              <h1>Setting</h1>
            </a>
          </div>
          {/* first Content */}
          <div className=" p-2 flex items-center rounded-sm text-xl my-2 hover:bg-[#19B3E7] ">
            <a href="#" className=" flex items-center space-x-2">
              <FaFile></FaFile>
              <h1>Files</h1>
            </a>
          </div>
        </nav>

        {/* User Profile Section  */}

        <div className=" display flex  items-center space-x-4">
          <div>
            <img
              src="../.../../../../public/download (10).png"
              alt=""
              className="w-10  rounded-[100%]  border-2 border-sky-500"
            />
          </div>
          <div className="text-start">
            <h2 className=" text-[14px]">Masud Rana</h2>
            <h2 className=" text-[10px]"> Web Developer </h2>
          </div>
          <div className="ml-auto">
            <FiLogOut className="text-2xl"></FiLogOut>
          </div>
        </div>

        {/*Light Mode and Dark Mode*/}

        <div className=" bg-black display flex  items-center  place-content-between  border-2 border-gray-500 p-[3px] rounded-full">
          <div className=" display flex items-center space-x-[6px]  bg-sky-950  p-2 px-2 rounded-full">
            <PiSunDimFill className="text-xl"></PiSunDimFill>
            <h2 className="text-sm">Light Mode</h2>
          </div>
          <div className=" display flex  items-center space-x-[6px] p-2 px-2 rounded-full">
            <FaMoon className="text-sm"></FaMoon>
            <h2 className="text-sm">Dark Mode</h2>
          </div>
        </div>

        {/*  Test */}

        {/* test */}
      </div>
    </>
  );
};
