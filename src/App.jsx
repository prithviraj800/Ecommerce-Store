'use client';
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MegaMenu } from 'flowbite-react';
import  {Homepage}  from "./compnent/Homepage";

import Searchpage from "./compnent/Searchpage";

export default function App() {
  const [menu, setmenu] = useState(false)

  return (
    <Router>
      <div className=""> 
        <div className="flex justify-between lg:px-10 md:px-8 sm:px-6 px-4  w-full lg:h-16 md:h-14 sm:h-12 h-10  items-center font-bold font-sens  ">
          <button onClick={()=>{setmenu(!menu)}}><img
            src="https://www.freeiconspng.com/uploads/menu-icon-13.png"
            alt=""
            className="sm:w-8 w-6 lg:hidden md:hidden sm:flex flex relative "
          /></button>
          <div className=" lg:gap-10 md:gap-8 sm:gap-5 gap-4 lg:flex md:flex hidden">
            <Link to="/">BRAND...</Link>
            <Link to="/">HOME</Link>
            
            <Link to="/">
            <MegaMenu.Dropdown toggle={<>CATEGORIES</>}>
              <ul className="grid grid-cols-3">
                <div className="space-y-4 p-4">
                  <li>
                    <Link to="" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Casual T-Shirts
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Jackets
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Jeans
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Sports Shoses
                    </Link>
                  </li>
                </div>
                <div className="space-y-4 p-4">
                  <li>
                    <Link to="" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Mobile
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Laptop
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Lighting
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Smart Watch
                    </Link>
                  </li>
                </div>
                <div className="space-y-4 p-4">
                  <li>
                    <Link to="" className="hover:text-primary-600 dark:hover:text-primary-500">
                     Belts
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-primary-600 dark:hover:text-primary-500">
                      PC Monitors
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Formal
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Dresses
                    </Link>
                  </li>
                </div>
              </ul>
            </MegaMenu.Dropdown>
          </Link>

            <Link to="/shop">SHOP</Link>
            <Link to="/about">ABOUT</Link>
            
          </div>
          <div className="flex lg:gap-10 md:gap-8 sm:gap-5 gap-3 items-center">
            <Link to='/searchpage'>
            <img
              src="https://www.freeiconspng.com/uploads/search-icon-png-23.png"
              alt=""
              className="lg:w-14 md:w-14 sm:w-12 w-10 "
            />
            </Link>
            <img
              src="https://icon-library.com/images/heart-icon-png/heart-icon-png-29.jpg"
              alt=""
              className="md:w-9 sm:w-8 w-6"
            />
            <img
              src="https://th.bing.com/th/id/OIP.f4Kk76J2oE3RO3xhcUgPngAAAA?rs=1&pid=ImgDetMain"
              alt=""
              className="md:w-8 sm:8 w-6 "
            />
            <img
              src="https://icon-library.com/images/login-icon-images/login-icon-images-0.jpg"
              alt=""
              className="md:w-8 sm:w-6 w-6"
            />
          </div>
          <div className={`fixed left-0 h-screen w-[25vw] transform ${menu? "translate-x-0":"-translate-x-full"} bg-white flex md:hidden flex-col gap-5 sm:top-11 top-8 z-50 transition pl-3 pt-6 sm:text-[1rem] text-[0.68rem]`}>
           
            <Link to="/">HOME</Link>
            <Link to="/">
            <MegaMenu.Dropdown toggle={<>CATEGORIES</>}>
              <ul className="grid grid-cols sm:w-[12rem] w-[6rem] ">
                <div className="space-y-1 pl-4">
                  <li>
                    <Link to="" className="hover:text-primary-600 dark:hover:text-primary-500">
                    Casual T-Shirts
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Jackets
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Jeans
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Sports Shoses
                    </Link>
                  </li>
                </div>
                <div className="space-y-1 pl-4">
                  <li>
                    <Link to="" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Mobile
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Laptop
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Lighting
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Smart Watch
                    </Link>
                  </li>
                </div>
                <div className="space-y-1 pl-4">
                  <li>
                    <Link to="" className="hover:text-primary-600 dark:hover:text-primary-500">
                     Belts
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-primary-600 dark:hover:text-primary-500">
                      PC Monitors
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Formal
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="hover:text-primary-600 dark:hover:text-primary-500">
                      Dresses
                    </Link>
                  </li>
                </div>
              </ul>
            </MegaMenu.Dropdown>
          </Link>
            <Link to="/shop">SHOP</Link>
            <Link to="/about">ABOUT</Link>
          

          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/searchpage" element={<Searchpage/>}></Route>
      </Routes>
    </Router>
  );
}
