import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { PiSunDimFill } from "react-icons/pi";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { IoMdArrowDropleftCircle } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";
export const Dashbord = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <div
        className={`h-screen bg-gray-900  text-white rounded-sm ${
          isOpen ? "w-56 space-y-3 py-4  px-2" : "w-14 space-y-2 py-2 px-2"
        } transition-all duration-700 ease-in-out flex flex-col justify-between`}
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
            className=" lg:w-28 md:w-20 w-16 "
            src="../../../public/LOGO-SADA-01-1.png"
          />
        </div>

        {/* Navber Content  */}
        <nav>
          {/* first Content */}
          <div
            className="group relative p-2 flex items-center rounded-lg text-xl my-2 
           hover:bg-[#19B3E7] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out transform"
          >
            <a href="#" className=" flex items-center space-x-2">
              <FaHome className="text-[18px]"></FaHome>
              <h2
                className={`${isOpen ? "inline-block text-[18px]" : "hidden"}`}
              >
                Home
              </h2>
              {isOpen ? (
                <span></span>
              ) : (
                <span className="absolute left-14 bg-[#19B3E7] text-white text-sm px-2 py-2 rounded-sm  opacity-0 translate-y-2 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 whitespace-nowrap">
                  Home
                </span>
              )}
            </a>
          </div>
          {/* first Content */}
          <div
            className="group relative p-2 flex items-center rounded-lg text-xl my-2 
           hover:bg-[#19B3E7] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out transform"
          >
            <a href="#" className=" flex items-center space-x-2">
              <FaUser className="text-[18px]"></FaUser>
              <h2
                className={`${isOpen ? "inline-block text-[18px]" : "hidden"}`}
              >
                User
              </h2>
              {isOpen ? (
                <span></span>
              ) : (
                <span className="absolute left-14 bg-[#19B3E7] text-white text-sm px-2 py-2 rounded-sm  opacity-0 translate-y-2 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 whitespace-nowrap">
                  User
                </span>
              )}
            </a>
          </div>
          {/* first Content */}
          <div
            className=" group relative p-2 flex items-center rounded-lg text-xl my-2 
           hover:bg-[#19B3E7] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out transform"
          >
            <a href="#" className=" flex items-center space-x-2">
              <FaCog className="text-[18px]"></FaCog>
              <h2
                className={`${isOpen ? "inline-block text-[18px]" : "hidden"}`}
              >
                Setting
              </h2>
              {isOpen ? (
                <span></span>
              ) : (
                <span className="absolute left-14 bg-[#19B3E7] text-white text-sm px-2 py-2 rounded-sm  opacity-0 translate-y-2 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 whitespace-nowrap">
                  Setting
                </span>
              )}
            </a>
          </div>
          {/* first Content */}
          <div
            className="group relative p-2 flex items-center rounded-lg text-xl my-2 
           hover:bg-[#19B3E7] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out transform"
          >
            <a href="#" className=" flex items-center space-x-2">
              <FaFile className="text-[18px]"></FaFile>
              <h2
                className={`${isOpen ? "inline-block text-[18px]" : "hidden"}`}
              >
                Files
              </h2>
              {isOpen ? (
                <span></span>
              ) : (
                <span className="absolute left-14 bg-[#19B3E7] text-white text-sm px-2 py-2 rounded-sm  opacity-0 translate-y-2 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 whitespace-nowrap">
                  Files
                </span>
              )}
            </a>
          </div>
        </nav>

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

        <div
          className="group relative p-2 flex items-center rounded-lg text-xl my-2 
           hover:bg-[#19B3E7] hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out transform"
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className=" flex items-center "
          >
            {isOpen ? (
              <div className="flex items-center place-content-start space-x-2 ">
                <IoMdArrowDropleftCircle className="text-[18px]"></IoMdArrowDropleftCircle>
                <h2
                  className={`${
                    isOpen ? "inline-block text-[18px]" : "hidden"
                  }`}
                >
                  {" "}
                  Collapse menu
                </h2>
              </div>
            ) : (
              <IoMdArrowDroprightCircle className="text-[18px]"></IoMdArrowDroprightCircle>
            )}

            {isOpen ? (
              <span></span>
            ) : (
              <span className="absolute left-14 bg-[#19B3E7] text-white text-sm px-2 py-2 rounded-sm  opacity-0 translate-y-2 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 whitespace-nowrap">
                Collapse menu{" "}
              </span>
            )}
          </button>
        </div>

        {/* User Profile Section  */}

        <div className="flex items-center space-x-4 px-2 mt-auto">
          <div className=" group relative flex items-center">
            <img
              src="../.../../../../public/download (10).png"
              className={`${
                isOpen
                  ? "w-12 rounded-[100%]  border-2 border-sky-500"
                  : "max-w-8 rounded-[100%]  border-2 border-sky-500"
              }`}
            />

            {isOpen ? (
              <span></span>
            ) : (
              <span className="absolute left-14 bg-[#19B3E7] text-white text-sm px-2 py-2 rounded-sm  opacity-0 translate-y-2 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 whitespace-nowrap">
                User Profile
              </span>
            )}
          </div>
          {isOpen ? (
            <>
              {" "}
              <div className="text-start">
                <h2 className=" text-[16px]">Masud Rana</h2>
                <h2 className=" text-[12px]"> Web Developer </h2>
              </div>
              <div className="ml-auto">
                <FiLogOut className="text-[20px]"></FiLogOut>
              </div>{" "}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
