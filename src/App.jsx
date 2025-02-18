"use client";
import { useState  , useEffect} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MegaMenu } from "flowbite-react";
import { Homepage } from "./compnent/Homepage";
import Searchpage from "./compnent/Searchpage";
import Aboutpage from "./compnent/Aboutpage";
import Shoppage from "./compnent/Shoppage";
import Wishlist from "./compnent/Wishlist";
// import Footerpage from "./compnent/Footerpage";

export default function App() {
  const [menu, setmenu] = useState(false);
  const [login, setlogin] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Track menu bar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  // Scroll handler to show/hide the menu bar
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false); // Hide menu on scroll down
    } else {
      setIsVisible(true); // Show menu on scroll up
    }
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [lastScrollY]);

  return (
    <Router>
      <div className={`w-full backdrop-blur-lg bg-opacity-60 fixed top-0 z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}>
        <div className="flex justify-between lg:px-10 md:px-8 sm:px-6 px-4  w-full lg:h-16 md:h-14 sm:h-12 h-10  items-center font-bold font-sens  ">
          <Link to="/" className="md:flex sm:hidden hidden">
            SHOPINGO
          </Link>
          <button
            onClick={() => {
              setmenu(!menu);
            }}
          >
            <img
              src="https://www.freeiconspng.com/uploads/menu-icon-13.png"
              alt=""
              className="sm:w-8 w-6 lg:hidden md:hidden sm:flex flex relative "
            />
          </button>

          <div className=" lg:gap-10 md:gap-8 sm:gap-5 gap-4 lg:flex md:flex hidden">
            <Link to="/">HOME</Link>

            <Link to="/">
              <MegaMenu.Dropdown toggle={<>CATEGORIES</>}>
                <ul className="grid grid-cols-3">
                  <div className="space-y-4 p-4">
                    <li>
                      <Link
                        to=""
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Casual T-Shirts
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Jackets
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Jeans
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Sports Shoses
                      </Link>
                    </li>
                  </div>
                  <div className="space-y-4 p-4">
                    <li>
                      <Link
                        to=""
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Mobile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Laptop
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Lighting
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Smart Watch
                      </Link>
                    </li>
                  </div>
                  <div className="space-y-4 p-4">
                    <li>
                      <Link
                        to=""
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Belts
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        PC Monitors
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Formal
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Dresses
                      </Link>
                    </li>
                  </div>
                </ul>
              </MegaMenu.Dropdown>
            </Link>

            <Link to="/shoppage">SHOP</Link>
            <Link to="/aboutpage">ABOUT</Link>
          </div>
          <div className="flex lg:gap-10 md:gap-8 sm:gap-5 gap-3 items-center">
            <Link to="/searchpage">
              <img
                src="https://www.freeiconspng.com/uploads/search-icon-png-23.png"
                alt=""
                className="lg:w-14 md:w-14 sm:w-12 w-10 "
              />
            </Link>
            <Link to="/wishlist">
              <img
                src="https://icon-library.com/images/heart-icon-png/heart-icon-png-29.jpg"
                alt=""
                className="md:w-9 sm:w-8 w-6"
              />
            </Link>
            <button
              onClick={() => {
                setlogin(!login);
              }}
            >
              <img
                src="https://icon-library.com/images/login-icon-images/login-icon-images-0.jpg"
                alt="login"
                className="md:w-8 sm:w-6 w-6"
              />
            </button>
            <div
              className={`fixed right-0 top-0 h-screen w-[50vw] transform ${
                login ? "translate-x-0" : "translate-x-full"
              } bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out`}
            >
              <div className="py-10 p-2">
                <form action="">
                  <img src="https://img.freepik.com/free-vector/professional-tiktok-profile-picture_742173-5866.jpg?uid=R184421727&ga=GA1.1.273663887.1735058597&semt=ais_hybrid" alt="" className="rounded-full w-28 h-28 "/>
                  
                </form>
                <button
                  className="text-gray-500 hover:text-black"
                  onClick={() => setlogin(false)}
                >
                  Close
                </button>
                {/* Add profile options here */}
              </div>
            </div>
          </div>
          <div
            className={`fixed left-0 h-screen w-[50vw] transform ${
              menu ? "translate-x-0" : "-translate-x-full"
            } bg-white flex md:hidden flex-col gap-5 sm:top-11 top-10 z-50 transition pl-3 pt-6 sm:text-[2rem] text-[0.9rem]`}
          >
            <Link to="/">HOME</Link>
            <Link to="/">
              <MegaMenu.Dropdown toggle={<>CATEGORIES</>}>
                <ul className="grid grid-cols sm:w-[12rem] w-[9rem] ">
                  <div className="space-y-1 pl-4">
                    <li>
                      <Link
                        to=""
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Casual T-Shirts
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Jackets
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Jeans
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Sports Shoses
                      </Link>
                    </li>
                  </div>
                  <div className="space-y-1 pl-4">
                    <li>
                      <Link
                        to=""
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Mobile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Laptop
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Lighting
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Smart Watch
                      </Link>
                    </li>
                  </div>
                  <div className="space-y-1 pl-4">
                    <li>
                      <Link
                        to=""
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Belts
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        PC Monitors
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Formal
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="hover:text-primary-600 dark:hover:text-primary-500"
                      >
                        Dresses
                      </Link>
                    </li>
                  </div>
                </ul>
              </MegaMenu.Dropdown>
            </Link>
            <Link to="/shoppage">SHOP</Link>
            <Link to="/aboutpage">ABOUT</Link>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/searchpage" element={<Searchpage />}></Route>
        <Route path="/aboutpage" element={<Aboutpage />}></Route>
        <Route path="/shoppage" element={<Shoppage />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        {/* <Route path="/footerpage" element={<Footerpage />}></Route> */}
      </Routes>

      {/* <Footerpage>
        <Footerpage />
      </Footerpage> */}
    </Router>
  );
}
