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
    <div>
      <div
        className={`h-screen bg-gray-900 text-white rounded-sm ${
          isOpen ? "w-56 space-y-6 py-7 px-2" : "w-16 space-y-6 py-7 px-2"
        } `}
      >
        {/*  company logo and toogle Buttone*/}
        <div
          className={`${
            isOpen
              ? "display flex items-center place-content-between lg:space-x-4 space-x-2"
              : "text-center "
          }`}
        >
          <img
            className=" lg:w-28 md:w-20 w-12 "
            src="../../../public/LOGO-SADA-01-1.png"
          />
        </div>

        {/* Navber Content  */}
        <nav>
          {/* first Content */}
          <div
            isOpen={<FaHome></FaHome>}
            className=" p-2 flex items-center rounded-sm text-xl my-2 hover:bg-[#19B3E7] "
          >
            <a href="#" className=" flex items-center space-x-2">
              <FaHome></FaHome>
              <h2 className={`${isOpen ? "inline-block" : "hidden"}`}>Home</h2>
            </a>
          </div>
          {/* first Content */}
          <div className=" p-2 flex items-center rounded-sm text-xl my-2 hover:bg-[#19B3E7] ">
            <a href="#" className=" flex items-center space-x-2">
              <FaUser></FaUser>
              <h2 className={`${isOpen ? "inline-block" : "hidden"}`}>User</h2>
            </a>
          </div>
          {/* first Content */}
          <div className=" p-2 flex items-center rounded-sm text-xl my-2 hover:bg-[#19B3E7] ">
            <a href="#" className=" flex items-center space-x-2">
              <FaCog></FaCog>
              <h2 className={`${isOpen ? "inline-block" : "hidden"}`}>
                Setting
              </h2>
            </a>
          </div>
          {/* first Content */}
          <div className=" p-2 flex items-center rounded-sm text-xl my-2 hover:bg-[#19B3E7] ">
            <a href="#" className=" flex items-center space-x-2">
              <FaFile></FaFile>
              <h2 className={`${isOpen ? "inline-block" : "hidden"}`}>Files</h2>
            </a>
          </div>
        </nav>

        {/* User Profile Section  */}

        <div className=" display flex  items-center space-x-4">
          <div>
            <img
              src="../.../../../../public/download (10).png"
              alt=""
              className={`${
                isOpen
                  ? "w-12 rounded-[100%]  border-2 border-sky-500"
                  : "w-9 rounded-[100%]  border-2 border-sky-500"
              }`}
            />
          </div>
          {isOpen ? (
            <>
              {" "}
              <div className="text-start">
                <h2 className=" text-[14px]">Masud Rana</h2>
                <h2 className=" text-[10px]"> Web Developer </h2>
              </div>
              <div className="ml-auto">
                <FiLogOut className="text-2xl"></FiLogOut>
              </div>{" "}
            </>
          ) : (
            <></>
          )}
        </div>

        {/*Light Mode and Dark Mode*/}

        <div
          className={`${
            !isOpen
              ? " pl-3"
              : " bg-black display flex  items-center place-content-around border-2 border-gray-500 p-[3px] rounded-full"
          }`}
        >
          <div
            className={`${
              isOpen
                ? " display flex items-center bg-sky-950 p-[4px] rounded-full"
                : "my-2"
            }`}
          >
            <PiSunDimFill className="text-xl"></PiSunDimFill>
            <h2 className={`${isOpen ? "text-sm" : "hidden"}`}>Light Mode</h2>
          </div>
          <div
            className={`${
              isOpen ? " display flex  items-center  p-[4px]  rounded-full" : ""
            }`}
          >
            <FaMoon className="text-sm"></FaMoon>
            <h2 className={`${isOpen ? "text-sm" : "hidden"}`}>Dark Mode</h2>
          </div>
        </div>

        <div>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <div className="flex items-center place-content-start space-x-2 ">
                <FaArrowLeft className="lg:text-2xl md:text-xl text-sm"></FaArrowLeft>
                <h2 className={`${isOpen ? "inline-block" : "hidden"}`}>
                  {" "}
                  Collapse menu
                </h2>
              </div>
            ) : (
              <FaArrowRight className="lg:text-2xl md:text-xl text-sm"></FaArrowRight>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
