"use client";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";


export function Homepage() {
  return (
    <div>
      <div className=" lg:h-[30rem] md:h-[29rem] sm:h-[19rem] h-[10rem] ">
        <Carousel>
          {/* first img */}
          <Link to="/">
            <div className="grid grid-cols-2">
              <div className="bg-blue-500 flex flex-row items-center font-sans">
                <div className="md:pl-20 sm:pl-14 pl-8 flex flex-col md:gap-3 sm:gap-1.5 gap-0 ">
                  <p className="md:text-[2rem] sm:text-[1.2rem] font-semibold">
                    New Arrival
                  </p>
                  <p className="md:text-[2.6rem] sm:text-[1.8rem] text-[1.3rem]  font-bold">
                    Woman Fashion
                  </p>
                  <i className="md:text-[1.4rem] sm:text-[0.9rem] text-sm font-semibold ">
                    Last call for upto 25%
                  </i>

                  <button className="bg-black sm:py-2 py-0.5 sm:px-2  md:w-[9rem] sm:w-[7rem] w-[5rem] md:text-lg sm:text-md text-sm font-bold  text-white">
                    SHOP NOW
                  </button>
                </div>
              </div>
              <div className="bg-blue-500">
                <img
                  src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/sliders/s_1.webp"
                  alt="..."
                />
              </div>
            </div>
          </Link>
          {/* secand img */}
          <Link to="/">
            <div className="grid grid-cols-2">
              <div className="bg-red-600 flex flex-row items-center font-sans">
                <div className="md:pl-20 sm:pl-14 pl-8 flex flex-col md:gap-3 sm:gap-1.5 gap-0 ">
                  <p className="md:text-[2rem] sm:text-[1.2rem] font-semibold">
                    Latest Trending
                  </p>
                  <p className="md:text-[2.6rem] sm:text-[1.8rem] text-[1.3rem]  font-bold">
                    Fashion Wear
                  </p>
                  <i className="md:text-[1.4rem] sm:text-[0.9rem] text-sm font-semibold ">
                    Last call for upto 35%
                  </i>
                  <button className="bg-black sm:py-2 py-0.5 sm:px-2   md:w-[9rem] sm:w-[7rem] w-[5rem] md:text-lg sm:text-md text-sm font-bold  text-white">
                    SHOP NOW
                  </button>
                </div>
              </div>
              <div className="bg-red-600">
                <img
                  src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/sliders/s_2.webp"
                  alt="..."
                />
              </div>
            </div>
          </Link>
          {/* thard img */}
          <Link to="/">
            <div className="grid grid-cols-2">
              <div className="bg-indigo-400 flex flex-row items-center font-sans">
                <div className="md:pl-20 sm:pl-14 pl-8 flex flex-col md:gap-3 sm:gap-1.5 gap-0 ">
                  <p className="md:text-[2rem] sm:text-[1.2rem] font-semibold">
                    New Trending
                  </p>
                  <p className="md:text-[2.6rem] sm:text-[1.8rem] text-[1.3rem]  font-bold">
                    Kids Fashion
                  </p>
                  <i className="md:text-[1.4rem] sm:text-[0.9rem] text-sm font-semibold ">
                    Last call for upto 15%
                  </i>
                  <button className="bg-black sm:py-2 py-0.5 sm:px-2  md:w-[9rem] sm:w-[7rem] w-[5rem] md:text-lg sm:text-md text-sm font-bold  text-white">
                    SHOP NOW
                  </button>
                </div>
              </div>
              <div className="bg-indigo-400">
                <img
                  src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/sliders/s_3.webp"
                  alt="..."
                />
              </div>
            </div>
          </Link>
          {/* fourth img */}
          <Link to="/">
            <div className="grid grid-cols-2">
              <div className="bg-yellow-300 flex flex-row items-center font-sans">
                <div className="md:pl-20 sm:pl-14 pl-8 flex flex-col md:gap-3 sm:gap-1.5 gap-0 ">
                  <p className="md:text-[2rem] sm:text-[1.2rem] font-semibold">
                    Latest Trending
                  </p>
                  <p className="md:text-[2.6rem] sm:text-[1.8rem] text-[1.3rem]  font-bold">
                    Electronics Items
                  </p>
                  <i className="md:text-[1.4rem] sm:text-[0.9rem] text-sm font-semibold ">
                    Last call for upto 45%
                  </i>
                  <button className="bg-black sm:py-2 py-0.5 sm:px-2  md:w-[9rem] sm:w-[7rem] w-[5rem] md:text-lg sm:text-md text-sm font-bold  text-white">
                    SHOP NOW
                  </button>
                </div>
              </div>
              <div className="bg-yellow-300">
                <img
                  src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/sliders/s_4.webp"
                  alt="..."
                />
              </div>
            </div>
          </Link>
          {/* fifth img */}
          <Link to="/">
            <div className="grid grid-cols-2">
              <div className="bg-green-400 flex flex-row items-center font-sans">
                <div className="md:pl-20 sm:pl-14 pl-8 flex flex-col md:gap-3 sm:gap-1.5 gap-0 ">
                  <p className="md:text-[2rem] sm:text-[1.2rem] font-semibold">
                    Super Deals
                  </p>
                  <p className="md:text-[2.6rem] sm:text-[1.8rem] text-[1.3rem]  font-bold">
                    Home Furniture
                  </p>
                  <i className="md:text-[1.4rem] sm:text-[0.9rem] text-sm font-semibold ">
                    Last call for upto 30%
                  </i>
                  <button className="bg-black sm:py-2 py-0.5 sm:px-2  md:w-[9rem] sm:w-[7rem] w-[5rem] md:text-lg sm:text-md text-sm font-bold  text-white">
                    SHOP NOW
                  </button>
                </div>
              </div>
              <div className="bg-green-400">
                <img
                  src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/sliders/s_5.webp"
                  alt="..."
                />
              </div>
            </div>
          </Link>
        </Carousel>
      </div>
      <div className="text-black flex flex-col items-center px-5 py-5">
        <div>
          <p className="font-semibold text-[2rem] py-5">Featured Product</p>
        </div>
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-3">
          <Link className=" shadow-lg shadow-gray-300">
            <div>
              <img
                src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/featured-products/02.webp"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center md:py-4 sm:py-2 py-0.5">
              <p className="font-semibold">Product Name</p>
              <p>⭐⭐⭐⭐⭐</p>
              <i>$59</i>
            </div>
          </Link>

          <Link className="border-[0.01rem] shadow-lg shadow-gray-300">
            <div>
              <img
                src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/featured-products/01.webp"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center md:py-4 sm:py-2 py-0.5">
              <p className="font-semibold">Product Name</p>
              <p>⭐⭐⭐⭐⭐</p>
              <i>$59</i>
            </div>
          </Link>

          <Link className="border-[0.01rem] shadow-lg shadow-gray-300">
            <div>
              <img
                src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/featured-products/03.webp"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center md:py-4 sm:py-2 py-0.5">
              <p className="font-semibold">Product Name</p>
              <p>⭐⭐⭐⭐⭐</p>
              <i>$59</i>
            </div>
          </Link>

          <Link className="border-[0.01rem] shadow-lg shadow-gray-300">
            <div>
              <img
                src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/featured-products/04.webp"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center md:py-4 sm:py-2 py-0.5">
              <p className="font-semibold">Product Name</p>
              <p>⭐⭐⭐⭐⭐</p>
              <i>$59</i>
            </div>
          </Link>

          <Link className="border-[0.01rem] shadow-lg shadow-gray-300">
            <div>
              <img
                src="https://codervent.com/shopingo/demo/shopingo_V1/assets/images/featured-products/05.webp"
                alt=""
              />
            </div>
            <div className="flex flex-col items-center md:py-4 sm:py-2 py-0.5">
              <p className="font-semibold">Product Name</p>
              <p>⭐⭐⭐⭐⭐</p>
              <i>$59</i>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage();
